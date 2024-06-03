import { Route, Routes, Navigate, useSearchParams } from "react-router-dom";
import WelcomePage from "../pages/WelcomePage/WelcomePage";
import { Contact, NotFound, Products, Checkout, Profile, Home } from "../pages";
import { AdminApp, ProductApp, AuthApp } from ".";
// import { BackgroundPattern } from "./components/ui";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../Store/Store";
import { useTranslation } from "react-i18next";
import "../Locales/fonts.css";
import { LiveChat } from "../components/Features";
import { SearchPage } from "../components/ui";

function App() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const isDarkTheme = useSelector((state: RootState) => state.themeToggle.Dark);
  const isLoggedin = useSelector(
    (state: RootState) => state.isLoggedin.isLoggedin
  );

  return (
    <div
      className={`text-lg  ${
        currentLanguage === "en" ? "font-english" : "font-farsi"
      }`}
      data-theme={isDarkTheme ? "dark" : "light"}
    >
      <LiveChat />
      {/* <BackgroundPattern /> */}
      <Routes>
        <Route path="/admin/*" element={<AdminApp />} />

        <Route path="/product/*" element={<ProductApp />} />

        <Route
          path="/auth/*"
          element={isLoggedin ? <Navigate to="/" /> : <AuthApp />}
        />

        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/search" element={<SearchPage />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
