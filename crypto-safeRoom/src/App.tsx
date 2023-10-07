import "./App.css";
import { Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import {
  Contact,
  ForgotPage,
  LoginPage,
  SignupPage,
  NotFound,
  Signals,
  News,
  Products,
  TutorialPackages,
  Wallet,
  MinerParts,
  GeneralMiners,
  IndustrialMiners,
  Accessories,
  Tutorials,
} from "./pages";
import Delete from "../Delete/Delete";
import { Loading, Exam } from "./components/forms";
// import { BackgroundPattern } from "./components/ui";

function App() {
  return (
    <div className="">
      {/* <BackgroundPattern /> */}
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/profile" element={<Delete />} />
        <Route
          //<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdQ7nj5Qi-mn4UEobqNEKk2xg_FioEFt7w8hVPBN1OWAh1_uw/viewform?embedded=true" width="640" height="1027" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          path="/exam"
          element={
            <Exam
              src="https://forms.gle/KFkDmKJMSTJfaUNz9"
              width={640}
              height={2000}
            />
          }
        />

        <Route path="/news" element={<News />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/product" element={<Products />} />
        <Route
          path="/product/tutorial_packages"
          element={<TutorialPackages />}
        />
        <Route path="/product/wallet" element={<Wallet />} />
        <Route path="/product/miner/miner_parts" element={<MinerParts />} />
        <Route
          path="/product/miner/general_miners"
          element={<GeneralMiners />}
        />
        <Route
          path="/product/miner/industrial_miners"
          element={<IndustrialMiners />}
        />
        <Route path="/product/accessories" element={<Accessories />} />
        <Route path="/Signals" element={<Signals />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/forgot" element={<ForgotPage />} />
        <Route path="/auth/signup" element={<SignupPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
