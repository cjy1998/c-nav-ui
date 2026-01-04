import { FcGoogle, FcBookmark } from "react-icons/fc";
import { AiOutlineBaidu } from "react-icons/ai";
import { BsBing } from "react-icons/bs";
export const searchEngines = [
  {
    key: "google",
    name: "谷歌",
    url: "https://www.google.com/search?q=",
    icon: FcGoogle,
  },
  {
    key: "bing",
    name: "必应",
    url: "https://www.bing.com/search?q=",
    icon: BsBing,
  },
  {
    key: "baidu",
    name: "百度",
    url: "https://www.baidu.com/s?wd=",
    icon: AiOutlineBaidu,
  },
  {
    key: "zn",
    name: "站内",
    url: "https://www.sogou.com/web?query=",
    icon: FcBookmark,
  },
];

export const weeks = [
  "星期日",
  "星期一",
  "星期二",
  "星期三",
  "星期四",
  "星期五",
  "星期六",
];

export const LocalStorage = {
  UserToken: "userToken",
} as const;

export type LocalStorageEnum = (typeof LocalStorage)[keyof typeof LocalStorage];

export const SessionStorage = {} as const;
export type SessionStorageEnum =
  (typeof SessionStorage)[keyof typeof SessionStorage];
