import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Copy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  PreviewCard,
  PreviewCardPopup,
  PreviewCardTrigger,
} from "@/components/ui/preview-card";
const LinkCard = () => {
  return (
    <div
      className="w-[215px] rounded-md bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg 
    px-4 py-3 hover:bg-white/30  transition-all duration-300 flex flex-col gap-2"
    >
      <div className="flex  justify-start items-center gap-2">
        <FcGoogle className="text-white text-2xl" />
        <div className="flex flex-col gap-1">
          <span className="text-white text-sm font-bold">Google</span>
        </div>
      </div>
      {/* tag */}
      <div>
        <Badge variant="secondary">搜索</Badge>
      </div>
      <div className="flex justify-between items-center">
        <PreviewCard>
          <PreviewCardTrigger>
            <span className="text-white/70 text-sm cursor-pointer">
              www.google.com
            </span>
          </PreviewCardTrigger>
          <PreviewCardPopup>暂无描述</PreviewCardPopup>
        </PreviewCard>
        <Copy
          className="text-white/70 cursor-pointer hover:text-white"
          size={14}
        />
      </div>
    </div>
  );
};

export default LinkCard;
