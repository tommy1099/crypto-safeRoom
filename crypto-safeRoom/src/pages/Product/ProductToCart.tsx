import { ProductDesc } from "..";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { LuRuler } from "react-icons/lu";
import { MdIosShare } from "react-icons/md";
import { IProduct } from "../../Interfaces/Interfaces";
import { formatNumberToPersian } from "@/utils/NumberToFarsi/NumberToFarsi";
import { addItem, resetShippingCart } from "../../Store/CartListReducer";
import { useDispatch } from "react-redux";
const ProductToCart = ({
  price,
  general_info,
  type,
  url,
  _id,
  tombnailImg,
}: IProduct) => {
  const dispatch = useDispatch();
  const handleAddToCart = (product: IProduct) => {
    dispatch(
      addItem({
        id: product._id || "",
        title: product.general_info?.name || "",
        link: product.url || "",
        img: product.tombnailImg || "",
        quantity: 1,
        price: product.price?.price_after || 0,
      })
    );
  };

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
          <div dir="rtl">
            {price?.off && (
              <p className="w-full text-xl text-orange-500">
                {formatNumberToPersian(price?.price_after || 0)} تومان
              </p>
            )}
            <p className="text-orange-500 text-xl w-full line-through grayscale-[70%]">
              {formatNumberToPersian(price?.price_before || 0)} تومان
            </p>
          </div>
        )}

        <div className="flex justify-between items-center w-full text-center">
          <button className="text-neutral text-[13px] px-2 py-2  rounded-md border-2 border-orange-400 transition-all hover:text-orange-100  hover:bg-orange-400 flex items-center gap-2">
            راهنمای سایز
            <div className=" hover:text-orange-100 text-[20px]">
              {" "}
              <LuRuler />
            </div>
          </button>

          {!general_info?.stock?.in_stock ? (
            <span>فروخته شد</span>
          ) : (
            <button
              onClick={() => {
                // dispatch(resetShippingCart());

                handleAddToCart({
                  _id,
                  tombnailImg,
                  url,
                  price,
                  general_info,
                });
              }}
              className=" text-neutral text-[16px] px-4 py-2 rounded-md border-2 border-orange-400 transition-all hover:text-orange-100 hover:bg-orange-400"
            >
              افزودن به سبد خرید
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProductToCart;
