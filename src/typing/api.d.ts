export type ApiResCode =
  | "SUCCESS"
  | "UNAUTHORIZED"
  | "UNKOWN_ERROR"
  | "NOT_FOUND"
  | "USER_ALREADY_EXISTS"
  | "WRONG_PASSWORD";

export type ApiResponse<TData = any> = {
  succeed: boolean;
  code?: ApiResCode;
  data?: TData | null;
};

export type BasePaginationProps<
  TInclude = null,
  TWhere = unknown,
  TOrderBy = unknown
> = {
  page?: number;
  perPage?: number;
  include?: TInclude;
  where?: TWhere;
  orderBy?: TOrderBy;
};

export type ApiPagination = {
  page: number;
  perPage: number;
  results: number;
  count: number;
  totalPages: number;
};

export type PaginatedApiResponse<TData = any> = ApiResponse<Array<TData>> & {
  pagination?: ApiPagination;
};
