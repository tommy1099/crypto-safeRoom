import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { SlLocationPin } from "react-icons/sl";
import {
  HamSideBar,
  ProfileDropdown,
  ShoppingCart,
  SearchBar,
} from "../../forms";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
// import { Notification } from "..";
import { RootState } from "../../../Store/Store";
import logo from "../../../assets/img/logos/Picsart_23-10-31_00-04-43-079.png";
import { CollapsibleMenu, Notification } from "..";
const Navbar = () => {
  const isDarkTheme = useSelector((state: RootState) => state.themeToggle.Dark);
  const [bgBlur, setBgBlur] = useState(false);
  const { t } = useTranslation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  // const backgroundBlur = useSelector(
  //   (state: RootState) => state.backgroundBlurReducer.backgroundBlur
  // );
  const handleBlurToggleFromChild = (data: boolean) => {
    setBgBlur(data);
  };
  return (
    <nav className="fixed top-0 w-full z-[3] bg-base-100 text-end  ">
      {bgBlur && (
        <span className="top-0 bottom-0 left-0 right-0 fixed bg-black opacity-20"></span>
      )}
      <div className="px-4 mx-auto sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center h-16 ">
          <div className="flex flex-col items-start justify-between gap-2 mt-[3%] ">
            <div className="flex gap-5 justify-center items-center text-center ">
              <div className=" flex border-r pr-5 gap-2 mt-3 ">
                <div className="z-[-1]">
                  <ProfileDropdown />
                </div>
              </div>
              <div className="flex text-center items-center justify-center">
                <ShoppingCart />
              </div>
            </div>

            <div className="text-xs flex justify-center items-center text-center gap-2">
              <p>ارسال به کرمامشاه، صحنه</p>
              <SlLocationPin />
            </div>
          </div>

          {isMobile ? (
            <div ref={dropdownRef} className="flex gap-3 items-center">
              {/* <Notification /> */}
              <SearchBar
                handleBlurToggleFromChild={handleBlurToggleFromChild}
              />
              <ShoppingCart />
              <ProfileDropdown />
              <HamSideBar />
            </div>
          ) : (
            <div className="hidden mt-3  sm:block sm:ml-6 text-neutral">
              <div className="flex justify-end xl:w-[700px]  items-center ">
                <SearchBar
                  handleBlurToggleFromChild={handleBlurToggleFromChild}
                />
                {/* <Link
                  to="/"
                  className="py-2 w-28 text-sm font-medium rounded-md transition-all text-neutral hover:bg-primary hover:text-secondary"
                >
                  {t("home")}
                </Link> */}

                {/* <Link
                  to="/contact"
                  className=" w-28 py-2 text-sm font-medium rounded-md transition-all text-neutral hover:bg-primary hover:text-secondary"
                >
                  {t("contactUs")}
                </Link> */}

                {!isMobile && (
                  <div className="flex">
                    <Link
                      to="/"
                      className="flex w-[100px] -mr-7 mt-10 items-center"
                    >
                      <img src={`${isDarkTheme ? "" : logo}`} alt="LOGO" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      {!isMobile && <CollapsibleMenu />}
    </nav>
  );
};

export default Navbar;
