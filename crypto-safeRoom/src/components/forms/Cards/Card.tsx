import { useNavigate } from "react-router-dom";
import { IProduct } from "../../../Interfaces/Interfaces";
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
          <div className="w-12 absolute top-2 right-2 text-xs badge badge-primary">
            تخفیف
          </div>
        )}
        {/* <div className="absolute top-4 left-4 cursor-pointer">
          <span className="text-primary text-3xl">
            <BsCartPlus />
          </span>
        </div> */}
        {/* </div> */}
        <img className="rounded-md" src={tombnailImg || ""} alt={type} />
      </figure>
      <div
        dir="rtl"
        className=" p-2 whitespace-pre-wrap overflow-hidden text-ellipsis flex justify-between text-start flex-col"
      >
        <p className="text-primary text-sm flex items-end">
          {general_info?.name}
        </p>
        {!general_info?.stock?.in_stock ? (
          <p className="flex items-center text-center justify-end text-sm pr-1 text-red-500 font-semibold">
            فروخته شد
          </p>
        ) : (
          <div className="flex gap-2 text-sm text-right justify-start">
            <p className="text-primary line-through ">{price?.price_before}</p>
            <p className="text-red-500">{price?.price_after} تومان</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
