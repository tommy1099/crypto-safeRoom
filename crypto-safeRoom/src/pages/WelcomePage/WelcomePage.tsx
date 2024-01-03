import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../Store/Store";
import { toggleLangToEn, toggleLangToFa } from "../../Store/LanguageReducer";
import { ThemeToggle } from "../../Store/ThemeToggleReducer";
import { FiSun } from "react-icons/fi";
import { HiMoon } from "react-icons/hi";
const WelcomePage = () => {
  const isFa = useSelector((state: RootState) => state.lang.isFa);
  const dispatch = useDispatch();
  const isDark = useSelector((state: RootState) => state.themeToggle.Dark);
  const { t, i18n } = useTranslation();
  const handleLangChange = () => {
    if (isFa) {
      dispatch(toggleLangToEn());
      i18n.changeLanguage("en"); // Update the language using i18next
    } else {
      dispatch(toggleLangToFa());

      i18n.changeLanguage("fa"); // Update the language using i18next
    }
  };

  return (
    <div className="min-h-screen hero bg-base-200 text-neutral">
      <div className="text-center hero-content">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{t("welcomeMessage1")}</h1>
          <p className="py-6">{t("welcomeMessage2")}</p>
          <Link to="/auth/login">
            <button className="btn btn-primary">{t("getStarted")}</button>
          </Link>
        </div>
      </div>
      <div className="flex absolute bottom-1 gap-2 justify-center items-center">
        <div
          onClick={() => {
            dispatch(ThemeToggle());
          }}
          className="flex gap-2 justify-between px-4 py-2 text-sm rounded-full border-2 cursor-pointer hover:text-secondary hover:bg-primary border-primary text-neutral"
        >
          {t("theme")}

          <div className="mt-1"> {isDark ? <HiMoon /> : <FiSun />}</div>
        </div>
        <div
          onClick={() => {
            handleLangChange();
          }}
          className="flex gap-2 justify-between items-center px-4 py-1 text-sm rounded-full border-2 cursor-pointer hover:text-secondary hover:bg-primary border-primary text-neutral"
        >
          {t("lang")}
          <div className="mt-1"> {isFa ? <>{t("fa")}</> : <>{t("en")}</>}</div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
