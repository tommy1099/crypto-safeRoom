import { NarrowContainer } from "../../ui";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";

const Catagories = () => {
  const [showCat, isShowCat] = useState(false);
  const [showMine, isShowMine] = useState(false);

  const handleToggleCat = () => {
    isShowCat(!showCat);
    if (showMine) isShowMine(false);
  };
  const handleToggleMine = () => {
    isShowMine(!showMine);
  };
  return (
    <NarrowContainer style="hidden z-[19] bg-white lg:block fixed w-full h-[60px] top-[64px] border-b-2 z-20 bg-white">
      <div className="flex justify-end mt-4 mr-[30px] gap-4 ">
        <div className={` ${showCat ? "flex" : "hidden"} justify-end gap-4 `}>
          <div className="flex">
            <div
              className={` ${showMine ? "flex" : "hidden"} justify-end gap-4 `}
            >
              <Link
                className="flex justify-center"
                to="/product/miner/industrial_miners"
              >
                Industrial Miners
              </Link>
              <Link
                className="flex justify-center"
                to="/product/miner/general_miners"
              >
                General Miners
              </Link>
              <Link
                className="flex justify-center"
                to="/product/miner/miner_parts"
              >
                Miner Parts
              </Link>
            </div>
          </div>
          <div onClick={handleToggleMine} className="flex cursor-pointer">
            <div className={`${showMine ? "flex" : "hidden"} mt-[4px]`}>
              <IoIosArrowBack />
            </div>
            <p className="flex justify-center"> Miners</p>
          </div>

          <Link className="flex justify-center" to="/product/accessories">
            Accessories
          </Link>
          <Link className="flex justify-center" to="/product/wallet">
            Wallet
          </Link>
          <Link className="flex justify-center" to="/product/tutorial_packages">
            Tutorial Packages
          </Link>
        </div>

        <div onClick={handleToggleCat} className="flex cursor-pointer">
          <div className={`${showCat ? "flex" : "hidden"} mt-[4px]`}>
            <IoIosArrowBack />
          </div>
          <p className="flex justify-center mr-2"> Catagories</p>
          <div className="mt-[2px] text-xl">
            <GiHamburgerMenu />
          </div>
        </div>
      </div>
    </NarrowContainer>
  );
};
export default Catagories;
