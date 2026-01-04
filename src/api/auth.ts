import { apiClient } from "@/utils/http";

export class authService {
  // 登录
  static async login({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) {
    const res = await apiClient.post<{ token: string }>("/auth/login", {
      username,
      password,
    });
    return res.data!;
  }
}
