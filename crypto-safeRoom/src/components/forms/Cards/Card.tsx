import { useNavigate } from "react-router-dom";
import { IProduct } from "../../../Interfaces/Interfaces";
import calculateDiscountPercentage from "@/utils/calculateDiscountPercentage/calculateDiscountPercentage";
// import { BsCartPlus } from "react-icons/bs";
const Card = ({ type, price, tombnailImg, url, general_info }: IProduct) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`product/${url}` || "");
      }}
      className={`relative ${
        !general_info?.stock?.in_stock && " grayscale-[70%] "
      } w-[150px] h-[250px] rounded-xl cursor-pointer hover:shadow-2xl md:min-w-[200px] bg-base-100 flex-shrink-0 shadow-md border-4 border-primary`}
    >
      <figure>
        {price?.off && (
          <div className="absolute top-2 right-2 w-12 text-xs badge badge-primary">
            {calculateDiscountPercentage(
              price?.price_before || 0,
              price?.price_after || 0
            )}
            %
          </div>
        )}
        {/* <div className="absolute top-4 left-4 cursor-pointer">
          <span className="text-3xl text-primary">
            <BsCartPlus />
          </span>
        </div> */}
        {/* </div> */}
        <img className="rounded-md" src={tombnailImg || ""} alt={type} />
      </figure>
      <div
        dir="rtl"
        className="flex overflow-hidden flex-col justify-between p-2 whitespace-pre-wrap  text-ellipsis text-start"
      >
        <p className="flex items-end text-sm text-primary">
          {general_info?.name}
        </p>
        {!general_info?.stock?.in_stock ? (
          <p className="flex justify-end items-center pr-1 text-sm font-semibold text-center text-red-500">
            فروخته شد
          </p>
        ) : (
          <div className="flex gap-2 justify-start text-sm text-right">
            <p className="line-through text-primary">{price?.price_before}</p>
            <p className="text-red-500">{price?.price_after} تومان</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
