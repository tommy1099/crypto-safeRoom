// CheckmarkOrLoading.tsx
import React from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { ImCross } from "react-icons/im";

interface CheckmarkOrLoadingProps {
  value: boolean;
  blur: boolean;
}

const CheckmarkOrLoading: React.FC<CheckmarkOrLoadingProps> = ({
  value,
  blur,
}) => (
  <div className="flex">
    {!blur && value ? (
      <div className="text-xl text-green-700">
        <IoMdCheckmarkCircle />
      </div>
    ) : !blur && !value ? (
      <div className="text-red-700">
        <ImCross />
      </div>
    ) : (
      blur &&
      !value && <span className="loading loading-ring loading-md"></span>
    )}
  </div>
);

export default CheckmarkOrLoading;
