import { useNavigate } from "react-router-dom";
import { IProduct } from "../../../Interfaces/Interfaces";
import { LiaShippingFastSolid } from "react-icons/lia";
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
        className={`relative border border-gray-200 p-2 ${
          !general_info?.stock?.in_stock && " grayscale-[70%] "
        } w-full h-full  cursor-pointer hover:shadow-2xl hover:border-gray-300 md:min-w-[200px] bg-base-100 flex-shrink-0 shadow-md `}
      >
        <figure>
          {price?.off && (
            <div
              className="w-full absolute
             right-2  top-2  font-bold  text-md text-red-500"
            >
              - فروش ویژه -
            </div>
          )}
          {/* <div className="absolute top-4 left-4 cursor-pointer">
          <span className="text-primary text-3xl">
            <BsCartPlus />
          </span>
        </div> */}
          {/* </div> */}
          <img className="w-full mt-10" src={tombnailImg || ""} alt={type} />
        </figure>
        <div
          dir="rtl"
          className="whitespace-pre-wrap overflow-hidden text-ellipsis mt-2 flex flex-col "
        >
          <div className="text-primary text-[11px] item-start flex text-center gap-2">
            ارسال رایگان
            <div className="text-[20px] mt-1 text-blue-500">
              <LiaShippingFastSolid />
            </div>{" "}
          </div>
          <p className="text-primary text-[17px] item-start mb-5">
            {general_info?.name}
          </p>
          {general_info?.stock?.in_stock ? (
            <div className="">
              <div className="bg-red-500 px-2 font-bold rounded-full text-white absolute text-[12px]">
                15٪
              </div>
              <div className="flex flex-col gap-2 text-md items-end">
                <p className="text-red-500 font-bold">{price?.price_after}</p>
                <p className="text-primary text-sm line-through">
                  {price?.price_before}
                </p>
              </div>
            </div>
          ) : (
            <p className="flex items-center text-center justify-end text-sm pr-1 text-red-500 font-semibold">
              فروخته شد
            </p>
          )}
        </div>
      </div>
    </>
  );
};
export default CardSearchPage;
