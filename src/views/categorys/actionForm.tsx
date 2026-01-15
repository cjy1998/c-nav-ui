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

import type { Categorys, CategorysFrom } from "@/types/api.types";

export const AddForm = ({
  children,
  onSubmit,
  selectOptions,
}: {
  children: React.ReactNode;
  onSubmit: (data: CategorysFrom) => void;
  selectOptions: Categorys[];
}) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<CategorysFrom>({
    name: "AI",
    index: 0,
    parentId: 0,
    depth: 1,
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
            <SheetTitle>添加分类</SheetTitle>
            <SheetDescription>请输入分类信息</SheetDescription>
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
              <FieldError>请输入分类名称</FieldError>
            </Field>

            <Field name="parentId">
              <FieldLabel>分类</FieldLabel>
              <Select
                name="parentId"
                value={formData.parentId?.toString() || "0"}
                onValueChange={(value) =>
                  setFormData({ ...formData, parentId: Number(value) })
                }
              >
                <SelectTrigger>
                  <SelectValue>
                    {(value) =>
                      value === "0"
                        ? "无父分类"
                        : selectOptions.find((item) => item.id.toString() === value)
                            ?.name || "请选择"
                    }
                  </SelectValue>
                </SelectTrigger>
                <SelectPopup>
                  <SelectItem value="0">无父分类</SelectItem>
                  {selectOptions.map(({ name, id }) => (
                    <SelectItem key={id} value={id.toString()}>
                      {name}
                    </SelectItem>
                  ))}
                </SelectPopup>
              </Select>
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
            <Button type="submit">添加</Button>
          </SheetFooter>
        </Form>
      </SheetPopup>
    </Sheet>
  );
};
