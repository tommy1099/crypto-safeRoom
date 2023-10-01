import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { FaBars, FaTimes } from "react-icons/fa";
import { ProfileDropdown } from "../../forms";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <nav className="bg-gray-800 border-b-2 fixed top-0 w-full z-20">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link
              to="/"
              className="flex-shrink-0 flex items-center text-white font-bold text-xl"
            >
              Crypto Safe Room
            </Link>
          </div>
          {isMobile ? (
            <div className="flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                aria-expanded="false"
                onClick={toggleDrawer}
              >
                <span className="sr-only">Open main menu</span>
                {open ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          ) : (
            <div className="hidden sm:block sm:ml-6 mt-3">
              <div className="flex space-x-4">
                <Link
                  to="/"
                  className="text-white hover:bg-gray-100 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-white hover:bg-gray-100 hover:text-gray-800  px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="text-white hover:bg-gray-100 hover:text-gray-800  px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </Link>
                <Link
                  to="/event"
                  className="text-white hover:bg-gray-100 hover:text-gray-800  px-3 py-2 rounded-md text-sm font-medium"
                >
                  Events
                </Link>
                <Link
                  to="/tutorials"
                  className="text-white hover:bg-gray-100 hover:text-gray-800  px-3 py-2 rounded-md text-sm font-medium"
                >
                  Tutorials
                </Link>
                <Link
                  to="/product"
                  className="text-white hover:bg-gray-100 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Products
                </Link>
                <ProfileDropdown />
              </div>
            </div>
          )}
        </div>
      </div>
      {isMobile && (
        <div
          className={`${
            open ? "block " : "hidden "
          } absolute top-16 inset-x-0 p-2 transition transform origin-top-right md:hidden`}
        >
          <div className="rounded-lg w-[50%] z-20 fixed right-0 top-10 ring-1 ring-black ring-opacity-5 bg-gray-800 divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link
                    to="/"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <span className="ml-3 text-base font-medium text-white">
                      Home
                    </span>
                  </Link>
                  <Link
                    to="/about"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <span className="ml-3 text-base font-medium text-white">
                      About
                    </span>
                  </Link>
                  <Link
                    to="/contact"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <span className="ml-3 text-base font-medium text-white">
                      Contact
                    </span>
                  </Link>
                  <Link
                    to="/event"
                    className="text-white hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Events
                  </Link>
                  <Link
                    to="/tutorials"
                    className="text-white hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Tutorials
                  </Link>
                  <Link
                    to="/product"
                    className="text-white hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Products
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
