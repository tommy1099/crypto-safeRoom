import { Route, Routes } from "react-router-dom";
import { Discounted, Feminine, Kids, Mens, NotFound, Product } from "../pages";
import Unisex from "@/pages/Category/Unisex/Unisex";

function ProductApp() {
  return (
    <Routes>
      <Route path=":productId" element={<Product />} />

      <Route path="category/feminine">
        <Route path=":productId" element={<Product />} />
        {/* <Route path="/:productType" element={<ProductType />} /> */}
        <Route path=":productType/:productId" element={<Product />} />
        <Route path="" element={<Feminine />} />
      </Route>

      <Route path="category/mens">
        <Route path=":productId" element={<Product />} />
        {/* <Route path="/:productType" element={<ProductType />} /> */}
        <Route path=":productType/:productId" element={<Product />} />
        <Route path="" element={<Mens />} />
      </Route>

      <Route path="category/unisex">
        <Route path=":productId" element={<Product />} />
        {/* <Route path="/:productType" element={<ProductType />} /> */}
        <Route path=":productType/:productId" element={<Product />} />
        <Route path="" element={<Unisex />} />
      </Route>

      <Route path="category/kids">
        <Route path=":productId" element={<Product />} />
        {/* <Route path="/:productType" element={<ProductType />} /> */}
        <Route path=":productType/:productId" element={<Product />} />
        <Route path="" element={<Kids />} />
      </Route>

      <Route path="category/discounted">
        <Route path=":productId" element={<Product />} />
        {/* <Route path="/:productType" element={<ProductType />} /> */}
        <Route path=":productType/:productId" element={<Product />} />
        <Route path="" element={<Discounted />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default ProductApp;
