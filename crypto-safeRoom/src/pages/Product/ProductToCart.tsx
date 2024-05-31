import { ProductDesc } from "..";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { Button } from "../../components/ui";
import { LuRuler } from "react-icons/lu";
import { MdIosShare } from "react-icons/md";
import { IProduct } from "../../Interfaces/Interfaces";
const ProductToCart = ({ price, general_info, type }: IProduct) => {
  return (
    <div className=" mt-[8%] gap-2 p-5 flex flex-col bg-base-100 justify-between w-1/3 text-right items-end  my-2  rounded-md">
      <div className="flex justify-between items-center w-full">
        <div className="text-neutral text-[30px] cursor-pointer">
          <MdIosShare />
        </div>
        <p className="text-neutral text-2xl pb-2 border-b w-full">
          {general_info?.name}
        </p>
      </div>
      <div className="flex gap-2 justify-center text-center items-center">
        <p className="text-neutral text-sm">گارانتی اصالت کالا</p>
        <div className="text-[30px]">
          <IoShieldCheckmarkSharp />
        </div>
      </div>
      <div className="w-full">
        <ProductDesc type={type} general_info={general_info} />
      </div>

      <div className="flex flex-col w-full justify-around gap-5 pr-5">
        {!general_info?.stock?.in_stock ? (
          <></>
        ) : (
          <>
            <p className="text-red-500 text-xl w-full">
              تومان {price?.price_before}
            </p>
            <p className="text-red-500 text-xl w-full line-through grayscale-[70%]">
              تومان {price?.price_after}
            </p>
          </>
        )}

        <div className="flex justify-between w-full items-center text-center">
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
