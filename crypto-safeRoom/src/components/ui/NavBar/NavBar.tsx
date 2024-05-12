import { useRef } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { HamSideBar, ProfileDropdown, ShoppingCart } from "../../forms";

import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
// import { Notification } from "..";
import { RootState } from "../../../Store/Store";
const Navbar = () => {
  const isDarkTheme = useSelector((state: RootState) => state.themeToggle.Dark);

  const { t } = useTranslation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <nav className="fixed top-0 w-full shadow-sm z-[3] bg-base-100">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex w-[190px] items-center">
              <img
                src={`${
                  isDarkTheme
                    ? "../../../src/assets/img/logoDark212121.png"
                    : "../../../src/assets/img/logo.png"
                }`}
                alt="LOGO"
              />
            </Link>
          </div>

          {isMobile ? (
            <div ref={dropdownRef} className="flex gap-3 items-center">
              {/* <Notification /> */}
              <ShoppingCart />
              <ProfileDropdown />
              <HamSideBar />
            </div>
          ) : (
            <div className="hidden mt-3 sm:block sm:ml-6 text-neutral">
              <div className="flex justify-center items-center space-x-4">
                <Link
                  to="/"
                  className="px-3 py-2 text-sm font-medium rounded-md transition-all text-neutral hover:bg-primary hover:text-secondary"
                >
                  {t("home")}
                </Link>

                <Link
                  to="/product"
                  className="px-3 py-2 text-sm font-medium rounded-md transition-all text-neutral hover:bg-primary hover:text-secondary"
                >
                  {t("products")}
                </Link>
                {/* <Notification /> */}
                <ShoppingCart />
                <ProfileDropdown />
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
