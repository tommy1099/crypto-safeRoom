import React from "react";
import { useTranslation } from "react-i18next";

import { useNavigate } from "react-router-dom";
interface Props {
  close: () => void;
}

const ErrorAlert = ({ close }: Props) => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const handleInnerLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate("/profile");
  };

  return (
    <div
      onClick={close}
      className="flex fixed w-[90%] top-0 mt-[3%] z-[3] transition-all"
    >
      <div className="flex justify-center cursor-pointer alert alert-error">
        <span>
          {t("errorAlertpart1")}.
          <span
            className="underline transition-all cursor-pointer hover:text-neutral"
            onClick={handleInnerLinkClick}
          >
            {t("errorAlertpart2")}
          </span>
        </span>
      </div>
    </div>
  );
};

export default ErrorAlert;
