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

const validateRequest = async (req: Request, validate: IRequestValidation) => {
  try {
    if (validate.body) {
      return (await validate.body.safeParseAsync(req.body)).success;
    }
    if (validate.params) {
      return (await validate.params.safeParseAsync(req.body)).success;
    }
    if (validate.query) {
      return (await validate.query.safeParseAsync(req.body)).success;
    }
    if (validate.response) {
      return (await validate.response.safeParseAsync(req.body)).success;
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
  return function (req: NextRequest) {
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
