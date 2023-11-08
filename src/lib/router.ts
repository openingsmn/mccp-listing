import { NextRequest, NextResponse } from "next/server";
import { ZodSchema, z } from "zod";
import urlParser from "url";

type IRequestValidation<
  TBody extends ZodSchema<any, any>,
  TParams extends ZodSchema<any, any>,
  TQuery extends ZodSchema<any, any>,
  TResp extends ZodSchema<any, any>
> = {
  body?: TBody | null;
  params?: TParams | null;
  query?: TQuery | null;
  response?: TResp | null;
};

type IRequestContext<
  TBody extends ZodSchema<any, any> = any,
  //   TParams extends ZodSchema<any, any> = any,
  TQuery extends ZodSchema<any, any> = any
> = {
  body: z.infer<TBody>;
  //   params: z.infer<TParams>;
  query: z.infer<TQuery>;
};

type RouteParams<
  TBody extends ZodSchema<any, any>,
  TParams extends ZodSchema<any, any>,
  TQuery extends ZodSchema<any, any>,
  TResp extends ZodSchema<any, any>
> = {
  validate?: IRequestValidation<TBody, TParams, TQuery, TResp>;
  handler: (ctx: IRequestContext<TBody, TQuery>) => Promise<z.infer<TResp>>;
};

const extractQueryFromURL = (url: string) => {
  return urlParser.parse(url, true).query;
};

async function validateRequest(
  req: NextRequest,
  validate: IRequestValidation<ZodSchema, ZodSchema, ZodSchema, ZodSchema>
) {
  try {
    let parsedQuery = {};
    let parsedBody = {};
    let isValid = false;
    if (validate.body) {
      const bodyParsing = await validate.body.safeParseAsync(await req.json());
      isValid = bodyParsing.success;
      if (bodyParsing.success) {
        parsedBody = bodyParsing.data;
      }
    }
    // if (validate.params) {
    //   return (await validate.params.safeParseAsync()).success;
    // }
    if (validate.query) {
      const query = extractQueryFromURL(req.url);
      const querParsing = await validate.query.safeParseAsync(query);
      isValid = querParsing.success;
      if (querParsing.success) {
        parsedQuery = querParsing.data;
      }
    }
    return { body: parsedBody, query: parsedQuery, isValid };
  } catch (error) {
    console.log(error);
  }
  return { isValid: false };
}

export function createRouteHandler<
  TBody extends ZodSchema<any, any>,
  TParams extends ZodSchema<any, any>,
  TQuery extends ZodSchema<any, any>,
  TResp extends ZodSchema<any, any>
>({ validate, handler }: RouteParams<TBody, TParams, TQuery, TResp>) {
  return async function (req: NextRequest, { params }: { params: any }) {
    const { query, body, isValid } = validate
      ? await validateRequest(req, validate)
      : { isValid: false, body: {}, query: {} };
    if (!isValid) {
      return {
        succeed: false,
        reason: "BAD_REQUEST",
      };
    }

    try {
      const requestContext: IRequestContext<TBody> = {
        body: body,
        query: query,
      };
      const response = await handler(requestContext);
      return NextResponse.json(response);
    } catch (error) {
      return {
        succeed: false,
        reason: "UNKOWN_ERROR",
      };
    }
  };
}
