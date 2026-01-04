import React from "react";
import { Github } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { Tabs, TabsList, TabsTab } from "@/components/ui/tabs";
import { getItem } from "@/utils/storage";
import { LocalStorage } from "@/utils/const";
const Header = () => {
  return (
    <div className="w-full h-16 flex items-center justify-between px-4 border-b border-b-slate-200 dark:border-b-slate-800">
      <div className="text-2xl font-bold">
        <span>CNAV</span>
      </div>
      <div className="self-end">
        <Tabs defaultValue="index">
          <div className="gap-4">
            <TabsList variant="underline" className="gap-10">
              <TabsTab value="index">首页</TabsTab>
              <TabsTab value="link">书签管理</TabsTab>
              <TabsTab value="cav">分类管理</TabsTab>
              <TabsTab value="setting">设置管理</TabsTab>
            </TabsList>
          </div>
        </Tabs>
      </div>

      <div className="flex items-center justify-center gap-4">
        <Github />
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
