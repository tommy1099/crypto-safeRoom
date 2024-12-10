import { useTranslation } from "react-i18next";
import AddressFooter from "./AddressFooter";
import FollowUsFooter from "./FollowUsFooter";
import UsefullLinksFooter from "./UsefullLinksFooter";
import EnamadFooter from "./EnamadFooter";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative mt-32 py-8 z-1 md:w-screen text-xs text-neutral bg-base-100">
      <div className="flex flex-col ">
        <div className="flex justify-around px-[5%] ">
          <EnamadFooter />
          <UsefullLinksFooter />
          <FollowUsFooter />
          <AddressFooter />
        </div>
        <div className="w-full flex justify-center items-center text-sm">
          <ul className="list-reset">
            <li className=""></li>
          </ul>
          <p className="text-gray-500">
            &copy; ۲۰۲۳ - تمامی حق و حقوق محفوظ می باشید - ساخته شده توسط تامی
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
