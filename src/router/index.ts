import { createBrowserRouter } from "react-router";
import { lazy } from "react";
import Layout from "@/layout/Index";
const Login = lazy(() => import("@/views/Login"));
const Admin = lazy(() => import("@/views/Admin"));
const Home = lazy(() => import("@/views/Home"));

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/admin",
        Component: Admin,
      },
    ],
  },
]);
export default router;
