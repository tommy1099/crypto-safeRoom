// Modal.tsx
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Store/Store";
import { fullScreenToggle } from "../../../Store/IsFullScreen";
import { addItem } from "../../../Store/CartListReducer";
import ModalHeader from "./ModalHeader/ModalHeader";
import ModalContent from "./ModalContent/ModalContent";
import ModalFooter from "./ModalFooter/ModalFooter";
import { CardProps } from "../../../Interfaces/Interfaces";
import { useEffect, useRef, useState } from "react";
import { BackendAddress } from "../../../utils/BackendAddress/BackendAddress";
import Cookies from "js-cookie";
// import { orders } from "../../../Interfaces/Interfaces";
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
  order,
  user,
}) => {
  // const user = useSelector((state: RootState) => state.user);
  // const [lastOrder, setLastOrder] = useState<orders>();
  const [areaTextValue, setAreaTextValue] = useState("");
  const dispatch = useDispatch();
  const accessToken = Cookies.get("accessToken");
  const handleImageClick = () => {
    dispatch(fullScreenToggle());
  };
  const isLoggedIn = useSelector(
    (state: RootState) => state.isLoggedin.isLoggedin
  );
  const handleChildValue = (value: string) => {
    setAreaTextValue(value);
  };
  const handleAddToCart = () => {
    if (title && img && id && price)
      dispatch(
        addItem({ id, title, img, quantity: 0, price: price, physical: false })
      );
  };
  const isFa = useSelector((state: RootState) => state.lang.isFa);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleSubmitPaid = async () => {
    try {
      const message = { text: areaTextValue };
      const response = await fetch(
        `${BackendAddress()}/orders/completed/${id}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(message),
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      } else {
        handleClose();
      }
      // const data = await response.json();
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error during fetch request:", error.message);
      } else {
        console.error("Unknown error during fetch request:", error);
      }
    }
  };

  useEffect(() => {
    // if (type === "checkout") setLastOrder(user.orders[user.orders.length - 1]);
    // console.log("areatext:", areaTextValue);
    const handleOuterClick = (event: MouseEvent) => {
      const outerElement = document.querySelector("#inner") as HTMLDivElement;

      if (outerElement.contains(event.target as Node)) {
        // Click is inside the outer element, prevent propagation
        event.stopPropagation();
      } else {
        // Click is outside the outer element
        if (!isLoggedIn && handleClose !== undefined) {
          const shouldCloseModal =
            window.location.pathname !== "/signals" &&
            window.location.pathname !== "/checkout";

          if (shouldCloseModal) {
            handleClose();
          }
        } else {
          handleClose();
        }
      }
    };

    const handleCrossClick = (event: MouseEvent) => {
      const outerElement = document.querySelector("#cross") as HTMLDivElement;

      if (outerElement.contains(event.target as Node)) {
        if (!isLoggedIn && handleClose !== undefined) {
          const shouldCloseModal =
            window.location.pathname !== "/signals" &&
            window.location.pathname !== "/checkout";

          if (shouldCloseModal) {
            handleClose();
          }
        } else {
          handleClose();
        }
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
  }, [areaTextValue, handleClose, showModal]);
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
              ${
                type === "checkout"
                  ? "w-[90%] h-[85%] lg:w-[80%] lg:h-[80%] overflow-y-auto "
                  : type === "login"
                  ? "lg:w-[40%] lg:my-[0%] mt-[8%] bg-opacity-0"
                  : "lg:w-[40%] lg:my-[0%] mt-[8%] "
              }
            `}
          >
            <ModalHeader
              crypto={crypto || ""}
              type={type}
              title={title || id || ""}
              handleClose={handleClose}
              children={children}
            />
            <ModalContent
              handleClose={() => {}}
              key={id}
              id={id}
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
              price={price}
              onChildValue={handleChildValue}
              order={order}
              user={user}
            />
            <ModalFooter
              type={type}
              tpPrices={tpPrices}
              tags={tags}
              price={price}
              handleAddToCart={handleAddToCart}
              handleSubmitPaid={handleSubmitPaid}
              order={order}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
