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
      } w-[150px] h-full rounded-xl cursor-pointer hover:shadow-2xl md:w-[200px] bg-base-100 flex-shrink-0 shadow-md border-4 border-primary`}
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
      <div className=" p-2 whitespace-pre-wrap overflow-hidden overflow-ellipsis">
        <h2 className="text-primary text-sm">{general_info?.name}</h2>
        {/* <div className="flex items-center justify-between text-center bottom-0"> */}
        {!general_info?.stock?.in_stock ? (
          <p className="flex items-center text-center justify-end text-md pr-1 text-red-500 font-semibold">
            فروخته شد
          </p>
        ) : (
          <p className="flex gap-5 justify-center items-center text-center ">
            <h5 className="text-primary line-through">{price?.price_before}</h5>
            <h5 className="text-red-500">{price?.price_after}</h5>
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
