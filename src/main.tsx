import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "@/routes";
import "@/styles/global.css";

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
