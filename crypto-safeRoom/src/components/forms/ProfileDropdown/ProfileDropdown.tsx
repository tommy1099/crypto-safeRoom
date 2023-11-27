import { useState, useEffect, useRef } from "react";
import { Avatar } from "..";
import { FiSun } from "react-icons/fi";
import { HiMoon } from "react-icons/hi";
import { RootState } from "../../../Store/Store";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { ThemeToggle } from "../../../Store/ThemeToggleReducer";
import { useDispatch } from "react-redux";
import { toggleisLoggedinFalse } from "../../../Store/isLoggedInReducer";
import { useTranslation } from "react-i18next";
import { toggleLangToEn, toggleLangToFa } from "../../../Store/LanguageReducer";
import Cookies from "js-cookie";
import { resetUser } from "../../../Store/UserReducer";

const ProfileDropdown = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const isLoggedin = useSelector(
    (state: RootState) => state.isLoggedin.isLoggedin
  );
  const isDark = useSelector((state: RootState) => state.themeToggle.Dark);
  const isFa = useSelector((state: RootState) => state.lang.isFa);
  const [isOpen, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isDarkTheme = useSelector((state: RootState) => state.themeToggle.Dark);

  const handleLangChange = () => {
    if (isFa) {
      dispatch(toggleLangToEn());
      i18n.changeLanguage("en"); // Update the language using i18next
    } else {
      dispatch(toggleLangToFa());

      i18n.changeLanguage("fa"); // Update the language using i18next
    }
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleToggle = () => {
    setOpen(!isOpen);
  };

  return (
    <div
      className="inline-block relative top-[-2px] text-left "
      ref={dropdownRef}
    >
      <div>
        <button
          type="button"
          className="inline-flex justify-center items-center rounded-full bg-base-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-base-100 focus:ring-primary"
          onClick={handleToggle}
        >
          <Avatar where={"navbar"} />
        </button>
      </div>
      {isOpen && (
        <div
          className={`absolute right-0 z-10 mt-4 w-48 rounded-md ring-1 ring-black ring-opacity-5 shadow-lg origin-top-right text-neutral ${
            isDarkTheme ? "bg-[#2c2c2c]" : "bg-base-100"
          }`}
        >
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {isLoggedin && (
              <a
                href="/profile"
                className="block px-4 py-2 text-sm hover:text-secondary hover:bg-primary"
                role="menuitem"
              >
                {t("profile")}
              </a>
            )}
            <div
              onClick={() => {
                dispatch(ThemeToggle());
              }}
              className="flex justify-between px-4 py-2 text-sm cursor-pointer hover:text-secondary hover:bg-primary"
            >
              {t("theme")}

              <div className="mt-1"> {isDark ? <HiMoon /> : <FiSun />}</div>
            </div>
            <div
              onClick={() => {
                handleLangChange();
              }}
              className="flex justify-between px-4 py-2 text-sm cursor-pointer hover:text-secondary hover:bg-primary"
            >
              {t("lang")}
              <div className="mt-1">
                {" "}
                {isFa ? <>{t("fa")}</> : <>{t("en")}</>}
              </div>
            </div>
            {isLoggedin ? (
              <a
                onClick={() => {
                  Cookies.remove("accessToken");
                  Cookies.remove("refreshToken");
                  dispatch(toggleisLoggedinFalse());
                  dispatch(toggleLangToEn());
                  dispatch(resetUser());
                }}
                className="block px-4 py-2 text-sm hover:text-secondary hover:bg-primary"
                role="menuitem"
                href="/signals?toggle=true"
              >
                {t("logout")}
              </a>
            ) : (
              <a
                href="/auth/login"
                className="block px-4 py-2 text-sm hover:text-secondary hover:bg-primary"
                role="menuitem"
              >
                {t("login")}
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
