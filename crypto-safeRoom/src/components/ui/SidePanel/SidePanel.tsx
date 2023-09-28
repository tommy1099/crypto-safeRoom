import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}
const SidePanel = ({ children }: Props) => {
  return (
    <div className="hidden lg:flex bg-white shadow-2xl z-10 rounded-md fixed top-[15%] w-[10%] pt-[2%] xl:w-[15%] items-start justify-center bottom-[10%] lg:px-24 right-[0%]">
      {children}
    </div>
  );
};
export default SidePanel;
