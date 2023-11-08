import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { FaBars, FaTimes } from "react-icons/fa";
import { ProfileDropdown, ShoppingCart } from "../../forms";
import { setSelectedOption } from "../../../Store/DropDownReducer";
import { setSelectedValue } from "../../../Store/RadioState";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Notification } from "..";
import { RootState } from "../../../Store/Store";
const Navbar = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const signalIndicator = useSelector(
    (state: RootState) => state.signalIndicator.signalIndicator
  );
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const dispatch = useDispatch();
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const handleDropDownValue = () => {
    dispatch(setSelectedOption("All"));
  };
  const handleRadioValue = () => {
    dispatch(setSelectedValue("All"));
  };

  useEffect(() => {
    const handleOuterClick = (event: MouseEvent) => {
      const outerElement = document.querySelector("#inner") as HTMLDivElement;

      if (outerElement.contains(event.target as Node)) {
        event.stopPropagation();
      } else {
        if (open !== undefined) toggleDrawer();
      }
    };

    const handleCrossClick = (event: MouseEvent) => {
      const outerElement = document.querySelector("#cross") as HTMLDivElement;

      if (outerElement.contains(event.target as Node)) {
        if (open !== undefined) toggleDrawer();
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleOuterClick);
      document.addEventListener("mousedown", handleCrossClick);
    } else {
      document.removeEventListener("mousedown", handleOuterClick);
      document.removeEventListener("mousedown", handleCrossClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOuterClick);
      document.removeEventListener("mousedown", handleCrossClick);
    };
  }, [open, toggleDrawer]);

  return (
    <nav className="fixed top-0 w-full shadow-sm z-[2] bg-base-100">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex w-[190px] items-center">
              <img src="../../../src/assets/img/logo.png" alt="LOGO" />
            </Link>
          </div>

          {isMobile ? (
            <div ref={dropdownRef} className="flex gap-3 items-center">
              <ShoppingCart />
              <ProfileDropdown />
              <button
                className="inline-flex justify-center items-center p-2 rounded-md hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                aria-expanded="false"
                onClick={toggleDrawer}
              >
                <span id="cross" className="sr-only text-neutral">
                  Open main menu
                </span>
                {open ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          ) : (
            <div className="hidden mt-3 sm:block sm:ml-6 text-neutral">
              <div className="flex justify-center items-center space-x-4">
                <Link
                  to="/"
                  className="px-3 py-2 text-sm font-medium rounded-md transition-all hover:bg-primary hover:text-secondary"
                >
                  {t("home")}
                </Link>
                <Link
                  to="/news"
                  className="px-3 py-2 text-sm font-medium rounded-md transition-all hover:bg-primary hover:text-secondary"
                >
                  {t("news")}
                </Link>
                <div className="group">
                  <Link
                    onClick={handleDropDownValue}
                    to="/signals?toggle=true"
                    className="flex gap-1 items-center px-3 py-2 text-sm font-medium rounded-md transition-all hover:bg-primary hover:text-secondary"
                  >
                    {signalIndicator && (
                      <div className="relative badge badge-primary badge-xs group-hover:bg-white">
                        <div className="absolute animate-ping badge badge-primary group-hover:bg-white badge-xs"></div>
                      </div>
                    )}
                    {t("signals")}
                  </Link>
                </div>
                <Link
                  to="/exam"
                  className="px-3 py-2 text-sm font-medium rounded-md transition-all hover:bg-primary hover:text-secondary"
                >
                  {t("exam")}
                </Link>
                <Link
                  onClick={handleRadioValue}
                  to="/tutorials?cat=All"
                  className="px-3 py-2 text-sm font-medium rounded-md transition-all hover:bg-primary hover:text-secondary"
                >
                  {t("tutorials")}
                </Link>
                <Link
                  to="/product"
                  className="px-3 py-2 text-sm font-medium rounded-md transition-all hover:bg-primary hover:text-secondary"
                >
                  {t("products")}
                </Link>
                <ShoppingCart />
                <Notification />
                <ProfileDropdown />
              </div>
            </div>
          )}
        </div>
      </div>

      {isMobile && (
        <div
          id="inner"
          className={`${
            open ? "block" : "hidden"
          } absolute top-12 inset-x-0 p-2 transform  origin-top-right transition-all md:hidden`}
        >
          <div className="rounded-lg bg-base-100 w-[50%] text-neutral fixed right-0 ring-1 ring-opacity-5  divide-y-2 divide-gray-50">
            <div className="px-5 pt-5 pb-6">
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link
                    to="/"
                    className="px-3 py-2 text-sm font-medium rounded-md transition-all hover:text-gray-800 hover:bg-gray-100"
                  >
                    <span className="ml-3 text-base font-medium">
                      {t("home")}
                    </span>
                  </Link>
                  <Link
                    to="/news"
                    className="px-3 py-2 text-sm font-medium rounded-md transition-all hover:text-gray-800 hover:bg-gray-100"
                  >
                    <span className="ml-3 text-base font-medium">
                      {t("news")}
                    </span>
                  </Link>
                  <Link
                    to="/signals?toggle=true"
                    className="px-3 py-2 text-sm font-medium rounded-md transition-all hover:text-gray-800 hover:bg-gray-100"
                  >
                    <span className="ml-3 text-base font-medium">
                      {t("signals")}
                    </span>
                  </Link>
                  <Link
                    to="/exam"
                    className="px-3 py-2 text-sm font-medium rounded-md transition-all hover:text-gray-800 hover:bg-gray-100"
                  >
                    <span className="ml-3 text-base font-medium">
                      {t("exam")}
                    </span>
                  </Link>
                  <Link
                    to="/tutorials?cat=All"
                    className="px-3 py-2 text-sm font-medium rounded-md transition-all hover:text-gray-800 hover:bg-gray-100"
                  >
                    <span className="ml-3 text-base font-medium">
                      {t("tutorials")}
                    </span>
                  </Link>
                  <Link
                    to="/product"
                    className="px-3 py-2 text-sm font-medium rounded-md transition-all hover:text-gray-800 hover:bg-gray-100"
                  >
                    <span className="ml-3 text-base font-medium">
                      {t("products")}
                    </span>
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
