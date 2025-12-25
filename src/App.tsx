import { Button } from "@/components/ui/button";
import { SettingsService } from "@/api/settings";
function App() {
  const showToast = () => {
    SettingsService.querySettingsPage().then((res) => {
      console.log(res);
    });
  };
  return (
    <>
      <div>
        <span className="text-3xl font-bold">测试</span>
        <Button onClick={showToast}>Button</Button>
      </div>
    </>
  );
}

export default App;
