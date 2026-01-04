import React, { useState } from "react";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Form } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardPanel,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { authService } from "@/api/auth";
import { setItem } from "@/utils/storage";
import { LocalStorage } from "@/utils/const";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setLoading(true);
    try {
      const res = await authService.login({
        username: formData.get("username") as string,
        password: formData.get("password") as string,
      });
      setLoading(false);
      setItem(LocalStorage.UserToken, res.token);
      navigate("/admin");
    } catch (error) {
      console.log(error);

      setLoading(false);
    }
  };
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>登录</CardTitle>
          <CardDescription>请登录以继续</CardDescription>
        </CardHeader>
        <CardPanel>
          <Form onSubmit={onSubmit}>
            <Field name="username">
              <FieldLabel>账号</FieldLabel>
              <Input
                disabled={loading}
                placeholder="you@example.com"
                required
                type="username"
              />
              <FieldError>请输入账号</FieldError>
            </Field>
            <Field name="password">
              <FieldLabel>密码</FieldLabel>
              <Input
                disabled={loading}
                placeholder="请输入密码"
                required
                type="password"
              />
              <FieldError>请输入密码</FieldError>
            </Field>
            <Button disabled={loading} type="submit">
              登录
            </Button>
          </Form>
        </CardPanel>
        <CardFooter>
          <Label className="text-sm text-muted-foreground">
            <Checkbox />
            保持7天内自动登录
          </Label>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
