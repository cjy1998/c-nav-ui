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
import type { BookmarksFrom } from "@/types/api.types";

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
  onSubmit: (data: BookmarksFrom) => void;
}) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<BookmarksFrom>({
    name: "chatgpt",
    url: "https://chat.openai.com/",
    icon: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80",
    categoryId: undefined,
    tags: "对话",
    desc: "chatgpt对话",
    index: 1,
    isPrivate: 1,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
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
            <Field name="name">
              <FieldLabel>名称</FieldLabel>
              <Input
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                type="text"
                required
              />
              <FieldError>请输入书签名称</FieldError>
            </Field>
            <Field name="url">
              <FieldLabel>url</FieldLabel>
              <Input
                name="url"
                value={formData.url}
                onChange={(e) =>
                  setFormData({ ...formData, url: e.target.value })
                }
                type="text"
                required
              />
              <FieldError>请输入书签url</FieldError>
            </Field>
            <Field name="icon">
              <FieldLabel>图标</FieldLabel>
              <div className="flex items-center gap-4">
                <Avatar className="rounded-xl">
                  <AvatarImage alt="User" src={formData.icon} />
                  <AvatarFallback>icon</AvatarFallback>
                </Avatar>
                <Input
                  name="icon"
                  type="hidden"
                  value={formData.icon}
                  onChange={(e) =>
                    setFormData({ ...formData, icon: e.target.value })
                  }
                />
              </div>
            </Field>
            <Field name="categoryId">
              <FieldLabel>分类</FieldLabel>
              <Select
                name="categoryId"
                value={formData.categoryId?.toString()}
                onValueChange={(value) =>
                  setFormData({ ...formData, categoryId: Number(value) })
                }
              >
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
              <Input
                name="tags"
                value={formData.tags}
                onChange={(e) =>
                  setFormData({ ...formData, tags: e.target.value })
                }
                type="text"
              />
            </Field>
            <Field name="desc">
              <FieldLabel>描述</FieldLabel>
              <Input
                name="desc"
                value={formData.desc}
                onChange={(e) =>
                  setFormData({ ...formData, desc: e.target.value })
                }
              />
            </Field>
            <Field name="index">
              <FieldLabel>排序</FieldLabel>
              <Input
                name="index"
                value={formData.index}
                onChange={(e) =>
                  setFormData({ ...formData, index: Number(e.target.value) })
                }
                type="number"
              />
            </Field>
            <Field name="isPrivate">
              <FieldLabel>是否私有</FieldLabel>
              <Switch
                name="isPrivate"
                checked={formData.isPrivate === 0}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, isPrivate: checked ? 0 : 1 })
                }
              />
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
