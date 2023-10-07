import { PropsWithChildren, useState } from "react";
import { BsFilterSquare } from "react-icons/bs";
interface Props extends PropsWithChildren {}
const ShrunkSidePanel = ({ children }: Props) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div
        onClick={handleToggle}
        className="absolute cursor-pointer lg:hidden text-3xl  z-10 top-[11%] right-0"
      >
        <BsFilterSquare />
      </div>

      <div
        className={`${
          toggle ? "absolute" : "hidden"
        } bg-white shadow-2xl rounded-md top-[15%] p-[5%] w-[250px]  items-start justify-center bottom-[10%] right-[0%] z-10`}
      >
        {children}
      </div>
    </>
  );
};

export default ShrunkSidePanel;
