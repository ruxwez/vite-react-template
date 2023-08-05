import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "@/routes";

import "normalize.css";
import "fix.css";
import "@/styles/global.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
