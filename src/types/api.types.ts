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
  message: string;
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

export interface Categorys {
  id: number;
  name: string;
  depth?: string;
  index: string;
  isPrivate: string;
  parentId: number;
  createdAt: string;
  updatedAt: string;
}

export interface Bookmarks {
  id: number;
  categoryId?: number;
  desc?: string;
  icon?: string;
  index?: number;
  isPrivate?: number;
  name: string;
  note?: string;
  tags?: string;
  url: string;
  createdAt: string;
  updatedAt: string;
}
