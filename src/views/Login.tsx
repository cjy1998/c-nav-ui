import React from "react";
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
const Login = () => {
  const [loading, setLoading] = React.useState(false);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    alert(`Email: ${formData.get("email") || ""}`);
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
            <Field name="email">
              <FieldLabel>账号</FieldLabel>
              <Input
                disabled={loading}
                placeholder="you@example.com"
                required
                type="email"
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
