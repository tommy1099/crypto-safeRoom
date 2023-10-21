import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsFillTrashFill } from "react-icons/bs";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { FaArrowsRotate } from "react-icons/fa6";
import { RootState } from "../../Store/Store";
import { removeItem, decreaseOne, addItem } from "../../Store/CartListReducer";
import { priceCalculator, reset } from "../../Store/priceReducer";
import { Button, Input, NavBar, Footer } from "../../components/ui";
import { Container } from "..";
import { ScrollToTopIcon } from "../../components/forms";
import pic from "../../assets/img/bearandbull.png";
import MellatPic from "../../assets/img/Mellat.jpg";
import BTCPic from "../../assets/img/bitcoin-logo-vector-26870963.jpg";
import PaypalPic from "../../assets/img/paypal-logo-paypal-logo-free-free-vector.jpg";
import ZarinPalPic from "../../assets/img/zarinPal.png";
import PishtazPic from "../../assets/img/pishtaz.jpeg";
import TipaxPic from "../../assets/img/tipax.jpeg";
import EmptyCartPic from "../../assets/img/empty-cart.png";

const Checkout = () => {
  const myRef = useRef<HTMLInputElement>(null);
  const price = useSelector((state: RootState) => state.Price.price);
  const [selectedPayment, setSelectedPayment] = useState("");
  const [selectedShipping, setSelectedShipping] = useState("");
  const [shippingMethod, setShippingMethod] = useState(0);
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cartList.list);

  const handleSelectPayment = (value: string) => setSelectedPayment(value);

  const handleSelectShipping = (value: string) => {
    setSelectedShipping(value);
    setShippingMethod(value === "tipax" ? 15 : 10);
  };

  useEffect(() => {
    dispatch(reset());
    cartItems.forEach((item) =>
      dispatch(priceCalculator(item.quantity * item.price))
    );
  }, [dispatch, cartItems, price]);

  const handleRemoveItem = (
    id: string,
    title: string,
    img: string,
    quantity: number
  ) => {
    dispatch(removeItem({ id, title, img, quantity, price }));
  };

  const handleDecreaseOneItem = (
    id: string,
    title: string,
    img: string,
    quantity: number
  ) => {
    dispatch(decreaseOne({ id, title, img, quantity, price }));
  };

  const handleAddOneItem = (
    id: string,
    title: string,
    img: string,
    quantity: number
  ) => {
    dispatch(addItem({ id, title, img, quantity, price }));
  };

  return (
    <>
      <NavBar />
      <div className="flex flex-col lg:flex-row z-10 mb-[-10%]">
        <Container style="relative ml-[2%] mt-[20%] md:mt-[5%] rounded-md lg:w-[30%] lg:h-[90%] p-10 shadow-2xl">
          <p className="text-2xl font-bold">Order Summary</p>
          {cartItems.length ? (
            <ul className="my-5 h-[400px] overflow-y-auto">
              {cartItems.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between p-5 border-b-2 border-b-gray-100"
                >
                  <img className="w-20 rounded-md" src={pic} alt="Cart" />
                  <div className="flex flex-col ml-2 w-[40%] items-start justify-start">
                    <p className="flex justify-start items-center max-w-[70%] truncate">
                      {item.title}
                    </p>
                    <p>${item.price}</p>
                  </div>
                  <div className="flex items-center">
                    <div
                      className="text-gray-600"
                      onClick={() =>
                        handleDecreaseOneItem(
                          item.id,
                          item.title,
                          item.img,
                          item.quantity
                        )
                      }
                    >
                      <BiSolidDownArrow />
                    </div>
                    <p className="flex p-1 text-red-500">{item.quantity}x</p>
                    <div
                      className="mr-5 text-gray-600"
                      onClick={() =>
                        handleAddOneItem(
                          item.id,
                          item.title,
                          item.img,
                          item.quantity
                        )
                      }
                    >
                      <BiSolidUpArrow />
                    </div>
                    <Button
                      style="ml-5 text-red-500"
                      onClick={() =>
                        handleRemoveItem(
                          item.id,
                          item.title,
                          item.img,
                          item.quantity
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
              <p>Code</p>
              <div className="flex">
                <div className="mt-2 mr-3" onClick={() => setCount(count + 1)}>
                  <FaArrowsRotate />
                </div>
                <Input
                  ref={myRef}
                  type="text"
                  style="border p-2 rounded-md w-[125px] h-8"
                  placeHolder="Coupon Code"
                />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p>Subtotal</p>
              <p>${price}</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Shipping</p>
              <p>${shippingMethod}</p>
            </div>
            <div className="flex justify-between items-center mt-5 text-xl font-bold">
              <p>Order Total</p>
              <p>
                $
                {myRef.current && myRef.current.value === "off"
                  ? shippingMethod +
                    price -
                    (shippingMethod + price) * (10 / 100)
                  : shippingMethod + price}
              </p>
            </div>
          </div>
        </Container>
        <Container style="relative lg:ml-[5%] mt-[5%] rounded-md lg:w-[55%] lg:h-[45%] p-10">
          <div className="flex flex-col">
            <p className="text-3xl font-bold">Billing Info</p>
            <p className="mt-5">
              Choose a payment method option below and fill out the appropriate
              information
            </p>
          </div>
          <form action="" className="flex flex-col mt-10 w-full">
            <div className="flex flex-col md:flex-row gap-[20px] md:gap-[50px] mt-5">
              <div className="flex gap-[20px]">
                <label
                  htmlFor="cryptoTrans"
                  className={`relative rounded-md ${
                    selectedPayment === "cryptoTrans"
                      ? "border-2 border-patternColors-red shadow-lg"
                      : "border-2 border-gray-200"
                  }`}
                >
                  <Input
                    id="cryptoTrans"
                    type="radio"
                    name="trans"
                    style="hidden"
                    defaultChecked={selectedPayment === "cryptoTrans"}
                    onChange={() => handleSelectPayment("cryptoTrans")}
                  />
                  <img
                    src={BTCPic}
                    alt="cryptoTrans"
                    className="w-[120px] h-[100px] cursor-pointer rounded-md object-cover"
                    onClick={() => handleSelectPayment("cryptoTrans")}
                  />
                </label>
                <label
                  htmlFor="BMTrans"
                  className={`relative rounded-md ${
                    selectedPayment === "BMTrans"
                      ? "border-2 border-patternColors-red shadow-lg"
                      : "border-2 border-gray-200"
                  }`}
                >
                  <Input
                    id="BMTrans"
                    type="radio"
                    name="trans"
                    style="hidden"
                    defaultChecked={selectedPayment === "BMTrans"}
                    onChange={() => handleSelectPayment("BMTrans")}
                  />
                  <img
                    src={MellatPic}
                    alt="MellatBank"
                    className="w-[120px] h-[100px] cursor-pointer rounded-md object-cover"
                    onClick={() => handleSelectPayment("BMTrans")}
                  />
                </label>
              </div>
              <div className="flex gap-[20px]">
                <label
                  htmlFor="zarinPalTrans"
                  className={`relative rounded-md ${
                    selectedPayment === "zarinPalTrans"
                      ? "border-2 border-patternColors-red shadow-lg"
                      : "border-2 border-gray-200"
                  }`}
                >
                  <Input
                    id="zarinPalTrans"
                    type="radio"
                    name="trans"
                    style="hidden"
                    defaultChecked={selectedPayment === "zarinPalTrans"}
                    onChange={() => handleSelectPayment("zarinPalTrans")}
                  />
                  <img
                    src={ZarinPalPic}
                    alt="ZarinPal"
                    className="w-[120px] h-[100px] cursor-pointer rounded-md"
                    onClick={() => handleSelectPayment("zarinPalTrans")}
                  />
                </label>
                <label
                  htmlFor="paypalTrans"
                  className={`relative rounded-md ${
                    selectedPayment === "paypalTrans"
                      ? "border-2 border-patternColors-red shadow-lg"
                      : "border-2 border-gray-200"
                  }`}
                >
                  <Input
                    id="paypalTrans"
                    type="radio"
                    name="trans"
                    style="hidden"
                    defaultChecked={selectedPayment === "paypalTrans"}
                    onChange={() => handleSelectPayment("paypalTrans")}
                  />
                  <img
                    src={PaypalPic}
                    alt="PayPal"
                    className="w-[120px] h-[100px] cursor-pointer rounded-md object-cover"
                    onClick={() => handleSelectPayment("paypalTrans")}
                  />
                </label>
              </div>
            </div>
            <div className="flex w-[350px] md:w-[400px] mt-[5%]">
              <div className="flex flex-col w-[350px]">
                <div className="flex flex-col gap-20 md:flex-row">
                  <div>
                    <p className="mb-5 text-xl font-bold">Billing Address</p>
                    <div className="flex gap-5">
                      <div className="flex flex-col">
                        <label className="mb-2 text-sm" htmlFor="lastName">
                          LAST NAME
                        </label>
                        <Input
                          id="lastName"
                          style="border w-[165px] h-10 rounded-md mb-1"
                          type="text"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="mb-2 text-sm" htmlFor="firstName">
                          FIRST NAME
                        </label>
                        <Input
                          id="firstName"
                          style="border w-[165px] h-10 rounded-md mb-1"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label className="mb-2 text-sm" htmlFor="address">
                        ADDRESS
                      </label>
                      <Input
                        id="address"
                        style="border w-[350px] h-10 rounded-md mb-1"
                        type="text"
                      />
                    </div>
                    <div className="flex gap-5">
                      <div className="flex flex-col">
                        <label className="mb-2 text-sm" htmlFor="city">
                          CITY
                        </label>
                        <Input
                          id="city"
                          style="border w-[165px] h-10 rounded-md mb-1"
                          type="text"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="mb-2 text-sm" htmlFor="town">
                          TOWN
                        </label>
                        <Input
                          id="town"
                          style="border w-[165px] h-10 rounded-md mb-1"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="flex gap-5">
                      <div className="flex flex-col">
                        <label className="mb-2 text-sm" htmlFor="zipCode">
                          ZIP CODE
                        </label>
                        <Input
                          id="zipCode"
                          style="border w-[165px] h-10 rounded-md mb-1"
                          type="text"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="mb-2 text-sm" htmlFor="phone">
                          PHONE NUMBER
                        </label>
                        <Input
                          id="phone"
                          style="border w-[165px] h-10 rounded-md mb-1"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <Container style="">
                    <p className="text-xl font-bold">Shipping Method</p>
                    <div className="flex flex-col mt-[5%] gap-2">
                      <div className="flex gap-2">
                        <div className="flex gap-[20px]">
                          <label
                            htmlFor="pishtaz"
                            className={`relative rounded-md ${
                              selectedShipping === "pishtaz"
                                ? "border-2 border-patternColors-red shadow-lg"
                                : "border-2 border-gray-200"
                            }`}
                          >
                            <Input
                              id="pishtaz"
                              type="radio"
                              name="shipping"
                              style="hidden"
                              defaultChecked={selectedShipping === "pishtaz"}
                              onChange={() => handleSelectShipping("pishtaz")}
                            />
                            <img
                              src={PishtazPic}
                              alt="Pishtaz"
                              className="w-[120px] h-[100px] cursor-pointer rounded-md"
                              onClick={() => handleSelectShipping("pishtaz")}
                            />
                          </label>
                        </div>
                        <div className="flex gap-[20px]">
                          <label
                            htmlFor="tipax"
                            className={`relative rounded-md ${
                              selectedShipping === "tipax"
                                ? "border-2 border-patternColors-red shadow-lg"
                                : "border-2 border-gray-200"
                            }`}
                          >
                            <Input
                              id="tipax"
                              type="radio"
                              name="shipping"
                              style="hidden"
                              defaultChecked={selectedShipping === "tipax"}
                              onChange={() => handleSelectShipping("tipax")}
                            />
                            <img
                              src={TipaxPic}
                              alt="Tipax"
                              className="w-[120px] h-[100px] cursor-pointer rounded-md"
                              onClick={() => handleSelectShipping("tipax")}
                            />
                          </label>
                        </div>
                      </div>
                      <div className="relative">
                        <label htmlFor="textArea">Leave us a note</label>
                        <textarea
                          className="rounded-md border"
                          name="text"
                          id="textArea"
                          cols={30}
                          rows={5}
                        ></textarea>
                      </div>
                    </div>
                  </Container>
                </div>
                <Button
                  onClick={() => {}}
                  style="p-2 text-white bg-gray-800 w-52 rounded-md mt-[5%] ml-[30%] w-[30%] h-[20%]"
                >
                  {"CHECKOUT"}
                </Button>
              </div>
            </div>
          </form>
        </Container>
      </div>
      <div className="mt-[10%] md:mt-[15%]">
        <Footer />
      </div>
      <div className="fixed left-0 top-[90%] m-5 ">
        <ScrollToTopIcon />
      </div>
    </>
  );
};
export default Checkout;
