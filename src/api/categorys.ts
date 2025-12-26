import type { Categorys } from "@/types/api.types";

import { apiClient } from "@/utils/http";

export class CategorysService {
  // 获取分类列表
  static async queryCategorysPage() {
    const res = await apiClient.get<Categorys[]>("/categorys");
    return res.data!;
  }
}
