export const ResponseCode = {
  Success: 200,
  Created: 201,
  Accepted: 202,
  NoContent: 204,
  BadRequest: 400,
  Unauthorized: 401,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  Conflict: 409,
  Gone: 410,
  PreconditionFailed: 412,
  UnprocessableEntity: 422,
  TooManyRequests: 429,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
} as const;

export type ResponseCode = (typeof ResponseCode)[keyof typeof ResponseCode];

export interface ApiResponse<T = unknown> {
  msg: string;
  code: ResponseCode;
  data?: T;
  success: boolean;
  timestamp: string;
}

export interface PageParams {
  pageNum: number;
  pageSize: number;
}
export interface PageResult<T = unknown> {
  totalRecord: number;
  totalPage: number;
  rows: T[];
}
export interface Settings {
  id: number;
  key: string;
  value: string;
  remark?: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}
