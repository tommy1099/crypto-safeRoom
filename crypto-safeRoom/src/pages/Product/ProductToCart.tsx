import { ProductDesc } from "..";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { Button } from "../../components/ui";
import { LuRuler } from "react-icons/lu";
import { MdIosShare } from "react-icons/md";
const ProductToCart = () => {
  return (
    <div className=" mt-[10%] p-5 flex flex-col bg-base-100 justify-between w-[250%] text-right items-end  my-2  rounded-md">
      <div className="flex justify-between items-center w-full">
        <div className="text-neutral text-[30px] cursor-pointer">
          <MdIosShare />{" "}
        </div>
        <p className="text-neutral text-2xl">کلمب مادر خراب مشکی سایز ۲ایکس</p>
      </div>
      <div className="flex gap-2 justify-center text-center items-center">
        <p className="text-neutral text-sm">گارانتی اصالت کالا</p>
        <div className="text-[30px]">
          <IoShieldCheckmarkSharp />
        </div>
      </div>
      <ProductDesc
        type="clothes"
        height={80}
        waist={42}
        waist_to_crotch={32}
        crotch_to_thigh={32}
        size="xl"
        collar_to_sleeve={0}
        armpit_to_armpit={0}
      />
      <div className="flex flex-col w-full justify-around gap-5 pr-5">
        <p className="text-red-500 text-xl w-full">تومان ۱،۰۰۰،۰۰۰ </p>
        <p className="text-red-500 text-xl w-full line-through grayscale-[70%]">
          تومان ۱،۵۰۰،۰۰۰{" "}
        </p>

        <div className="flex justify-between w-full items-center text-center">
          <Button style="text-base-100 text-[13px] px-2 py-2  rounded-md bg-primary flex items-center gap-2">
            راهنمای سایز
            <div className="text-base-100 text-[20px]">
              {" "}
              <LuRuler />
            </div>
          </Button>

          <button className=" text-base-100 text-[16px] px-4 py-2 rounded-md bg-primary">
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductToCart;
