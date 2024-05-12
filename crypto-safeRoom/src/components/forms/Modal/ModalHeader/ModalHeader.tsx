// ModalHeader.tsx
import React, { PropsWithChildren } from "react";
import { RxCross2 } from "react-icons/rx";

interface ModalHeaderProps extends PropsWithChildren {
  title: string;
  crypto: string;
  handleClose: () => void;
  type: string;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({ type, handleClose }) => {
  const handleCloseModal = () => {
    handleClose();
  };
  return (
    <div className="flex justify-between mb-5">
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
