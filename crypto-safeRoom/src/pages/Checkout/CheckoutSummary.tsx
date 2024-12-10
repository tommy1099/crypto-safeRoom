import { Button } from "@/components/ui";
import { Container } from "..";
import { BsFillTrashFill } from "react-icons/bs";
import { FaArrowsRotate } from "react-icons/fa6";
import { formatNumberToPersian } from "@/utils/NumberToFarsi/NumberToFarsi";
import EmptyCartPic from "../../assets/img/empty-cart.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import {
  removeItem,
  resetShippingCart,
  setDiscount,
} from "@/Store/CartListReducer";
import { RxCross1 } from "react-icons/rx";
import dummyIMG from "../../assets/img/logos/images.png";

import { RootState } from "@/Store/Store";
import { ICheckoutSummary } from "@/Interfaces/Interfaces";

const CheckoutSummary = ({ shippingPrice }: ICheckoutSummary) => {
  const dispatch = useDispatch();
  const [EnteredDiscountCode, seEnteredDiscountCode] = useState<string>("");
  // const [discountState, setDiscountState] = useState<boolean>(false);
  const [discoiuntAmount, setDiscoiuntAmount] = useState<number>(0);

  const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    seEnteredDiscountCode(event.target.value);
  };
  const discountState = useSelector(
    (state: RootState) => state.cartList.isDiscounted
  );

  const handleDiscount = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ enteredDiscountCode: EnteredDiscountCode }),
    };
    const response = await fetch(
      "http://localhost:3000/product/discountAmount",
      requestOptions
    );
    if (response.ok) {
      const { state, amount } = await response.json();
      console.log("state: ", state);
      console.log("amount: ", amount);
      // setDiscountState(state);
      dispatch(setDiscount({ state, amount }));
      setDiscoiuntAmount(amount);
    }
  };
  useEffect(() => {
    console.log("original price: ", priceBefore);
    console.log("discountState: ", discountState);
    // dispatch(resetShippingCart());
  }, [discountState]);
  //cartItems, discount, dispatch, price,
  const cartItems = useSelector((state: RootState) => state.cartList.list);
  const priceAfter = useSelector(
    (state: RootState) => state.cartList.priceAfter
  );
  const priceBefore = useSelector(
    (state: RootState) => state.cartList.priceBefore
  );
  const myRef = useRef<HTMLInputElement>(null);

  const handleRemoveItem = (
    id: string,
    title: string,
    link: string,
    img: string,
    quantity: number,
    price: number
  ) => {
    dispatch(removeItem({ id, title, link, img, quantity, price }));
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
              className="flex justify-between p-1 border-b border-gray-200"
            >
              <img className="w-24 rounded-md" src={dummyIMG} alt="Cart" />
              <div className="flex flex-col justify-center items-start text-sm">
                <p className="flex justify-start text-neutral items-center max-w-[70%]  truncate">
                  {item.title}
                </p>
                <p className="text-neutral">
                  {formatNumberToPersian(item.price)} تومان
                </p>
              </div>
              <div className="flex items-center">
                <Button
                  style="ml-5 text-red-500"
                  onClick={() =>
                    handleRemoveItem(
                      item.id,
                      item.title,
                      item.link,
                      item.img,
                      item.quantity,
                      item.price
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
            {!discountState ? (
              <>
                <div
                  onClick={handleDiscount}
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
                  onBlur={handleInputBlur}
                />
              </>
            ) : (
              <div className="flex gap-5 items-center p-1 rounded-md border-2 border-orange-400">
                <span>% {formatNumberToPersian(discoiuntAmount)} </span>
                <div
                  onClick={() => {}}
                  className="cursor-pointer hover:text-orange-200"
                >
                  <RxCross1 />
                </div>
              </div>
            )}
          </div>{" "}
          <p>{"کد تخفیف"}</p>
        </div>
        <div className={`flex justify-between items-center mt-3 text-sm`}>
          <p className={`${discountState && "line-through"}`} dir="rtl">
            {formatNumberToPersian(priceBefore)} تومان
          </p>
          <p>{"قیمت کالاها"}</p>
        </div>
        {discountState && (
          <div className="flex justify-between items-center mt-3 text-sm">
            <p dir="rtl">{formatNumberToPersian(priceAfter)} تومان</p>
            <p>{"قیمت کالاها با تخفیف"}</p>
          </div>
        )}
        <div className="flex justify-between items-center pt-2 mt-5 text-xl font-bold border-t-2 border-gray-300">
          <p dir="rtl">
            {formatNumberToPersian(shippingPrice + priceAfter)} تومان
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
      <button
        className={` ${
          cartItems.length <= 0
            ? "disabled border-base-100 bg-gray-200 text-gray-400"
            : "border-orange-400 cursor-pointer hover:bg-orange-400 hover:border-orange-400 hover:text-orange-100"
        } py-1 mt-5 rounded-md border-2  transition-all `}
      >
        پرداخت
      </button>
    </Container>
  );
};
export default CheckoutSummary;
