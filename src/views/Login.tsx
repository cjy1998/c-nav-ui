import React from "react";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardPanel,
  CardTitle,
} from "@/components/ui/card";
const Login = () => {
  return (
    <div className="text-3xl font-bold">
      <span>登录页面</span>
      <ModeToggle />
      <Card>
        <CardHeader>
          <CardTitle>Title</CardTitle>
          <CardDescription>Description</CardDescription>
        </CardHeader>
        <CardPanel>Content</CardPanel>
        <CardFooter>Footer</CardFooter>
      </Card>
    </div>
  );
};

export default Login;
