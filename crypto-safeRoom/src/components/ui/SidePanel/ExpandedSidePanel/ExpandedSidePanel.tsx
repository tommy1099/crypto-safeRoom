import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}
const ExpandedSidePanel = ({ children }: Props) => {
  return (
    <div className="hidden z-2 bg-[#2c2c2c] p-5 lg:flex shadow-2xl rounded-md fixed w-[250px] items-start justify-center h-screen right-[0%]">
      {children}
    </div>
  );
};
export default ExpandedSidePanel;
