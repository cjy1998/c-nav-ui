import { toastManager } from "@/components/ui/toast";

export const message = {
  error: (title: string, desc?: string) =>
    toastManager.add({
      title,
      description: desc,
      type: "error",
      timeout: 2000,
    }),
  success: (title: string, desc?: string) =>
    toastManager.add({
      title,
      description: desc,
      type: "success",
      timeout: 2000,
    }),
  info: (title: string, desc?: string) =>
    toastManager.add({
      title,
      description: desc,
      type: "info",
      timeout: 2000,
    }),
  warning: (title: string, desc?: string) =>
    toastManager.add({
      title,
      description: desc,
      type: "warning",
      timeout: 2000,
    }),
};
