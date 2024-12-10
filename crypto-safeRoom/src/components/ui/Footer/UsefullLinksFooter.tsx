import { useTranslation } from "react-i18next";

const UsefullLinksFooter = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full text-right md:w-1/4">
      <h4 className="mb-2 font-semibold uppercase text-neutral">{t("goto")}</h4>
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
        <li className="mb-2">
          <a href="/about" className="text-gray-500 hover:text-neutral">
            {t("contactUs")}
          </a>
        </li>
      </ul>
    </div>
  );
};
export default UsefullLinksFooter;
