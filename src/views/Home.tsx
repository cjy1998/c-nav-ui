import { useEffect, useState } from "react";
// import clsx from "clsx";
import { Search } from "lucide-react";

import { Toggle, ToggleGroup } from "@/components/ui/toggle-group";
import { Tooltip, TooltipPopup, TooltipTrigger } from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTab } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

import { searchEngines } from "@/utils/const";

import LinkCard from "@/components/linkCard";

import { CategorysService } from "@/api/categorys";
import type { Categorys } from "@/types/api.types";

const Home = () => {
  const [bgImg] = useState(
    "https://p5.qhimg.com/bdr/__85/t017f77a34519fd2802.jpg"
  );
  const [searchUrl, setSearchUrl] = useState(searchEngines[0].url);
  const [text, setText] = useState("");
  const handleSearch = () => {
    window.open(`${searchUrl}${text}`);
  };
  const [categorys, setCategorys] = useState<Categorys[]>([]);
  const [subCategorys, setSubCategorys] = useState<Categorys[]>([]);
  useEffect(() => {
    CategorysService.queryCategorysPage().then((res) => {
      setCategorys(res);
    });
  }, []);
  // 点击tab
  const tabClick = (id: number) => {
    setSubCategorys(categorys.filter((item) => item.parentId === id));
  };
  return (
    <div className="relative h-full overflow-hidden ">
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
        {/* 搜索 */}
        <div className="flex items-center  gap-2 w-[80vw] sm:w-[35vw]">
          <Input
            size="lg"
            aria-label="Enter text"
            placeholder="请输入搜索内容"
            type="text"
            onValueChange={(value) => {
              setText(value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
          <Button
            size="icon"
            onClick={() => {
              handleSearch();
            }}
          >
            <Search />
          </Button>
        </div>
        {/* 搜索选择 */}
        <div className="flex items-center mt-1">
          <ToggleGroup defaultValue={["google"]} size="lg">
            {searchEngines.map((item) => {
              return (
                <Tooltip key={item.key}>
                  <TooltipTrigger
                    render={
                      <Toggle
                        aria-label={`${item.name}`}
                        value={item.key}
                        onClick={() => {
                          setSearchUrl(item.url);
                        }}
                      />
                    }
                  >
                    <item.icon />
                  </TooltipTrigger>
                  <TooltipPopup>{item.name}</TooltipPopup>
                </Tooltip>
              );
            })}
          </ToggleGroup>
        </div>
        {/* 子分类 */}
        <div className="flex flex-wrap justify-center items-center gap-4 mt-2">
          {subCategorys.map((item) => {
            return (
              <Button key={item.id} value={item.id}>
                {item.name}
              </Button>
            );
          })}
        </div>
        {/* 链接卡片 */}
        <div className="flex flex-wrap justify-center items-center gap-4 mt-4">
          <LinkCard />
        </div>
        {/* 顶层分类 */}

        <div className=" absolute top-[35vh] left-0 z-10">
          <ScrollArea className="w-[150px] h-[40vh] rounded-lg  " scrollFade>
            <Tabs defaultValue="tab-1" orientation="vertical">
              <div className="border-s">
                <TabsList variant="underline" className="gap-4">
                  {categorys
                    .filter((item) => item.parentId === 0)
                    .map((item) => {
                      return (
                        <TabsTab
                          key={item.id}
                          value={item.id}
                          onClick={() => tabClick(item.id)}
                        >
                          {item.name}
                        </TabsTab>
                      );
                    })}
                </TabsList>
              </div>
            </Tabs>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default Home;
