import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
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

  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  // const backgroundBlur = useSelector(
  //   (state: RootState) => state.backgroundBlurReducer.backgroundBlur
  // );
  const handleBlurToggleFromChild = (data: boolean) => {
    setBgBlur(data);
  };
  return (
    <nav className="fixed top-0 w-full z-[3] bg-base-100 text-end  border-b">
      {bgBlur && (
        <span className="top-0 bottom-0 left-0 z-[3] right-0 fixed bg-black opacity-40"></span>
      )}

      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between items-center text-center h-22">
          {isMobile ? (
            <div ref={dropdownRef} className="flex gap-3 items-center w-full">
              <SearchBar
                handleBlurToggleFromChild={handleBlurToggleFromChild}
              />
              <div className="flex">
                <Link to="/" className="flex w-[100px] items-center">
                  <img src={`${isDarkTheme ? "" : logo}`} alt="LOGO" />
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex justify-between items-center w-full">
              <div className="flex flex-col items-start">
                <div className="flex gap-5 justify-center items-center text-center">
                  <div className="flex gap-2 pr-5 mt-3 border-r">
                    <div className="z-[2]">
                      <ProfileDropdown />
                    </div>
                  </div>
                  <div className="flex justify-center items-center text-center">
                    <ShoppingCart />
                  </div>
                </div>

                <div className="flex gap-2 justify-center items-center text-xs text-center">
                  <p>ارسال به کرمامشاه، صحنه</p>
                  <SlLocationPin />
                </div>
              </div>

              <div ref={dropdownRef} className="flex w-[900px]  items-center">
                <CollapsibleMenu />
                <div className="flex flex-col gap-2 justify-center items-center mt-10 w-full text-center">
                  <SearchBar
                    handleBlurToggleFromChild={handleBlurToggleFromChild}
                  />
                  <div dir="rtl" className="w-full text-sm breadcrumbs">
                    <ul>
                      <li>
                        <a href="/">خانه</a>
                      </li>
                      {pathnames.map((path, index) => (
                        <li key={index}>
                          <a
                            href={`/${pathnames.slice(0, index + 1).join("/")}`}
                          >
                            {path === "pants"
                              ? "شلوار"
                              : path === "clothes"
                              ? "لباس"
                              : path === "search"
                              ? "جستجو"
                              : ""}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex">
                  <Link to="/" className="flex w-[100px] items-center">
                    <img src={`${isDarkTheme ? "" : logo}`} alt="LOGO" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
