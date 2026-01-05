import React, { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetPanel,
  SheetPopup,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const items = [
  { label: "Select framework", value: null },
  { label: "Next.js", value: "next" },
  { label: "Vite", value: "vite" },
  { label: "Astro", value: "astro" },
];

export const AddForm = ({
  children,
  onSubmit,
}: {
  children: React.ReactNode;
  onSubmit: (data: any) => void;
}) => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    data.isPrivate = data.isPrivate ? 0 : 1;
    onSubmit(data);
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetPopup>
        <Form onSubmit={handleSubmit}>
          <SheetHeader>
            <SheetTitle>添加书签</SheetTitle>
            <SheetDescription>请输入书签信息</SheetDescription>
          </SheetHeader>
          <SheetPanel className="grid gap-4">
            {/* 必须添加 name 属性，FormData 才能获取到值 */}
            <Field name="name">
              <FieldLabel>名称</FieldLabel>
              <Input name="name" defaultValue="chatgpt" type="text" required />
              <FieldError>请输入书签名称</FieldError>
            </Field>
            <Field name="url">
              <FieldLabel>url</FieldLabel>
              <Input
                name="url"
                defaultValue="https://chat.openai.com/"
                type="text"
                required
              />
              <FieldError>请输入书签url</FieldError>
            </Field>
            <Field name="icon">
              <FieldLabel>图标</FieldLabel>
              <div className="flex items-center gap-4">
                <Avatar className="rounded-xl">
                  <AvatarImage
                    alt="User"
                    src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80"
                  />
                  <AvatarFallback>icon</AvatarFallback>
                </Avatar>
                {/* 使用 hidden input 提交图标 URL */}
                <Input
                  name="icon"
                  type="hidden"
                  defaultValue="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80"
                />
              </div>
            </Field>
            <Field name="categoryId">
              <FieldLabel>分类</FieldLabel>
              {/* Select 需要 name 属性 */}
              <Select name="categoryId" defaultValue="next">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectPopup>
                  {items.map(({ label, value }) => (
                    <SelectItem key={value || "null"} value={value || ""}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectPopup>
              </Select>
            </Field>
            <Field name="tags">
              <FieldLabel>标签</FieldLabel>
              <Input name="tags" defaultValue="对话" type="text" />
            </Field>
            <Field name="desc">
              <FieldLabel>描述</FieldLabel>
              <Input name="desc" defaultValue="chatgpt对话" />
            </Field>
            <Field name="index">
              <FieldLabel>排序</FieldLabel>
              <Input name="index" defaultValue="1" type="number" />
            </Field>
            <Field name="isPrivate">
              <FieldLabel>是否私有</FieldLabel>
              <Switch name="isPrivate" />
            </Field>
          </SheetPanel>
          <SheetFooter>
            <SheetClose>
              <Button variant="outline" type="button">
                取消
              </Button>
            </SheetClose>
            {/* 移除外层的 SheetClose，由 handleSubmit 控制关闭 */}
            <Button type="submit">添加</Button>
          </SheetFooter>
        </Form>
      </SheetPopup>
    </Sheet>
  );
};
