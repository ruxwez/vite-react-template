
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home";

export const DefaultRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};