import { Route, Routes } from "react-router-dom";
import { NotFound, LoginPage, ForgotPage, SignupPage } from "../pages";

function AuthApp() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot" element={<ForgotPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default AuthApp;
