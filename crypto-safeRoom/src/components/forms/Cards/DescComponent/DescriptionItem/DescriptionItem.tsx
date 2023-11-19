import React from "react";
import CheckmarkOrLoading from "../CheckmarkOrLoading/CheckmarOrLoading";
interface DescriptionItemProps {
  type: string;
  t: (key: string) => string;
  shouldFormatNumbers: boolean;
  desc: string;
  isFa: boolean;
  value: boolean;
  label: string;
}

const DescriptionItem: React.FC<DescriptionItemProps> = ({
  type,
  t,
  shouldFormatNumbers,
  desc,
  isFa,
  value,
  label,
}) => (
  <div className="flex gap-1 items-center">
    {type === "signals" && <CheckmarkOrLoading value={value} blur={false} />}
    <p
      className={`text-${
        shouldFormatNumbers ? "" : "neutral"
      } text-[11px] md:text-[12px]`}
    >
      {type === "signals" && `${t(label)}%`}
      {shouldFormatNumbers ? (isFa ? desc : desc) : desc}
    </p>
  </div>
);

export default DescriptionItem;
