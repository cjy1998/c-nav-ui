import type { Settings } from "@/types/api.types";

import { apiClient } from "@/utils/http";

export class SettingsService {
  // 获取设置列表
  static async querySettingsPage() {
    const res = await apiClient.get<Settings[]>("/settings");
    return res.data;
  }
}
