
import { Route, Routes } from "react-router-dom";
import { SignInPage } from "./pages/signIn";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/sign-in" element={<SignInPage />} />
    </Routes>
  );
};