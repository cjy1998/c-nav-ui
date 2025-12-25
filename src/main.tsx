import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import router from "./router";
import { AnchoredToastProvider, ToastProvider } from "@/components/ui/toast";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToastProvider>
      <AnchoredToastProvider>
        <RouterProvider router={router} />
      </AnchoredToastProvider>
    </ToastProvider>
  </StrictMode>
);
