import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { FaBars, FaTimes } from "react-icons/fa";
import { ProfileDropdown, ShoppingCart } from "../../forms";
import { useDispatch } from "react-redux";
import { setSelectedOption } from "../../../Store/DropDownReducer";
import { setSelectedValue } from "../../../Store/RadioState";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
    <nav className="fixed top-0 z-20 w-full bg-gray-800">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link
              to="/"
              className="flex flex-shrink-0 items-center text-xl font-bold text-white"
            >
              Crypto Safe Room
            </Link>
          </div>

          {isMobile ? (
            <div ref={dropdownRef} className="flex gap-3 items-center">
              <ShoppingCart />
              <ProfileDropdown />
              <button
                className="inline-flex justify-center items-center p-2 text-white rounded-md hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                aria-expanded="false"
                onClick={toggleDrawer}
              >
                <span id="cross" className="sr-only">
                  Open main menu
                </span>
                {open ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          ) : (
            <div className="hidden mt-3 sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link
                  to="/"
                  className="px-3 py-2 text-sm font-medium text-white rounded-md transition-all hover:bg-gray-100 hover:text-gray-800"
                >
                  Home
                </Link>
                <Link
                  to="/news"
                  className="px-3 py-2 text-sm font-medium text-white rounded-md transition-all hover:bg-gray-100 hover:text-gray-800"
                >
                  News
                </Link>
                <Link
                  onClick={handleDropDownValue}
                  to="/signals?toggle=true"
                  className="px-3 py-2 text-sm font-medium text-white rounded-md transition-all hover:bg-gray-100 hover:text-gray-800"
                >
                  Signals
                </Link>
                <Link
                  to="/exam"
                  className="px-3 py-2 text-sm font-medium text-white rounded-md transition-all hover:bg-gray-100 hover:text-gray-800"
                >
                  Exam
                </Link>
                <Link
                  onClick={handleRadioValue}
                  to="/tutorials?cat=All"
                  className="px-3 py-2 text-sm font-medium text-white rounded-md transition-all hover:bg-gray-100 hover:text-gray-800"
                >
                  Tutorials
                </Link>
                <Link
                  to="/product"
                  className="px-3 py-2 text-sm font-medium text-white rounded-md transition-all hover:bg-gray-100 hover:text-gray-800"
                >
                  Products
                </Link>
                <ShoppingCart />
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
          } absolute top-12 inset-x-0 p-2 transform origin-top-right transition-all md:hidden`}
        >
          <div className="rounded-lg w-[50%] z-20 fixed right-0 ring-1 ring-black ring-opacity-5 bg-gray-800 divide-y-2 divide-gray-50">
            <div className="px-5 pt-5 pb-6">
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link
                    to="/"
                    className="px-3 py-2 text-sm font-medium text-white rounded-md transition-all hover:text-gray-800 hover:bg-gray-100"
                  >
                    <span className="ml-3 text-base font-medium">Home</span>
                  </Link>
                  <Link
                    to="/news"
                    className="px-3 py-2 text-sm font-medium text-white rounded-md transition-all hover:text-gray-800 hover:bg-gray-100"
                  >
                    <span className="ml-3 text-base font-medium">News</span>
                  </Link>
                  <Link
                    to="/signals?toggle=true"
                    className="px-3 py-2 text-sm font-medium text-white rounded-md transition-all hover:text-gray-800 hover:bg-gray-100"
                  >
                    <span className="ml-3 text-base font-medium">Signals</span>
                  </Link>
                  <Link
                    to="/exam"
                    className="px-3 py-2 text-sm font-medium text-white rounded-md transition-all hover:text-gray-800 hover:bg-gray-100"
                  >
                    <span className="ml-3 text-base font-medium">Exam</span>
                  </Link>
                  <Link
                    to="/tutorials?cat=All"
                    className="px-3 py-2 text-sm font-medium text-white rounded-md transition-all hover:text-gray-800 hover:bg-gray-100"
                  >
                    <span className="ml-3 text-base font-medium">
                      Tutorials
                    </span>
                  </Link>
                  <Link
                    to="/product"
                    className="px-3 py-2 text-sm font-medium text-white rounded-md transition-all hover:text-gray-800 hover:bg-gray-100"
                  >
                    <span className="ml-3 text-base font-medium">Products</span>
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
