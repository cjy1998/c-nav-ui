import { useEffect, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Frame } from "@/components/ui/frame";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { BookmarksService } from "@/api/bookmarks";

import type { Bookmarks } from "@/types/api.types";
import { AddForm } from "./actionForm";

const Bookmarks = () => {
  const [list, setList] = useState<Bookmarks[]>([]);
  useEffect(() => {
    BookmarksService.queryBookmarksPage().then((res) => {
      setList(res);
    });
  }, []);
  //   添加
  const handleAdd = (val: any) => {
    console.log(val);
  };
  return (
    <div className="p-4">
      <div className="flex justify-end gap-2 mb-4">
        <Button variant="destructive">删除</Button>
        <AddForm onSubmit={handleAdd}>
          <Button>添加</Button>
        </AddForm>
      </div>
      <Frame>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>名称</TableHead>
              <TableHead>地址</TableHead>
              <TableHead>标签</TableHead>
              <TableHead>描述</TableHead>
              <TableHead>创建时间</TableHead>
              <TableHead>更新时间</TableHead>
              <TableHead className="text-center">操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {list.map((item) => {
              return (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.url}</TableCell>
                  <TableCell>
                    {item.tags && (
                      <Badge variant="outline">
                        <span
                          aria-hidden="true"
                          className="size-1.5 rounded-full bg-emerald-500"
                        />
                        {item.tags}
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>{item.desc}</TableCell>
                  <TableCell>{item.createdAt}</TableCell>
                  <TableCell>{item.updatedAt}</TableCell>
                  <TableCell className="flex justify-center items-center gap-2">
                    <Button variant="secondary" className="text-primary">
                      编辑
                    </Button>
                    <Button variant="secondary" className="text-destructive">
                      删除
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Frame>
    </div>
  );
};

export default Bookmarks;
