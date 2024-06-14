import { Route, Routes } from "react-router-dom";
import { Discounted, Feminine, Kids, Mens, NotFound } from "../pages";
import Product from "../pages/Product/Product";
function ProductApp() {
  return (
    <Routes>
      <Route path="/:productId" element={<Product />} />
      <Route path="/category/feminine" element={<Feminine />} />
      <Route path="/category/mens" element={<Mens />} />
      <Route path="/category/unisex" element={<Discounted />} />
      <Route path="/category/kids" element={<Kids />} />
      <Route path="/category/discounted" element={<Discounted />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default ProductApp;
