import { Route, Routes } from "react-router-dom";
import { NotFound } from "../pages";
function ProductApp() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default ProductApp;
