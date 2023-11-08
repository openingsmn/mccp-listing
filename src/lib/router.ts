import { NextRequest, NextResponse } from "next/server";
import { ZodSchema, z } from "zod";
import urlParser from "url";

type IRequestValidation<
  TBody extends ZodSchema<any, any> = any,
  TParams extends ZodSchema<any, any> = any,
  TQuery extends ZodSchema<any, any> = any,
  TResp extends ZodSchema<any, any> = any
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

const validateRequest = async (
  req: NextRequest,
  validate: IRequestValidation
) => {
  try {
    if (validate.body) {
      return (await validate.body.safeParseAsync(await req.json())).success;
    }
    // if (validate.params) {
    //   return (await validate.params.safeParseAsync()).success;
    // }
    if (validate.query) {
      const query = extractQueryFromURL(req.url);
      return (await validate.query.safeParseAsync(query)).success;
    }
  } catch (error) {
    console.log(error);
  }
  return false;
};

export function createRouteHandler<
  TBody extends ZodSchema<any, any>,
  TParams extends ZodSchema<any, any>,
  TQuery extends ZodSchema<any, any>,
  TResp extends ZodSchema<any, any>
>({ validate, handler }: RouteParams<TBody, TParams, TQuery, TResp>) {
  return async function (req: NextRequest, { params }: { params: any }) {
    if (validate) {
      const bodyValid = validateRequest(req, validate);
      if (!bodyValid) {
        return {
          succeed: false,
          reason: "BAD_REQUEST",
        };
      }
    }
    try {
      const requestContext: IRequestContext<TBody> = {
        body: req.body,
        query: extractQueryFromURL(req.url),
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
