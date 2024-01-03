// ModalHeader.tsx
import React, { PropsWithChildren } from "react";
import { BsFillTicketDetailedFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

interface ModalHeaderProps extends PropsWithChildren {
  title: string;
  crypto: string;
  handleClose: () => void;
  type: string;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({
  crypto,
  type,
  title,
  handleClose,
  children,
}) => {
  const handleCloseModal = () => {
    handleClose();
  };
  return (
    <div className="flex justify-between mb-5">
      <h2
        className={`${
          type === "signals"
            ? "text-5xl rounded-full w-[130px] p-3 font-bold"
            : ""
        } ${
          type === "news"
            ? "text-3xl w-full p-3 font-bold border-l-8 rounded-lg border-patternColors-red"
            : ""
        }`}
      >
        {type === "signals" && children && (
          <div className="flex flex-col gap-1">
            <p className="text-4xl">{crypto || BsFillTicketDetailedFill}</p>
            <div className="text-xl">{children}</div>
          </div>
        )}
        {(type !== "signals" && type == "userData") ||
          (type !== "signals" && type === "plan" && (
            <p className="pl-4 text-2xl text-neutral">User: {title}</p>
          ))}
        {type !== "signals" &&
          type !== "userData" &&
          type !== "plan" &&
          type !== "login" && (
            <p className="pl-4 text-2xl text-neutral">Order: {title}</p>
          )}
      </h2>
      {type !== "login" && (
        <div
          onClick={handleCloseModal}
          id="cross"
          className="flex w-[40px] mt-1 h-[40px] text-2xl p-2 bg-primary text-secondary rounded-full cursor-pointer"
        >
          <RxCross2 />
        </div>
      )}
    </div>
  );
};
export default ModalHeader;
