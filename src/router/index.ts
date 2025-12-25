import { createBrowserRouter } from "react-router";
import { lazy } from "react";
import Login from "@/views/Login";
import Admin from "@/views/Admin";
const Home = lazy(() => import("@/views/Home"));
const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/admin",
    Component: Admin,
  },
]);
export default router;
