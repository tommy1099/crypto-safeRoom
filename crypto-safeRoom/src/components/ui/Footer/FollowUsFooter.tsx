import { useTranslation } from "react-i18next";
import { FaInstagram, FaTelegram } from "react-icons/fa";

const FollowUsFooter = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full md:w-1/4 flex flex-col text-right items-end gap-5">
      <h4 className="mb-2 font-semibold uppercase text-neutral ">
        {"مارا دنبال کنید"}
      </h4>
      <div className="flex gap-5 text-4xl">
        <FaInstagram />
        <FaTelegram />
      </div>
    </div>
  );
};
export default FollowUsFooter;
