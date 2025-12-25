import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import router from "./router";
import { AnchoredToastProvider, ToastProvider } from "@/components/ui/toast";
import { ThemeProvider } from "@/components/theme-provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToastProvider>
      <AnchoredToastProvider>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </AnchoredToastProvider>
    </ToastProvider>
  </StrictMode>
);
