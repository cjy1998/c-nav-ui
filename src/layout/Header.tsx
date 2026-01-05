import React from "react";
import { Github } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { Tabs, TabsList, TabsTab } from "@/components/ui/tabs";
import { useLocation, Link } from "react-router";
const Header = () => {
  const location = useLocation();
  return (
    <div className="w-full h-16 flex items-center justify-between px-4 border-b border-b-slate-200 dark:border-b-slate-800">
      <div className="text-2xl font-bold">
        <span>CNAV</span>
      </div>
      {location.pathname !== "/login" && (
        <div className="self-end">
          <Tabs defaultValue="/admin/data">
            <div className="gap-4">
              <TabsList variant="underline" className="gap-10">
                <TabsTab value="/admin/data">
                  <Link to="/admin/data">首页</Link>
                </TabsTab>
                <TabsTab value="/admin/bookmarks">
                  <Link to="/admin/bookmarks">书签管理</Link>
                </TabsTab>
                <TabsTab value="/admin/categorys">
                  <Link to="/admin/categorys">分类管理</Link>
                </TabsTab>
                <TabsTab value="/admin/setting">
                  <Link to="/admin/setting">设置管理</Link>
                </TabsTab>
              </TabsList>
            </div>
          </Tabs>
        </div>
      )}

      <div className="flex items-center justify-center gap-4">
        <Github />
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
