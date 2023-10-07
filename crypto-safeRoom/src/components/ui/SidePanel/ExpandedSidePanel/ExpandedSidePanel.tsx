import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}
const ExpandedSidePanel = ({ children }: Props) => {
  return (
    <div className="hidden z-2 bg-white p-5 lg:flex shadow-2xl rounded-md fixed top-[15%] w-[250px] items-start justify-center bottom-[10%] right-[0%]">
      {children}
    </div>
  );
};
export default ExpandedSidePanel;
