import React, { PropsWithChildren, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Store/Store";
import { fullScreenToggle } from "../../../Store/IsFullScreen";
import { Button } from "../../ui";
import { addItem } from "../../../Store/CartListReducer";
// const dispatch = useDispatch();

interface Props extends PropsWithChildren {
  id: string;
  type?: string;
  showModal?: boolean;
  handleClose?: () => void;
  price?: number;
  img?: string;
  desc?: {
    desc1: string;
    desc2?: string;
    desc3?: string;
  };
  tags?: {
    tag1: string;
    tag2?: string;
  };
  crypto?: string;
  title?: string;
}

const Modal = ({
  children,
  price,
  id,
  type,
  showModal,
  handleClose,
  img,
  desc,
  tags,
  crypto,
  title,
}: Props) => {
  const dispatch = useDispatch();
  const isFullscreen = useSelector(
    (state: RootState) => state.FullScreenToggleReducer.fullScreen
  );

  const handleImageClick = () => {
    dispatch(fullScreenToggle());
  };

  useEffect(() => {
    console.log("title:", title);
    const handleOuterClick = (event: MouseEvent) => {
      const outerElement = document.querySelector("#inner") as HTMLDivElement;

      if (outerElement.contains(event.target as Node)) {
        event.stopPropagation();
      } else {
        if (handleClose !== undefined) handleClose();
      }
    };

    const handleCrossClick = (event: MouseEvent) => {
      const outerElement = document.querySelector("#cross") as HTMLDivElement;

      if (outerElement.contains(event.target as Node)) {
        if (handleClose !== undefined) handleClose();
      }
    };

    if (showModal) {
      document.addEventListener("mousedown", handleOuterClick);
      document.addEventListener("mousedown", handleCrossClick);
    } else {
      document.removeEventListener("mousedown", handleOuterClick);
      document.removeEventListener("mousedown", handleCrossClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOuterClick);
      document.removeEventListener("mousedown", handleCrossClick);
    };
  }, [showModal, handleClose]);
  const handleAddToCart = () => {
    if (title && img && id && price)
      dispatch(addItem({ id, title, img, quantity: 0, price: price }));
  };
  return (
    <>
      {showModal && (
        <div
          key={id}
          id={id}
          className="flex fixed inset-0 justify-center items-center w-full h-full bg-black bg-opacity-50 z-[2]"
        >
          <div
            id="inner"
            className={`bg-white p-6 rounded-lg shadow-lg${
              type === "products" &&
              "w-[90%] h-[85%] lg:mt-[8%] lg:w-[80%] lg:h-[80%] overflow-y-auto"
            } ${type === "signals" && "lg:w-[40%] lg:mt-[0%] mt-[8%]"}
              ${type === "news" && "w-[80%] h-[80%] overflow-y-auto"}
            `}
          >
            <div className="flex justify-between mb-5">
              <h2
                className={`${
                  type === "signals"
                    ? "text-5xl rounded-full w-[130px] p-3 font-bold"
                    : ""
                } ${
                  type === "news"
                    ? "text-3xl w-full p-3 font-bold border-l-8 rounded-lg border-patternColors-red"
                    : ""
                }`}
              >
                {type === "signals" && children && (
                  <div className="flex flex-col gap-1">
                    <p className="text-4xl">{crypto}</p>
                    <div className="text-xl">{children}</div>
                  </div>
                )}
                {type !== "signals" && (
                  <p className="text-3xl text-neutral">{title}</p>
                )}
              </h2>
              <div
                id="cross"
                className="flex w-[40px] mt-1 h-[40px] text-2xl p-2 bg-primary text-secondary rounded-full cursor-pointer"
              >
                <RxCross2 />
              </div>
            </div>
            <div className="">
              {type === "signals" && (
                <p
                  onClick={handleImageClick}
                  className="flex absolute mt-[5%] right-[46%] justify-center items-center text-base-100 text-2xl rounded-full p-3 bg-gray-500  cursor-pointer opacity-60 z-[2]"
                >
                  Click to Open
                </p>
              )}

              {type === "signals" && (
                <img
                  className={`w-full h-64 object-cover blur-custom mb-4 cursor-pointer ${
                    isFullscreen
                      ? "fixed z-[20] lg:top-[9%] lg:left-[5%] w-full h-[30%] left-[0%] top-[35%] lg:w-[90%] lg:h-[90%] blur-none"
                      : ""
                  }`}
                  src={img}
                  alt={crypto}
                  onClick={handleImageClick}
                />
              )}
              {type === "news" && (
                <img
                  className="w-full h-[200px] object-cover"
                  src={img}
                  alt={title}
                />
              )}
              {type !== "news" && type !== "signals" && (
                <div className="xl:flex">
                  <img
                    className="w-[400px] h-[400px] object-cover "
                    src={img}
                    alt={title}
                  />
                  {desc && <p className="p-5 text-neutral">{desc.desc1}</p>}
                  {desc && <p className="text-neutral">{desc.desc2}</p>}
                  {desc && <p className="text-neutral">{desc.desc3}</p>}
                </div>
              )}
            </div>
            <div className="my-5">
              {type === "news" && <p className="mb-4">{desc && desc.desc1}</p>}
              {type === "signals" && desc !== undefined && (
                <div className="flex p-1">
                  <div className="shadow stats">
                    <div className="flex justify-center items-center stat">
                      <p className="text-sm text-neutral">{desc.desc1}</p>
                    </div>

                    <div className="flex justify-center items-center stat">
                      <p className="text-sm text-neutral">{desc.desc2}</p>
                    </div>

                    <div className="flex justify-center items-center stat">
                      <p className="text-sm text-neutral">{desc.desc3}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-center items-center mt-2 space-x-2">
              {tags && (
                <div className="flex text-xl">
                  <div className="shadow stats">
                    <div className="flex justify-center items-center text-sm stat">
                      <div className="stat-title">Stop Loss:</div>
                      <p className="text-neutral">{tags.tag1}%</p>
                    </div>
                  </div>
                </div>
              )}
              {tags && (
                <div className="flex text-xl">
                  <div className="shadow stats">
                    <div className="flex justify-center items-center text-sm stat">
                      <div className="stat-title">Short/Long:</div>
                      <p className="text-neutral">{tags.tag2}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {type !== "signals" && type !== "news" && (
              <div>
                {price && (
                  <div className="mt-10 text-xl font-bold">{price}$</div>
                )}

                <Button
                  onClick={handleAddToCart}
                  style="p-3 bg-neutral rounded-md my-10 text-white"
                >
                  Add to cart
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
