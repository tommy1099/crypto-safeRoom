import { useRef, useState } from "react";
import { Container } from "..";
import { IProduct } from "../../Interfaces/Interfaces";

const ProductPictures = ({ img }: IProduct) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [showButtons, setShowButtons] = useState(false);
  const handlePrevClick = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? img.length - 1 : prevIndex - 1
    );
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNextClick = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === img.length - 1 ? 0 : prevIndex + 1
    );
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const ref = useRef(null);
  return (
    <div className="flex relative flex-col items-center mt-32">
      <div className="w-[500px] h-[400px] rounded-xl border border-gray-200 overflow-hidden">
        <img
          className="object-cover w-full h-full"
          src={img[selectedIndex]}
          alt=""
        />
      </div>
      <div
        className="flex justify-between items-center w-[500px]"
        onMouseEnter={() => setShowButtons(true)}
        onMouseLeave={() => setShowButtons(false)}
      >
        <button
          className={`bg-primary absolute rounded-md text-white  h-[17%]  w-14 text-4xl px-4 py-2 transition-opacity duration-300 ${
            showButtons ? "opacity-40" : "opacity-0"
          }`}
          onClick={handlePrevClick}
        >
          {"<"}
        </button>
        <div className="flex gap-2 overflow-x-auto h-[70%]">
          {img?.map((imgSrc, index) => (
            <img
              key={index}
              className={`w-32 rounded-xl border object-cover cursor-pointer ${
                index === selectedIndex
                  ? "border-gray-400 border-2"
                  : "border-gray-200"
              }`}
              src={imgSrc}
              onClick={() => setSelectedIndex(index)}
              alt=""
            />
          ))}
        </div>
        <button
          className={`bg-primary absolute h-[17%] w-14 rounded-md text-4xl right-0 text-white px-4 py-2 transition-opacity duration-300 ${
            showButtons ? "opacity-40" : "opacity-0"
          }`}
          onClick={handleNextClick}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default ProductPictures;
