import { useSelector } from "react-redux";
import en from "../../Locales/en/en.json"; // Import JSON files
import fa from "../../Locales/fa/fa.json";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { RootState } from "../../Store/Store";
const Language = () => {
  const isFa = useSelector((state: RootState) => state.lang.isFa);
  i18n.use(initReactI18next).init({
    resources: {
      en: {
        translation: en,
      },
      fa: {
        translation: fa,
      },
    },
    lng: isFa ? "fa" : "en", // Set the default language
    interpolation: {
      escapeValue: false, // React already protects from XSS
    },
  });
  return <></>;
};
export default Language;
