import { Route, Routes } from "react-router-dom";
import WelcomePage from "../pages/WelcomePage/WelcomePage";
import {
  Contact,
  NotFound,
  Signals,
  News,
  Products,
  Tutorials,
  Checkout,
  Profile,
} from "../pages";
import { AdminApp, ProductApp, AuthApp } from ".";
import { Loading, Exam } from "../components/forms";
// import { BackgroundPattern } from "./components/ui";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../Store/Store";
import { useTranslation } from "react-i18next";
import "../Locales/fonts.css";
function App() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const isDarkTheme = useSelector((state: RootState) => state.themeToggle.Dark);
  return (
    <div
      className={`text-lg ${
        currentLanguage === "en" ? "font-english" : "font-farsi"
      }`}
      data-theme={isDarkTheme ? "business" : "light"}
    >
      {/* <BackgroundPattern /> */}
      <Routes>
        <Route path="/admin/*" element={<AdminApp />} />
        <Route path="/product" element={<Products />} />

        <Route path="/product/*" element={<ProductApp />} />
        <Route path="/auth/*" element={<AuthApp />} />

        <Route path="/" element={<Loading />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/checkout" element={<Checkout />} />

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

        <Route path="/Signals" element={<Signals />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/welcome" element={<WelcomePage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;