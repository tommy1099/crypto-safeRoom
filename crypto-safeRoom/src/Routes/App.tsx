import { Route, Routes, Navigate } from "react-router-dom";
import WelcomePage from "../pages/WelcomePage/WelcomePage";
import { Contact, NotFound, Checkout, Profile, Home } from "../pages";
import { AdminApp, ProductApp, AuthApp } from ".";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../Store/Store";
import { useTranslation } from "react-i18next";
import "../Locales/fonts.css";
// import { LiveChat } from "../components/Features";
import { MobileMenuBar, SearchPage } from "../components/ui";
import { useMediaQuery } from "react-responsive";

function App() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const isDarkTheme = useSelector((state: RootState) => state.themeToggle.Dark);
  const isLoggedin = useSelector(
    (state: RootState) => state.isLoggedin.isLoggedin
  );
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div
      className={`text-lg  ${
        currentLanguage === "en" ? "font-english" : "font-farsi"
      }`}
      data-theme={isDarkTheme ? "dark" : "light"}
    >
      {isMobile && <MobileMenuBar />}
      {/* <LiveChat /> */}
      <Routes>
        <Route path="/admin/*" element={<AdminApp />} />
        <Route path="/product/*" element={<ProductApp />} />
        <Route path="/search/product/*" element={<ProductApp />} />
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
        {/* <Route path="/notfound" element={<NotFound />} /> */
        /*{" "}
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
