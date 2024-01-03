// ModalFooter.tsx
import React from "react";
// import { useTranslation } from "react-i18next";
// import { formatNumberToPersian } from "../../../utils/NumberToFarsi/NumberToFarsi";
import { Button } from "../../../ui";
import { ModalFooterProps } from "../../../../Interfaces/Interfaces";

const ModalFooter: React.FC<ModalFooterProps> = ({
  price,
  handleAddToCart,
  handleSubmitPaid,
  type,
  order,
}) => {
  //   const { t } = useTranslation();

  return (
    <div>
      {type === "checkout" && order !== undefined && order.done ? (
        <></>
      ) : type === "checkout" &&
        order !== undefined &&
        order.paymentMethod.timer !== undefined &&
        order.paymentMethod.timer <= 0 &&
        !order.paymentMethod.paid ? (
        <></>
      ) : type === "checkout" &&
        order !== undefined &&
        order.paymentMethod.timer !== undefined &&
        order.paymentMethod.timer >= 0 &&
        order.paymentMethod.paid ? (
        <></>
      ) : (
        type === "checkout" && (
          <div className="flex justify-center items-end md:items-center mt-[5%]">
            {/* {price && <div className="text-xl font-bold">{price}$</div>} */}

            <Button
              onClick={handleSubmitPaid}
              style=" px-10 py-2  border-2 border-primary bg-base-100 text-neutral rounded hover:bg-primary hover:text-secondary transition-all"
            >
              Submit
            </Button>
          </div>
        )
      )}
      {type !== "signals" &&
        type !== "news" &&
        type !== "checkout" &&
        type !== "userData" &&
        type !== "plan" &&
        type !== "login" && (
          <div>
            {price && <div className="mt-10 text-xl font-bold">{price}$</div>}

            <Button
              onClick={handleAddToCart}
              style="p-3 bg-neutral rounded-md my-10 text-white"
            >
              Add to cart
            </Button>
          </div>
        )}
    </div>
  );
};

export default ModalFooter;
