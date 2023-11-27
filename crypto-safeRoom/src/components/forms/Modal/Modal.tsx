// Modal.tsx
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Store/Store";
import { fullScreenToggle } from "../../../Store/IsFullScreen";
import { addItem } from "../../../Store/CartListReducer";
import ModalHeader from "./ModalHeader/ModalHeader";
import ModalContent from "./ModalContent/ModalContent";
import ModalFooter from "./ModalFooter/ModalFooter";
import { CardProps } from "../../../Interfaces/Interfaces";
import { useEffect, useRef } from "react";

// Import your new components
const Modal: React.FC<CardProps> = ({
  isFullscreen,
  tpPrices,
  entryPoint,
  alertDesc,
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
}) => {
  const dispatch = useDispatch();
  const handleImageClick = () => {
    dispatch(fullScreenToggle());
  };
  const handleAddToCart = () => {
    if (title && img && id && price)
      dispatch(
        addItem({ id, title, img, quantity: 0, price: price, physical: false })
      );
  };
  const isFa = useSelector((state: RootState) => state.lang.isFa);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
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
  }, [handleClose, showModal]);
  return (
    <>
      {showModal && (
        <div
          ref={modalRef}
          key={id}
          id={id}
          className="flex fixed inset-0 z-10 justify-center items-center w-full h-full bg-black bg-opacity-50"
        >
          <div
            id="inner"
            className={`bg-base-100 p-6 rounded-lg shadow-lg${
              type === "products" &&
              "w-[90%] h-[85%] lg:mt-[8%] lg:w-[80%] lg:h-[80%] overflow-y-auto"
            } ${type === "signals" && "lg:w-[40%] lg:mt-[0%] mt-[8%]"}
              ${type === "news" && "w-[80%] h-[80%] overflow-y-auto"}
            `}
          >
            <ModalHeader
              crypto={crypto || ""}
              type={type}
              title={title || ""}
              handleClose={handleClose}
              children={children}
            />
            <ModalContent
              handleClose={() => {}}
              key=""
              id=""
              physical={false}
              isFa={isFa}
              tpPrices={tpPrices}
              entryPoint={entryPoint}
              alertDesc={alertDesc}
              tags={tags}
              title={title}
              type={type}
              img={img}
              desc={desc}
              children={children}
              isFullscreen={isFullscreen}
              handleImageClick={handleImageClick}
            />
            <ModalFooter
              type={type}
              tpPrices={tpPrices}
              tags={tags}
              price={price}
              handleAddToCart={handleAddToCart}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
