import { createBrowserRouter } from "react-router";
import HomePage from "./routes/(app)";

export let router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
]);
