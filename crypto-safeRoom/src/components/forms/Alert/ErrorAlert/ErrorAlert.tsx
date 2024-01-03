import React from "react";
import { useTranslation } from "react-i18next";

import { useNavigate } from "react-router-dom";
interface Props {
  close: () => void;
  type: string;
}

const ErrorAlert = ({ close, type }: Props) => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const handleInnerLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.location.pathname === "/plans") navigate("/profile");
    else if (window.location.pathname === "/signals") navigate("/plans");
  };

  return (
    <div
      onClick={close}
      className="flex fixed w-[90%] top-0 mt-[3%] z-[3] transition-all"
    >
      <div className="flex justify-center cursor-pointer alert alert-error">
        <span>
          {type === "signals"
            ? t("errorAlertpart1Signals")
            : t("errorAlertpart1Plans")}
          .
          <span
            className="underline transition-all cursor-pointer hover:text-neutral"
            onClick={handleInnerLinkClick}
          >
            {type === "signals"
              ? t("errorAlertpart2Signals")
              : t("errorAlertpart2Plans")}
          </span>
        </span>
      </div>
    </div>
  );
};

export default ErrorAlert;
