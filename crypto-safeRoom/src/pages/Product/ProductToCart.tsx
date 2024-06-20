import { ProductDesc } from "..";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { Button } from "../../components/ui";
import { LuRuler } from "react-icons/lu";
import { MdIosShare } from "react-icons/md";
import { IProduct } from "../../Interfaces/Interfaces";
import { formatNumberToPersian } from "@/utils/NumberToFarsi/NumberToFarsi";
const ProductToCart = ({ price, general_info, type }: IProduct) => {
  return (
    <div className=" mt-[8%] gap-2 p-5 flex flex-col bg-base-100 justify-between w-1/3 text-right items-end  my-2  rounded-md">
      <div className="flex justify-between items-center w-full">
        <div className="text-neutral text-[30px] cursor-pointer">
          <MdIosShare />
        </div>
        <p className="pb-2 w-full text-2xl border-b text-neutral">
          {general_info?.name}
        </p>
      </div>
      <div className="flex gap-2 justify-center items-center text-center">
        <p className="text-sm text-neutral">گارانتی اصالت کالا</p>
        <div className="text-[30px]">
          <IoShieldCheckmarkSharp />
        </div>
      </div>
      <div className="w-full">
        <ProductDesc type={type} general_info={general_info} />
      </div>

      <div className="flex flex-col gap-5 justify-around pr-5 w-full">
        {!general_info?.stock?.in_stock ? (
          <></>
        ) : (
          <>
            <p className="w-full text-xl text-red-500">
              تومان {formatNumberToPersian(price?.price_before || 0)}
            </p>
            <p className="text-red-500 text-xl w-full line-through grayscale-[70%]">
              تومان {formatNumberToPersian(price?.price_after || 0)}
            </p>
          </>
        )}

        <div className="flex justify-between items-center w-full text-center">
          <Button style="text-base-100 text-[13px] px-2 py-2  rounded-md bg-primary flex items-center gap-2">
            راهنمای سایز
            <div className="text-base-100 text-[20px]">
              {" "}
              <LuRuler />
            </div>
          </Button>

          {!general_info?.stock?.in_stock ? (
            <span>فروخته شد</span>
          ) : (
            <button className=" text-base-100 text-[16px] px-4 py-2 rounded-md bg-primary">
              افزودن به سبد خرید
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProductToCart;
