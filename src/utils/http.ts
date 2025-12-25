import axios, { type AxiosInstance, type AxiosResponse } from "axios";
import { ResponseCode, type ApiResponse } from "@/types/api.types";
import { message } from "./toast";

class ApiClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: import.meta.env.VITE_BACKEND_URL,
      timeout: 10000,
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    // 请求拦截器
    this.client.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        console.log(error);

        return Promise.reject(error);
      }
    );

    // 响应拦截器
    this.client.interceptors.response.use(
      (response: AxiosResponse<ApiResponse>) => {
        if (response.data.code !== ResponseCode.Success) {
          message.error("提示", response.data.msg);
          return Promise.reject(response.data);
        }
        return response;
      },
      async (error) => {
        const status = error.response.status;
        switch (status) {
          case 401:
            message.error("身份过期，请重新登录");
            // window.location.href = "/";
            break;
          case 400:
            message.error("请求参数错误");
            break;
          case 404:
            message.error("资源不存在");
            break;
          case 500:
            message.error("服务器内部错误");
            break;
          default:
            break;
        }
        return Promise.reject(error);
      }
    );
  }

  async get<T>(
    url: string,
    params?: Record<string, unknown>
  ): Promise<ApiResponse<T>> {
    const response = await this.client.get<ApiResponse<T>>(url, { params });
    return response.data;
  }

  async post<T>(
    url: string,
    data?: Record<string, unknown>
  ): Promise<ApiResponse<T>> {
    const response = await this.client.post<ApiResponse<T>>(url, data);
    return response.data;
  }

  async put<T>(
    url: string,
    data?: Record<string, unknown>
  ): Promise<ApiResponse<T>> {
    const response = await this.client.put<ApiResponse<T>>(url, data);
    return response.data;
  }

  async delete<T>(
    url: string,
    params?: Record<string, unknown>
  ): Promise<ApiResponse<T>> {
    const response = await this.client.delete<ApiResponse<T>>(url, { params });
    return response.data;
  }

  async upload<T>(
    url: string,
    file: File,
    fileName?: string,
    additionalData?: Record<string, unknown>
  ): Promise<ApiResponse<T>> {
    const formData = new FormData();
    formData.append(fileName || "file", file);

    // 添加额外的数据字段
    if (additionalData) {
      Object.keys(additionalData).forEach((key) => {
        const value = additionalData[key];
        if (typeof value === "string" || value instanceof Blob) {
          formData.append(key, value);
        }
      });
    }

    const response = await this.client.post<ApiResponse<T>>(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  }
}

export const apiClient = new ApiClient();
