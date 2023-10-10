import { Container } from "..";
import { Button, Footer, Input, NavBar } from "../../components/ui";
import pic from "../../assets/img/bearandbull.png";
import { BsFillTrashFill } from "react-icons/bs"; // Import the shopping cart icon
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../../Store/Store";
import { removeItem, decreaseOne, addItem } from "../../Store/CartListReducer";
import MellatPic from "../../assets/img/Mellat.jpg";
import BTCPic from "../../assets/img/bitcoin-logo-vector-26870963.jpg";
import PaypalPic from "../../assets/img/paypal-logo-paypal-logo-free-free-vector.jpg";
import ZarinPalPic from "../../assets/img/zarinPal.png";
import PishtazPic from "../../assets/img/pishtaz.jpeg";
import TipaxPic from "../../assets/img/tipax.jpeg";
import { useDispatch } from "react-redux";
import EmptyCartPic from "../../assets/img/empty-cart.png";
import { useEffect, useRef, useState } from "react";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { priceCalculator, reset } from "../../Store/priceReducer";
import { FaArrowsRotate } from "react-icons/fa6";
const Checkout = () => {
  const myRef = useRef<HTMLInputElement>(null);
  const price = useSelector((state: RootState) => state.Price.price);
  const [selectedPayment, setSelectedPayment] = useState("");
  const [selectedShipping, setSelectedShipping] = useState("");
  const [shippingMethod, setShippingMethod] = useState(0);
  //dummy state for rerendering the page
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  //=====================================
  const handleSelectPayment = (value: string) => {
    setSelectedPayment(value);
  };
  const handleSelectShipping = (value: string) => {
    setSelectedShipping(value);
    value === "tipax" ? setShippingMethod(15) : setShippingMethod(10);
  };
  const dispatch = useDispatch();

  const cartItems = useSelector((state: RootState) => state.cartList.list);
  const handlerRemoveItem = (
    id: string,
    title: string,
    img: string,
    quantity: number
  ) => {
    dispatch(removeItem({ id, title, img, quantity, price: price }));
  };
  const handlerDecreaseOneItem = (
    id: string,
    title: string,
    img: string,
    quantity: number
  ) => {
    dispatch(decreaseOne({ id, title, img, quantity: quantity, price: price }));
  };
  const handlerAddOneItem = (
    id: string,
    title: string,
    img: string,
    quantity: number
  ) => {
    dispatch(addItem({ id, title, img, quantity: quantity, price: price }));
  };
  useEffect(() => {
    dispatch(reset());
    cartItems.forEach((item) =>
      dispatch(priceCalculator(item.quantity * item.price))
    );
  }, [dispatch, cartItems, price]);
  return (
    <>
      <NavBar />
      <div className="flex z-10 mb-[-10%]">
        <Container style="absolute ml-[2%] mt-[5%] rounded-md w-[30%] h-[85%] p-5 shadow-2xl">
          <p className="text-2xl font-bold">Order Summary</p>
          {cartItems.length ? (
            <ul className="my-5 h-[400px] overflow-y-auto">
              {cartItems.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between p-5 border-b-2 border-b-gray-100"
                >
                  <img className="w-20" src={pic} alt="Cart" />
                  <div className="flex flex-col ml-2 w-[40%] items-start justify-start">
                    <p className="flex justify-start items-center max-w-[70%] truncate">
                      {item.title}
                    </p>
                    <p>${item.price}</p>
                  </div>
                  <div className="flex items-center">
                    <div
                      className="text-gray-600"
                      onClick={() => {
                        handlerDecreaseOneItem(
                          item.id,
                          item.title,
                          item.img,
                          item.quantity
                        );
                      }}
                    >
                      <BiSolidDownArrow />
                    </div>

                    <p className="flex p-1 text-red-500">{item.quantity}x</p>
                    <div
                      className="mr-5 text-gray-600"
                      onClick={() => {
                        handlerAddOneItem(
                          item.id,
                          item.title,
                          item.img,
                          item.quantity
                        );
                      }}
                    >
                      <BiSolidUpArrow />
                    </div>
                    <Button
                      style="ml-5 text-red-500"
                      onClick={() => {
                        handlerRemoveItem(
                          item.id,
                          item.title,
                          item.img,
                          item.quantity
                        );
                      }}
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

          <div className="mt-[25%]">
            <div className="flex justify-between items-center">
              <p>Code</p>
              <div className="flex">
                <div className="mt-2 mr-3" onClick={handleClick}>
                  <FaArrowsRotate />
                </div>
                <Input
                  ref={myRef}
                  type="text"
                  style="border p-2 rounded-md w-[125px] h-8"
                  placeHolder="Cupoun Code"
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
              {myRef.current && myRef.current.value === "off" ? (
                <p>
                  $
                  {shippingMethod +
                    price -
                    (shippingMethod + price) * (10 / 100)}
                </p>
              ) : (
                <p>${shippingMethod + price}</p>
              )}
            </div>
          </div>
        </Container>
        <Container style="absolute ml-[35%] mt-[5%] rounded-md w-[55%] h-[45%] p-5">
          <div className="flex flex-col">
            <p className="text-3xl font-bold">Billing Info</p>
            <p className="mt-5">
              Choose a payment method option below and fill out the appropriate
              information
            </p>
          </div>

          <form action="" className="flex flex-col mt-10 w-full">
            <div className="flex gap-[50px] mt-5">
              <label
                htmlFor="cryptoTrans"
                key={"cryptoTrans"}
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
                  className="w-[150px] h-[130px] cursor-pointer rounded-md object-cover"
                  onClick={() => handleSelectPayment("cryptoTrans")}
                />
              </label>
              <label
                htmlFor="BMTrans"
                key={"BMTrans"}
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
                  className="w-[150px] h-[130px] cursor-pointer rounded-md object-cover"
                  onClick={() => handleSelectPayment("BMTrans")}
                />
              </label>
              <label
                htmlFor="zarinPalTrans"
                key={"zarinPalTrans"}
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
                  className="w-[150px] h-[130px] cursor-pointer rounded-md "
                  onClick={() => handleSelectPayment("zarinPalTrans")}
                />
              </label>
              <label
                htmlFor="paypalTrans"
                key={"paypalTrans"}
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
                  className="w-[150px] h-[130px] cursor-pointer rounded-md object-cover"
                  onClick={() => handleSelectPayment("paypalTrans")}
                />
              </label>
            </div>
            <div className="flex mt-[5%]">
              <div className="flex flex-col">
                <div className="flex gap-20">
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
                        {" "}
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
                        {" "}
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
                  <Container style="w-[400px] h-full">
                    <p className="text-xl font-bold">Shipping Method</p>
                    <div className="flex mt-[5%]">
                      <div className="mt-[5%]">
                        <label
                          htmlFor="pishtaz"
                          key={"pishtaz"}
                          className={`absolute rounded-md ${
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
                            className="w-[150px] h-[80px] cursor-pointer rounded-md "
                            onClick={() => handleSelectShipping("pishtaz")}
                          />
                        </label>
                      </div>
                      <div className="mt-[5%] ml-[45%]">
                        <label
                          htmlFor="tipax"
                          key={"tipax"}
                          className={`absolute rounded-md ${
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
                            className="w-[150px] h-[80px] cursor-pointer rounded-md"
                            onClick={() => handleSelectShipping("tipax")}
                          />
                        </label>
                      </div>
                      <div className="flex flex-col  mt-[30%] ml-[-45%]">
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
      <div className="mt-[60%]">
        <Footer />
      </div>
    </>
  );
};
export default Checkout;