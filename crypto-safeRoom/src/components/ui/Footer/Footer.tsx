import { FaInstagram, FaTelegram } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative py-8 w-full shadow-inner z-1 text-neutral bg-base-100">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4">
            <h4 className="mb-2 font-semibold uppercase text-neutral">
              {t("followUs")}
            </h4>
            <ul className="list-reset">
              <li className="mb-2">
                <a
                  href="https://www.instagram.com/crypto_saferoom_futures"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-neutral"
                >
                  <FaInstagram className="inline-block mr-2" />
                  {t("instagram")}
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://t.me/crypto_saferoom_gp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-neutral"
                >
                  <FaTelegram className="inline-block mr-2" />
                  {t("telegram")}
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="mb-2 font-semibold uppercase text-neutral">
              {t("goto")}
            </h4>
            <ul className="list-reset">
              <li className="mb-2">
                <a href="/" className="text-gray-500 hover:text-neutral">
                  {t("home")}
                </a>
              </li>
              <li className="mb-2">
                <a href="/about" className="text-gray-500 hover:text-neutral">
                  {t("aboutUs")}
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full  md:w-1/4">
            <h4 className="mb-2 font-semibold uppercase text-neutral">
              {t("contactUs")}
            </h4>
            <ul className="list-reset">
              <li className="mb-2">
                <a
                  href="mailto:support@csrbackend.ir"
                  className="text-gray-500 hover:text-neutral"
                >
                  support@csrbackend.ir
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <ul className="list-reset">
              <li className="mb-2">
                <a href="/terms" className="text-gray-500 hover:text-neutral">
                  {t("termsOfService")}
                </a>
              </li>
              <li className="mb-2">
                <a href="/privacy" className="text-gray-500 hover:text-neutral">
                  {t("policy")}
                </a>
              </li>
            </ul>
            <p className="mt-4 text-gray-500">&copy; {t("allRights")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
