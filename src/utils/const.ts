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
