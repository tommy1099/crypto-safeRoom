import { FaInstagram, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative py-8 w-full shadow-inner z-1 text-neutral bg-base-100">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4">
            <h4 className="mb-2 uppercase text-neutral">Follow Us</h4>
            <ul className="list-reset">
              <li className="mb-2">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-neutral"
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
                  className="text-gray-500 hover:text-neutral"
                >
                  <FaTelegram className="inline-block mr-2" />
                  Telegram
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="mb-2 uppercase text-neutral">Navigation</h4>
            <ul className="list-reset">
              <li className="mb-2">
                <a href="/" className="text-gray-500 hover:text-neutral">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="/about" className="text-gray-500 hover:text-neutral">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="mb-2 uppercase text-neutral">Contact Us</h4>
            <ul className="list-reset">
              <li className="mb-2">
                <a
                  href="mailto:info@cryptosafe.com"
                  className="text-gray-500 hover:text-neutral"
                >
                  info@cryptosaferoom.com
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="mb-2 uppercase text-neutral">Legal</h4>
            <ul className="list-reset">
              <li className="mb-2">
                <a href="/terms" className="text-gray-500 hover:text-neutral">
                  Terms of Service
                </a>
              </li>
              <li className="mb-2">
                <a href="/privacy" className="text-gray-500 hover:text-neutral">
                  Privacy Policy
                </a>
              </li>
            </ul>
            <p className="mt-4 text-gray-500">
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
