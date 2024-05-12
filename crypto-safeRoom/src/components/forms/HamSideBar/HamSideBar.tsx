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
          <span className="px-3 py-2 text-lg font-medium rounded-md transition-all text-neutral hover:bg-primary hover:text-secondary"></span>
          <Link
            to="/"
            className="px-3 py-2 text-lg font-medium rounded-md transition-all text-neutral hover:bg-primary hover:text-secondary"
          >
            {t("home")}
          </Link>

          <Link
            to="/product"
            className="px-3 py-2 text-lg font-medium rounded-md transition-all text-neutral hover:bg-primary hover:text-secondary"
          >
            {t("products")}
          </Link>
        </div>
      </Drawer>
    </>
  );
};
export default HamSideBar;
