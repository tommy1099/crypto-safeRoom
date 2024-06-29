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
      dir="ltr"
      style={`relative flex flex-col bg-gray-100 rounded-md lg:w-[30%] lg:h-[90%] p-10 shadow-2xl "bg-base-100" text-neutral `}
    >
      <p dir={"rtl"} className={`text-2xl font-bold text-neutral`}>
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
        <div className="flex justify-between items-center">
          <div className="flex">
            <div className="mt-2 mr-3 text-primary">
              <FaArrowsRotate />
            </div>
            <input
              ref={myRef}
              type="text"
              className={`border bg-base-100 p-2 rounded-md w-[130px] h-8 focus:border-primary border-neutral focus:border-2 focus:outline-none placeholder:text-neutral text-neutral`}
              placeholder={"code"}
              required={false}
            />
          </div>{" "}
          <p>{"کد تخفیف"}</p>
        </div>
        <div className="flex justify-between items-center">
          <p>تومان{formatNumberToPersian(price)}</p> <p>{"قیمت کالاها"}</p>
        </div>
        <div className="flex justify-between items-center pt-2 mt-5 text-xl font-bold border-t-2 border-primary">
          <p>
            تومان
            {myRef.current && myRef.current.value === "off"
              ? formatNumberToPersian(
                  shippingPrice + price - (shippingPrice + price) * (10 / 100)
                )
              : formatNumberToPersian(shippingPrice + price)}
          </p>
          <p>{"مجموع"}</p>
        </div>
      </div>
    </Container>
  );
};
export default CheckoutSummary;
