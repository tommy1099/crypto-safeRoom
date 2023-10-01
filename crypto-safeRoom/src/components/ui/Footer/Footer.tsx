import React from "react";
import { FaInstagram, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8 z-0 w-full relative bottom-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4">
            <h4 className="text-white uppercase mb-2">Follow Us</h4>
            <ul className="list-reset">
              <li className="mb-2">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white"
                >
                  <FaInstagram className="inline-block mr-2" />
                  Instagram
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://telegram.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white"
                >
                  <FaTelegram className="inline-block mr-2" />
                  Telegram
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-white uppercase mb-2">Navigation</h4>
            <ul className="list-reset">
              <li className="mb-2">
                <a href="/" className="text-gray-500 hover:text-white">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="/about" className="text-gray-500 hover:text-white">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-white uppercase mb-2">Contact Us</h4>
            <ul className="list-reset">
              <li className="mb-2">
                <a
                  href="mailto:info@cryptosafe.com"
                  className="text-gray-500 hover:text-white"
                >
                  info@cryptosaferoom.com
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-white uppercase mb-2">Legal</h4>
            <ul className="list-reset">
              <li className="mb-2">
                <a href="/terms" className="text-gray-500 hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li className="mb-2">
                <a href="/privacy" className="text-gray-500 hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
            <p className="text-gray-500 mt-4">
              &copy; 2023 - All rights reserved by the Crypto Safe Room team.
              Created by Tommy.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
