import LoginForm from "../LoginForm/LoginForm";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../Store/Store";
import { ThemeToggle } from "../../../../Store/ThemeToggleReducer";
import { FiSun } from "react-icons/fi";
import { HiMoon } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import {
  toggleLangToEn,
  toggleLangToFa,
} from "../../../../Store/LanguageReducer";
const LoginPage = () => {
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
    <div className="flex flex-col justify-center items-center">
      <LoginForm />
      <div className="flex absolute top-2 gap-2 justify-center items-center">
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

      <Link to="/welcome">
        <BsFillArrowLeftSquareFill
          style={{
            color: "#ee8f50",
            top: "50%",
            [isFa ? "right" : "left"]: "2%",
            position: "fixed",
            fontSize: "40px",
            cursor: "pointer",
          }}
        />
      </Link>
    </div>
  );
};
export default LoginPage;
