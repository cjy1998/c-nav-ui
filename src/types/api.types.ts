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
export type Settings = {
  id: number;
  key: string;
  value: string;
  remark?: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};

export type Categorys = {
  id: number;
  name: string;
  depth?: number;
  index: number;
  isPrivate: number;
  parentId: number;
  createdAt: string;
  updatedAt: string;
};

export type CategorysFrom = Omit<Categorys, "id" | "createdAt" | "updatedAt">;

export type Bookmarks = {
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
};

export type BookmarksFrom = Omit<Bookmarks, "id" | "createdAt" | "updatedAt">;
