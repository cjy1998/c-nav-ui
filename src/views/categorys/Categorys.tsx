import { useEffect, useState } from "react";
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
import {
  AlertDialog,
  AlertDialogClose,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogPopup,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { CategorysService } from "@/api/categorys";

import type { Categorys, CategorysFrom } from "@/types/api.types";
import { AddForm } from "./actionForm";
import { message } from "@/utils/toast";

const Categorys = () => {
  const [list, setList] = useState<Categorys[]>([]);
  const getList = () => {
    CategorysService.queryCategorysPage().then((res) => {
      setList(res);
    });
  };
  useEffect(() => {
    getList();
  }, []);
  //   添加
  const handleAdd = async (val: CategorysFrom) => {
    console.log(val);
    await CategorysService.addCategorys(val);
    getList();
  };
  // 删除
  const handleDelete = async (id: number) => {
    await CategorysService.deleteCategorys(id);
    message.success("删除成功");
    getList();
  };
  return (
    <div className="p-4">
      <div className="flex justify-end gap-2 mb-4">
        <AddForm onSubmit={handleAdd} selectOptions={list}>
          <Button>添加</Button>
        </AddForm>
      </div>
      <Frame>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>名称</TableHead>
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
                  <TableCell>{item.createdAt}</TableCell>
                  <TableCell>{item.updatedAt}</TableCell>
                  <TableCell className="flex justify-center items-center gap-2">
                    <Button variant="secondary" className="text-primary">
                      编辑
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger
                        render={<Button variant="destructive-outline" />}
                      >
                        删除
                      </AlertDialogTrigger>
                      <AlertDialogPopup>
                        <AlertDialogHeader>
                          <AlertDialogTitle>是否确认删除?</AlertDialogTitle>
                          <AlertDialogDescription>
                            此操作不可撤销。这将永久删除您的帐户并从我们的服务器中删除您的数据。
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogClose render={<Button variant="ghost" />}>
                            取消
                          </AlertDialogClose>
                          <AlertDialogClose
                            render={
                              <Button
                                variant="secondary"
                                className="text-destructive"
                                onClick={() => handleDelete(item.id)}
                              />
                            }
                          >
                            删除
                          </AlertDialogClose>
                        </AlertDialogFooter>
                      </AlertDialogPopup>
                    </AlertDialog>
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

export default Categorys;
