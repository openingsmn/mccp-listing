import { NextRequest, NextResponse } from "next/server";
import { ZodSchema, z } from "zod";

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
  TBody extends ZodSchema<any, any> = any
  //   TParams extends ZodSchema<any, any> = any,
  //   TQuery extends ZodSchema<any, any> = any
> = {
  body: z.infer<TBody>;
  //   params: z.infer<TParams>;
  //   query: z.infer<TQuery>;
};

type RouteParams<
  TBody extends ZodSchema<any, any>,
  TParams extends ZodSchema<any, any>,
  TQuery extends ZodSchema<any, any>,
  TResp extends ZodSchema<any, any>
> = {
  validate?: IRequestValidation<TBody, TParams, TQuery, TResp>;
  handler: (ctx: IRequestContext<TBody>) => z.infer<TResp>;
};

const validateRequest = async (reqBody: any, validate: IRequestValidation) => {
  try {
    if (validate.body) {
      return (await validate.body.safeParseAsync(reqBody)).success;
    }
    if (validate.params) {
      return (await validate.params.safeParseAsync(reqBody)).success;
    }
    if (validate.query) {
      return (await validate.query.safeParseAsync(reqBody)).success;
    }
    if (validate.response) {
      return (await validate.response.safeParseAsync(reqBody)).success;
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
  return async function (req: NextRequest) {
    const formData = await req.formData();
    const reqBody: Record<string, any> = {};
    formData.forEach(function (value, key) {
      reqBody[key] = value;
    });
    // console.log("Req Bod: ", reqBody);
    if (validate) {
      const bodyValid = validateRequest(reqBody, validate);
      if (!bodyValid) {
        return {
          succeed: false,
          reason: "BAD_REQUEST",
        };
      }
    }
    try {
      const requestContext: IRequestContext<TBody> = {
        body: reqBody,
      };
      const response = handler(requestContext);
      return NextResponse.json(response);
    } catch (error) {
      return {
        succeed: false,
        reason: "UNKOWN_ERROR",
      };
    }
  };
}
