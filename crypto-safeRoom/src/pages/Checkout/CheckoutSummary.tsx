import { Button } from "@/components/ui";
import { Container } from "..";
import { BsFillTrashFill } from "react-icons/bs";
import { FaArrowsRotate } from "react-icons/fa6";
import { formatNumberToPersian } from "@/utils/NumberToFarsi/NumberToFarsi";
import EmptyCartPic from "../../assets/img/empty-cart.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { removeItem } from "@/Store/CartListReducer";
import { RootState } from "@/Store/Store";
import { ICheckoutSummary } from "@/Interfaces/Interfaces";
import {
  discountPriceCalculator,
  priceCalculator,
  reset,
} from "@/Store/priceReducer";

const CheckoutSummary = ({ shippingPrice }: ICheckoutSummary) => {
  useEffect(() => {
    dispatch(reset());
    console.log("price:", price);
    console.log("discount:", discount);
    console.log("shipping:", shippingPrice);
    dispatch(discountPriceCalculator((shippingPrice + price) * (10 / 100)));

    cartItems.forEach((item) =>
      dispatch(priceCalculator(item.quantity * item.price))
    );
  }, [shippingPrice]);
  //cartItems, discount, dispatch, price,
  const { price, discount } = useSelector((state: RootState) => state.Price);
  const cartItems = useSelector((state: RootState) => state.cartList.list);

  const myRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const handleRemoveItem = (
    id: string,
    title: string,
    img: string | undefined,
    quantity: number,
    physical: boolean
  ) => {
    dispatch(removeItem({ id, title, img, quantity, price, physical }));
  };
  return (
    <Container
      dir="rtl"
      style={`relative flex flex-col bg-base-100 text-right rounded-md lg:w-[30%] lg:h-full p-10 "bg-base-100" text-neutral `}
    >
      <p className="pb-2 mb-5 w-28 text-xl font-bold text-right border-b-2 border-orange-400">
        {"سبد خرید"}
      </p>
      {cartItems.length ? (
        <ul className="my-5 h-[400px] overflow-y-auto">
          {cartItems.map((item, index) => (
            <li
              key={index}
              className="flex justify-between p-5 border-b-2 border-b-neutral"
            >
              <img className="w-20 rounded-md" src={""} alt="Cart" />
              <div className="flex flex-col ml-2 w-[40%] items-start justify-start">
                <p className="flex justify-start text-neutral items-center max-w-[70%] truncate">
                  {item.title}
                </p>
                <p className="text-neutral">
                  تومان{formatNumberToPersian(item.price)}
                </p>
              </div>
              <div className="flex items-center">
                <Button
                  style="ml-5 text-red-500"
                  onClick={() =>
                    handleRemoveItem(
                      item.id,
                      item.title,
                      item.img,
                      item.quantity,
                      item.physical
                    )
                  }
                >
                  <BsFillTrashFill />
                </Button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="my-18">
          <img src={EmptyCartPic} alt="EmptyCart" />
        </div>
      )}

      <div className="mt-[5%]">
        <div className="flex justify-between items-center text-sm">
          <div dir="rtl" className="flex relative justify-center items-center">
            <div
              onClick={() => {}}
              className="absolute left-3 cursor-pointer text-primary"
            >
              <FaArrowsRotate />
            </div>
            <input
              ref={myRef}
              type="text"
              className={`px-2 py-1 w-32 text-sm rounded-md border-2 bg-base-200 border-base-100 focus:border-orange-400 focus:outline-none placeholder:text-neutral`}
              placeholder={""}
              required={false}
            />
          </div>{" "}
          <p>{"کد تخفیف"}</p>
        </div>
        <div className="flex justify-between items-center mt-3 text-sm">
          <p dir="rtl">{formatNumberToPersian(price)} تومان</p>
          <p>{"قیمت کالاها"}</p>
        </div>
        <div className="flex justify-between items-center pt-2 mt-5 text-xl font-bold border-t-2 border-gray-300">
          <p dir="rtl">
            {myRef.current && myRef.current.value === "off"
              ? formatNumberToPersian(
                  shippingPrice + price - (shippingPrice + price) * (10 / 100)
                )
              : formatNumberToPersian(shippingPrice + price)}{" "}
            تومان
          </p>
          <p>{"مجموع"}</p>
        </div>
      </div>
      <label
        className="flex gap-2 justify-start items-center mt-5"
        htmlFor="acceptingRules"
      >
        <p dir="" className="inline text-sm">
          <a
            href="#"
            className="text-orange-500 hover:underline"
            target="_blank"
          >
            شرایت و مقررات
          </a>{" "}
          را خوانده ام و آن را می پذیرم.
        </p>
        <input
          className="cursor-pointer accent-orange-400 focus:accent-orange-500"
          id="acceptingRules"
          type="checkbox"
        />
      </label>
      <button className="py-1 mt-5 rounded-md border-2 border-orange-400 transition-all cursor-pointer hover:bg-orange-400 hover:border-orange-400">
        پرداخت
      </button>
    </Container>
  );
};
export default CheckoutSummary;
