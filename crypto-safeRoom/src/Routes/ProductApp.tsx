import { Route, Routes } from "react-router-dom";
import { NotFound } from "../pages";
import Product from "../pages/Product/Product";
function ProductApp() {
  return (
    <Routes>
      <Route path="/:productId" element={<Product />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default ProductApp;
