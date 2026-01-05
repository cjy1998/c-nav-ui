import type { Bookmarks } from "@/types/api.types";

import { apiClient } from "@/utils/http";

export class BookmarksService {
  // 获取分类列表
  static async queryBookmarksPage() {
    const res = await apiClient.get<Bookmarks[]>("/bookmarks");
    return res.data!;
  }
}
