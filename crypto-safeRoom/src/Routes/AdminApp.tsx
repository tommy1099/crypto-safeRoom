import { Routes, Route } from "react-router-dom";
import { AdminPage, NotFound } from "../pages";
function AdminApp() {
  return (
    <Routes>
      <Route path="/dashboard" element={<AdminPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default AdminApp;
