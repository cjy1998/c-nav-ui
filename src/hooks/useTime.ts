import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { PluginLunar } from "dayjs-plugin-lunar";
dayjs.extend(PluginLunar);
export const UseTime = () => {
  const timeString = dayjs().format("HH:mm");
  const dateString = dayjs().format("MM-DD");
  const weekString = dayjs().day();
  const lunarString = dayjs(dayjs().toDate()).format("LMLD");
  const [time, setTime] = useState(timeString);
  useEffect(() => {
    // 设置定时器
    const timer = setInterval(() => {
      setTime(dayjs().format("HH:mm"));
    }, 1000);

    // 清除函数的 cleanup (相当于 componentWillUnmount)
    return () => {
      clearInterval(timer);
    };
  }, []);
  return {
    time,
    date: dateString,
    week: weekString,
    lunar: lunarString,
  };
};
