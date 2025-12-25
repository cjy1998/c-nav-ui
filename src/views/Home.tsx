import { useState } from "react";
// import clsx from "clsx";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Toggle, ToggleGroup } from "@/components/ui/toggle-group";
import { Search } from "lucide-react";
const Home = () => {
  const [bgImg, setbgImg] = useState(
    "https://p5.qhimg.com/bdr/__85/t017f77a34519fd2802.jpg"
  );
  return (
    <div className="relative h-full overflow-hidden">
      {/* 背景层 */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${bgImg})`,
          filter: "blur(5px)",
          transform: "scale(1.1)",
        }}
      />
      {/* 内容层 */}
      <div className="relative z-10 h-full flex flex-col items-center py-10">
        {/* 时间 */}
        <div className="flex flex-col items-center gap-1 mb-10">
          <span className="text-white text-6xl font-bold ">14:00</span>
          <div className="flex items-center gap-2">
            <span className="text-[#e5e5e5] text-lg ">08-25</span>
            <span className="text-[#e5e5e5] text-lg ">星期天</span>
            <span className="text-[#e5e5e5] text-lg ">冬月二十</span>
          </div>
        </div>
        <div className="flex  items-center gap-2">
          <Input
            className="w-[500px]"
            size="lg"
            aria-label="Enter text"
            placeholder="请输入搜索内容"
            type="text"
          />
          <Button size="icon">
            <Search />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <ToggleGroup defaultValue={["bold"]}>
            <Toggle aria-label="Toggle bold" value="bold">
              {/* <BoldIcon /> */}
            </Toggle>
            <Toggle aria-label="Toggle italic" value="italic">
              {/* <ItalicIcon /> */}
            </Toggle>
            <Toggle aria-label="Toggle underline" value="underline">
              {/* <UnderlineIcon /> */}
            </Toggle>
          </ToggleGroup>
        </div>
      </div>
    </div>
  );
};

export default Home;
