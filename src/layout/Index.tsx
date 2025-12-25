import React from "react";
import Header from "./Header";
import { Outlet } from "react-router";
const Index = () => {
  return (
    <div>
      <Header />
      <div className="w-full h-[calc(100vh-64px)]">
        <Outlet />
      </div>
    </div>
  );
};

export default Index;
