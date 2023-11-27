// ModalFooter.tsx
import React from "react";
// import { useTranslation } from "react-i18next";
// import { formatNumberToPersian } from "../../../utils/NumberToFarsi/NumberToFarsi";
import { Button } from "../../../ui";

interface ModalFooterProps {
  type: string;
  tpPrices?: {
    tp1Price: string;
    tp2Price: string;
    tp3Price: string;
  };
  tags?: {
    tag1: string;
    tag2?: string;
  };
  price?: number;
  handleAddToCart?: () => void;
}

const ModalFooter: React.FC<ModalFooterProps> = ({
  price,
  handleAddToCart,
  type,
}) => {
  //   const { t } = useTranslation();

  return (
    <div>
      {type !== "signals" && type !== "news" && (
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
