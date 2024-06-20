import { useNavigate } from "react-router-dom";
import { IProduct } from "../../Interfaces/Interfaces";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BsCartPlus } from "react-icons/bs";
import { formatNumberToPersian } from "@/utils/NumberToFarsi/NumberToFarsi";
const CardSearchPage = ({
  general_info,
  url,
  price,
  tombnailImg,
  type,
}: IProduct) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        dir="rtl"
        onClick={() => {
          navigate(`product/${url}` || "");
        }}
        className={`flex  md:flex-col gap-2 border-b md:border border-gray-200 p-2 ${
          !general_info?.stock?.in_stock && " grayscale-[70%] "
        } w-full h-full  cursor-pointer hover:shadow:lg active:shadow-xl hover:border-gray-300 md:min-w-[200px] bg-base-100 flex-shrink-0  `}
      >
        <figure>
          <div
            className={`w-full flex justify-between px-2
              font-bold  text-md ${
                price?.off ? "text-red-500" : "text-base-100"
              }`}
          >
            - فروش ویژه -
            {/* <span className="text-2xl text-primary">
              <BsCartPlus />
            </span> */}
          </div>
          {/* <div className="absolute top-4 left-4 cursor-pointer"></div> */}
          <img
            className="w-42 md:w-full md:mt-2"
            src={tombnailImg || ""}
            alt={type}
          />
        </figure>
        <div
          dir="rtl"
          className="flex overflow-hidden flex-col justify-between mt-9 w-full whitespace-pre-wrap text-ellipsis md:mt-2"
        >
          <div className="text-primary text-[11px] item-start hidden md:flex text-center gap-2">
            ارسال رایگان
            <div className="text-[20px] mt-1 text-blue-500">
              <LiaShippingFastSolid />
            </div>{" "}
          </div>
          <p className="text-primary  text-sm md:text-[15px] item-start mb-5">
            {general_info?.name}
          </p>
          {general_info?.stock?.in_stock ? (
            <div className="">
              {price?.off && (
                <div className="bg-red-500 px-2 font-bold rounded-full text-white absolute text-[12px]">
                  15٪
                </div>
              )}
              <div className="flex flex-col gap-2 items-end text-md">
                <p className="font-bold text-red-500">
                  {formatNumberToPersian(price?.price_after || 0)}
                </p>
                {price?.off && (
                  <p className="text-sm line-through text-primary">
                    {formatNumberToPersian(price?.price_before || 0)}
                  </p>
                )}
              </div>
            </div>
          ) : (
            <p className="flex justify-end items-center pr-1 text-sm font-semibold text-center text-red-500">
              فروخته شد
            </p>
          )}
        </div>
      </div>
    </>
  );
};
export default CardSearchPage;
