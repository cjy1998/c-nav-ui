import {
  Card,
  CardDescription,
  CardHeader,
  CardPanel,
  CardTitle,
} from "@/components/ui/card";
const Data = () => {
  return (
    <div className="w-full p-6 flex justify-center gap-6 flex-wrap">
      <Card className="md:max-w-2xs w-full">
        <CardHeader>
          <CardTitle>站点</CardTitle>
          <CardDescription>收录站点统计</CardDescription>
        </CardHeader>
        <CardPanel className="text-3xl font-bold">50</CardPanel>
      </Card>
      <Card className="md:max-w-2xs w-full">
        <CardHeader>
          <CardTitle>标签</CardTitle>
          <CardDescription>标签统计</CardDescription>
        </CardHeader>
        <CardPanel className="text-3xl font-bold">12</CardPanel>
      </Card>
    </div>
  );
};

export default Data;
