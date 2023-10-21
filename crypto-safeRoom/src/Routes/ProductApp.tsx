import { Route, Routes } from "react-router-dom";
import { Accessories, TutorialPackages, Wallet, NotFound } from "../pages";
import { MinerApp } from ".";
function ProductApp() {
  return (
    <Routes>
      <Route path="/accessories" element={<Accessories />} />
      <Route path="/tutorial_packages" element={<TutorialPackages />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/miner/*" element={<MinerApp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default ProductApp;
