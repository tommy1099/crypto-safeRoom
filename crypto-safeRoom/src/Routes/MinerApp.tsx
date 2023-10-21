import { Route, Routes } from "react-router-dom";
import {
  MinerParts,
  GeneralMiners,
  IndustrialMiners,
  NotFound,
} from "../pages";
function MinerApp() {
  return (
    <Routes>
      <Route path="/miner_parts" element={<MinerParts />} />
      <Route path="/general_miners" element={<GeneralMiners />} />
      <Route path="/industrial_miners" element={<IndustrialMiners />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default MinerApp;
