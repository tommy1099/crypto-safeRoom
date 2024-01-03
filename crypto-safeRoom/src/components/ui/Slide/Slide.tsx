import React, { useEffect, useState } from "react";
import StatsVisualizer from "../../forms/StatsVisualizer/StatsVisualizer";
import { useSelector } from "react-redux";
import { RootState } from "../../../Store/Store";
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";
interface Props {
  type: string;
}

const Carousel: React.FC<Props> = ({ type }) => {
  const allSignals = useSelector(
    (state: RootState) => state.allSignals.allSignals
  );

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 1 : prevIndex - 1));
  };
  useEffect(() => {
    // Automatically switch to the next slide every 20 seconds
    const interval = setInterval(handleNext, 20000); // 20,000 milliseconds (20 seconds)

    // Cleanup the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="p-4 ml-[5%] w-[1000px]">
      <div className="overflow-hidden relative rounded-lg">
        <div
          className="flex w-full transition-transform duration-300 ease-in-out transform"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          <div id="item1" className="flex-shrink-0 w-full">
            {type === "signals" && (
              <StatsVisualizer type="type1" signals={allSignals} />
            )}
          </div>
          <div id="item2" className="flex-shrink-0 w-full">
            {type === "signals" && (
              <StatsVisualizer type="type2" signals={allSignals} />
            )}
          </div>
        </div>
      </div>
      <div className="flex gap-2 justify-center items-center mt-2">
        <div
          onClick={handlePrev}
          className="cursor-pointer text-neutral active:text-primary"
        >
          <BiSolidLeftArrow />
        </div>
        <div
          onClick={handleNext}
          className="cursor-pointer text-neutral active:text-primary"
        >
          <BiSolidRightArrow />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
