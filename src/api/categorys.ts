import type { Categorys } from "@/types/api.types";

import { apiClient } from "@/utils/http";
import type { CategorysFrom } from "../types/api.types";

export class CategorysService {
  // 获取分类列表
  static async queryCategorysPage() {
    const res = await apiClient.get<Categorys[]>("/categorys");
    return res.data!;
  }
  // 添加分类
  static async addCategorys(data: CategorysFrom) {
    const res = await apiClient.post<Categorys>("/categorys", data);
    return res.data!;
  }
  // 删除分类
  static async deleteCategorys(id: number) {
    const res = await apiClient.delete<void>(`/categorys/${id}`);
    return res.data!;
  }
}
