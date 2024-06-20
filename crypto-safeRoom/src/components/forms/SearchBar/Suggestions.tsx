import { IProduct, ISuggestions } from "../../../Interfaces/Interfaces";
import { Container } from "../../../pages";
import dummyIMG from "../../../assets/img/logos/images.png";
import { Loading } from "..";
import emptyImg from "../../../assets/img/logos/empty_state.png";
import { IoColorPaletteOutline } from "react-icons/io5";
import { IoPricetagsOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { formatNumberToPersian } from "@/utils/NumberToFarsi/NumberToFarsi";
import calculateDiscountPercentage from "@/utils/calculateDiscountPercentage/calculateDiscountPercentage";
const Suggestions = ({ data, showLoading, nothingFound }: ISuggestions) => {
  const navigate = useNavigate();
  return (
    <Container
      dir=""
      style="w-full max-h-[400px] dropdown-bottom  -mt-4 pt-5 overflow-y-auto absolute border-t-0 -z-10 shadow-xl rounded-t-xl rounded-b-md bg-base-100  border border-slate-400"
    >
      {showLoading && (
        <div className="flex justify-center my-5">
          <Loading />
        </div>
      )}
      {nothingFound && (
        <div className="flex justify-center items-center text-sm text-center">
          <p className="p-2 pr-5 border-r-2">چیزی یافت نشد</p>
          <img src={emptyImg} alt="" className="w-[200px] " />
        </div>
      )}
      <div className="">
        {data.map((product: IProduct) => (
          <>
            <div
              onClick={() => {
                navigate(`product/${product.url}` || "");
              }}
              className="flex relative gap-2 justify-end items-center px-2 py-1 mt-1 cursor-pointer"
            >
              {product.price?.off && (
                <span className="absolute top-2 right-3 py-1 min-w-[35px] flex items-center justify-center text-center text-sm text-white bg-red-500 rounded-full">
                  {calculateDiscountPercentage(
                    product?.price?.price_before || 0,
                    product.price?.price_after || 0
                  )}
                  %
                </span>
              )}
              <div className="flex flex-col gap-2">
                <p>{product.general_info?.name}</p>
                <div className="flex gap-2 justify-end">
                  <p className="text-sm text-slate-500">
                    {product.detailedInfo?.color}
                  </p>
                  <div className="text-slate-400">
                    <IoColorPaletteOutline />
                  </div>
                </div>

                <div className="flex gap-2 justify-end">
                  <div
                    dir="rtl"
                    className="flex gap-2 justify-start text-sm text-right"
                  >
                    <p className="line-through text-slate-500">
                      {formatNumberToPersian(product.price?.price_before || 0)}
                    </p>
                    <p className="text-red-500">
                      {formatNumberToPersian(product.price?.price_after || 0)}{" "}
                      تومان
                    </p>
                  </div>

                  <div className="text-slate-400">
                    <IoPricetagsOutline />
                  </div>
                </div>
              </div>

              <img src={dummyIMG} alt="" className="w-32 rounded-md" />
            </div>
          </>
        ))}
      </div>
    </Container>
  );
};
export default Suggestions;
