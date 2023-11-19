import { FaTimes, FaBars } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";
import Drawer from "react-modern-drawer";
import { useTranslation } from "react-i18next";

import "react-modern-drawer/dist/index.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../Store/Store";

const HamSideBar = () => {
  const { t } = useTranslation();
  const signalIndicator = useSelector(
    (state: RootState) => state.signalIndicator.signalIndicator
  );
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const isFa = useSelector((state: RootState) => state.lang.isFa);

  return (
    <>
      <div onClick={toggleDrawer}>{isOpen ? <FaTimes /> : <FaBars />}</div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="rounded bla"
      >
        <div
          dir={`${isFa ? "rtl" : "ltr"}`}
          className="flex flex-col gap-5 justify-center items-center space-x-4 min-h-full bg-base-100"
        >
          <span className="px-3 py-2 text-lg font-medium rounded-md transition-all hover:bg-primary hover:text-secondary"></span>
          <Link
            to="/"
            className="px-3 py-2 text-lg font-medium rounded-md transition-all hover:bg-primary hover:text-secondary"
          >
            {t("home")}
          </Link>
          <Link
            to="/news"
            className="px-3 py-2 text-lg font-medium rounded-md transition-all hover:bg-primary hover:text-secondary"
          >
            {t("news")}
          </Link>
          <div className="group">
            <Link
              to="/signals?toggle=true"
              className="flex gap-1 items-center px-3 py-2 text-lg font-medium rounded-md transition-all hover:bg-primary hover:text-secondary"
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
            className="px-3 py-2 text-lg font-medium rounded-md transition-all hover:bg-primary hover:text-secondary"
          >
            {t("exam")}
          </Link>
          <Link
            to="/tutorials?cat=All"
            className="px-3 py-2 text-lg font-medium rounded-md transition-all hover:bg-primary hover:text-secondary"
          >
            {t("tutorials")}
          </Link>
          <Link
            to="/product"
            className="px-3 py-2 text-lg font-medium rounded-md transition-all hover:bg-primary hover:text-secondary"
          >
            {t("products")}
          </Link>
          <Link
            to="/stats"
            className="px-3 py-2 text-lg font-medium rounded-md transition-all hover:bg-primary hover:text-secondary"
          >
            {t("stats")}
          </Link>
          <Link
            to="/plans"
            className="px-3 py-2 text-lg font-medium rounded-md transition-all hover:bg-primary hover:text-secondary"
          >
            {t("plans")}
          </Link>
        </div>
      </Drawer>
    </>
  );
};
export default HamSideBar;
