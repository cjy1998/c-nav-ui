import React from "react";
import { Github } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

const Header = () => {
  return (
    <div className="w-full h-16 flex items-center justify-between p-4 border-b border-b-slate-200 dark:border-b-slate-800">
      <div className="text-2xl font-bold">
        <span>CNAV</span>
      </div>
      <div className="flex items-center justify-center gap-4">
        <Github />
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
