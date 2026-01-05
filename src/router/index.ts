import { createBrowserRouter } from "react-router";
import { lazy } from "react";
import Layout from "@/layout/Index";
const Login = lazy(() => import("@/views/Login"));
const Admin = lazy(() => import("@/views/Admin"));
const Home = lazy(() => import("@/views/Home"));
const Data = lazy(() => import("@/views/Data"));
const Bookmarks = lazy(() => import("@/views/bookmarks/Bookmarks.tsx"));
const Categorys = lazy(() => import("@/views/Categorys"));
const Setting = lazy(() => import("@/views/Setting"));

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
        children: [
          {
            path: "/admin/data",
            Component: Data,
          },
          {
            path: "/admin/bookmarks",
            Component: Bookmarks,
          },
          {
            path: "/admin/categorys",
            Component: Categorys,
          },
          {
            path: "/admin/setting",
            Component: Setting,
          },
        ],
      },
    ],
  },
]);
export default router;
