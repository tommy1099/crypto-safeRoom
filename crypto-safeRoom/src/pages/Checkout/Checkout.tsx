import { useState, useEffect, useRef } from "react";
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
import { useTranslation } from "react-i18next";
import { formatNumberToPersian } from "../../utils/NumberToFarsi/NumberToFarsi";

const Checkout = () => {
  const myRef = useRef<HTMLInputElement>(null);
  const price = useSelector((state: RootState) => state.Price.price);
  const [selectedPayment, setSelectedPayment] = useState("");
  const [selectedShipping, setSelectedShipping] = useState("");
  const [shippingMethod, setShippingMethod] = useState(0);
  const [count, setCount] = useState(0);
  const { t } = useTranslation();
  const isDarkTheme = useSelector((state: RootState) => state.themeToggle.Dark);

  const isFa = useSelector((state: RootState) => state.lang.isFa);
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cartList.list);

  const handleSelectPayment = (value: string) => setSelectedPayment(value);
  const [includesPhysical, setIncludesPhysical] = useState(false);
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
    img: string | undefined,
    quantity: number,
    physical: boolean
  ) => {
    dispatch(removeItem({ id, title, img, quantity, price, physical }));
  };

  const handleDecreaseOneItem = (
    id: string,
    title: string,
    img: string | undefined,
    quantity: number,
    physical: boolean
  ) => {
    dispatch(decreaseOne({ id, title, img, quantity, price, physical }));
  };

  const handleAddOneItem = (
    id: string,
    title: string,
    img: string | undefined,
    quantity: number,
    physical: boolean
  ) => {
    dispatch(addItem({ id, title, img, quantity, price, physical }));
  };
  useEffect(() => {
    const includesPhysical = cartItems.some((item) => item.physical === true);
    setIncludesPhysical(includesPhysical);
  }, [cartItems]);

  return (
    <>
      <NavBar />
      <div className="flex flex-col lg:flex-row z-10 mb-[-10%]">
        <Container
          dir="ltr"
          style={`relative ml-[2%] mt-[20%] md:mt-[5%] rounded-md lg:w-[30%] lg:h-[90%] p-10 shadow-2xl ${
            isDarkTheme ? "bg-[#2c2c2c]" : "bg-base-100"
          } text-neutral `}
        >
          <p
            dir={isFa ? "rtl" : "ltr"}
            className={`text-2xl font-bold text-neutral`}
          >
            {t("orderSummary")}
          </p>
          {cartItems.length ? (
            <ul className="my-5 h-[400px] overflow-y-auto">
              {cartItems.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between p-5 border-b-2 border-b-neutral"
                >
                  <img className="w-20 rounded-md" src={pic || ""} alt="Cart" />
                  <div className="flex flex-col ml-2 w-[40%] items-start justify-start">
                    <p className="flex justify-start text-neutral items-center max-w-[70%] truncate">
                      {item.title}
                    </p>
                    <p className="text-neutral">
                      ${isFa ? formatNumberToPersian(item.price) : item.price}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div
                      className="text-gray-600"
                      onClick={() =>
                        handleDecreaseOneItem(
                          item.id,
                          item.title,
                          item.img,
                          item.quantity,
                          item.physical
                        )
                      }
                    >
                      <BiSolidDownArrow />
                    </div>
                    <p className="flex p-1 text-red-500">
                      {isFa
                        ? formatNumberToPersian(item.quantity)
                        : item.quantity}
                      x
                    </p>
                    <div
                      className="mr-5 text-gray-600"
                      onClick={() =>
                        handleAddOneItem(
                          item.id,
                          item.title,
                          item.img,
                          item.quantity,
                          item.physical
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
              <p>{t("code")}</p>
              <div className="flex">
                <div
                  className="mt-2 mr-3 text-primary"
                  onClick={() => setCount(count + 1)}
                >
                  <FaArrowsRotate />
                </div>
                <Input
                  ref={myRef}
                  type="text"
                  style={`border ${
                    isDarkTheme ? "bg-[#2c2c2c]" : "bg-base-100"
                  } p-2 rounded-md w-[130px] h-8 focus:border-primary border-neutral focus:border-2 focus:outline-none placeholder:text-neutral text-neutral`}
                  placeHolder={t("code")}
                  required={false}
                />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p>{t("subTotal")}</p>
              <p>${isFa ? formatNumberToPersian(price) : price}</p>
            </div>

            {includesPhysical && (
              <div className="flex justify-between items-center">
                <p>{t("shipping")}</p>
                <p>
                  $
                  {isFa
                    ? formatNumberToPersian(shippingMethod)
                    : shippingMethod}
                </p>
              </div>
            )}
            <div className="flex justify-between items-center pt-2 mt-5 text-xl font-bold border-t-2 border-primary">
              <p>{t("orderTotal")}</p>
              <p>
                $
                {myRef.current && myRef.current.value === "off"
                  ? isFa
                    ? formatNumberToPersian(
                        shippingMethod +
                          price -
                          (shippingMethod + price) * (10 / 100)
                      )
                    : shippingMethod +
                      price -
                      (shippingMethod + price) * (10 / 100)
                  : isFa
                  ? formatNumberToPersian(shippingMethod + price)
                  : shippingMethod + price}
              </p>
            </div>
          </div>
        </Container>
        <Container
          dir="ltr"
          style="relative lg:ml-[5%] mt-[5%] rounded-md lg:w-[55%] lg:h-[45%] p-10 text-neutral"
        >
          <div className="flex flex-col">
            <p className="text-3xl font-bold">{t("billingInfo")}</p>
            <p className="mt-5">{t("underBillingInfo")}</p>
          </div>
          <form action="" className="flex flex-col mt-10 w-full">
            <div className="flex flex-col md:flex-row gap-[20px] md:gap-[50px] mt-5">
              <div className="flex gap-[20px]">
                <label
                  htmlFor="cryptoTrans"
                  className={`relative rounded-md ${
                    selectedPayment === "cryptoTrans"
                      ? "border-2 border-primary shadow-lg"
                      : "border-2 border-neutral"
                  }`}
                >
                  <Input
                    id="cryptoTrans"
                    type="radio"
                    name="trans"
                    style="hidden"
                    defaultChecked={selectedPayment === "cryptoTrans"}
                    onChange={() => handleSelectPayment("cryptoTrans")}
                    required
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
                      ? "border-2 border-primary shadow-lg"
                      : "border-2 border-neutral"
                  }`}
                >
                  <Input
                    id="BMTrans"
                    type="radio"
                    name="trans"
                    style="hidden"
                    defaultChecked={selectedPayment === "BMTrans"}
                    onChange={() => handleSelectPayment("BMTrans")}
                    required
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
                      ? "border-2 border-primary shadow-lg"
                      : "border-2 border-neutral"
                  }`}
                >
                  <Input
                    id="zarinPalTrans"
                    type="radio"
                    name="trans"
                    style="hidden"
                    defaultChecked={selectedPayment === "zarinPalTrans"}
                    onChange={() => handleSelectPayment("zarinPalTrans")}
                    required
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
                      ? "border-2 border-primary shadow-lg"
                      : "border-2 border-neutral"
                  }`}
                >
                  <Input
                    id="paypalTrans"
                    type="radio"
                    name="trans"
                    style="hidden"
                    defaultChecked={selectedPayment === "paypalTrans"}
                    onChange={() => handleSelectPayment("paypalTrans")}
                    required
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
                    <p
                      dir={isFa ? "rtl" : "ltr"}
                      className="mb-5 text-xl font-bold"
                    >
                      {t("billingAddress")}
                    </p>
                    <div className="flex gap-5">
                      <div className="flex flex-col">
                        <label className="mb-2 text-sm" htmlFor="lastName">
                          {t("lastname")}
                        </label>
                        <Input
                          id="lastName"
                          style="border pl-2 w-[165px] h-10 rounded-md mb-1 bg-base-100 border-neutral focus:border-primary focus:border-2 focus:outline-none placeholder:text-neutral"
                          type="text"
                          placeHolder={t("lastname")}
                          required
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="mb-2 text-sm" htmlFor="firstName">
                          {t("firstname")}
                        </label>
                        <Input
                          id="firstName"
                          style="border pl-2 w-[165px] h-10 rounded-md mb-1 bg-base-100 border-neutral focus:border-primary focus:border-2 focus:outline-none placeholder:text-neutral"
                          type="text"
                          placeHolder={t("firstname")}
                          required
                        />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label className="mb-2 text-sm" htmlFor="address">
                        {t("address")}
                      </label>
                      <Input
                        id="address"
                        style="border pl-2 w-[350px] h-10 rounded-md mb-1 bg-base-100 border-neutral focus:border-primary focus:border-2 focus:outline-none placeholder:text-neutral"
                        type="text"
                        placeHolder={t("address")}
                        required
                      />
                    </div>
                    <div className="flex gap-5">
                      <div className="flex flex-col">
                        <label className="mb-2 text-sm" htmlFor="city">
                          {t("city")}
                        </label>
                        <Input
                          id="city"
                          style="border pl-2 w-[165px] h-10 rounded-md mb-1 bg-base-100 border-neutral focus:border-primary focus:border-2 focus:outline-none placeholder:text-neutral"
                          type="text"
                          placeHolder={t("city")}
                          required
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="mb-2 text-sm" htmlFor="town">
                          {t("town")}
                        </label>
                        <Input
                          id="town"
                          style="border pl-2 w-[165px] h-10 rounded-md mb-1 bg-base-100 border-neutral focus:border-primary focus:border-2 focus:outline-none placeholder:text-neutral"
                          type="text"
                          placeHolder={t("town")}
                          required
                        />
                      </div>
                    </div>
                    <div className="flex gap-5">
                      <div className="flex flex-col">
                        <label className="mb-2 text-sm" htmlFor="zipCode">
                          {t("zipcode")}
                        </label>
                        <Input
                          id="zipCode"
                          style="border pl-2 w-[165px] h-10 rounded-md mb-1 bg-base-100 border-neutral focus:border-primary focus:border-2 focus:outline-none placeholder:text-neutral"
                          type="text"
                          placeHolder={t("zipcode")}
                          required
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="mb-2 text-sm" htmlFor="phone">
                          {t("phone")}
                        </label>
                        <Input
                          id="phone"
                          style="border pl-2 w-[165px] h-10 rounded-md mb-1 bg-base-100 border-neutral focus:border-primary focus:border-2 focus:outline-none placeholder:text-neutral"
                          type="text"
                          placeHolder={t("phone")}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <Container dir="ltr" style="">
                    <div className="flex flex-col mt-[5%] gap-2">
                      {includesPhysical && (
                        <>
                          <p
                            dir={isFa ? "rtl" : "ltr"}
                            className="text-xl font-bold"
                          >
                            {t("shippingMethod")}
                          </p>
                          <div className="flex gap-2">
                            <div className="flex flex-grow">
                              <label
                                htmlFor="pishtaz"
                                className={`relative rounded-md ${
                                  selectedShipping === "pishtaz"
                                    ? "border-2 border-primary shadow-lg"
                                    : "border-2 border-neutral"
                                }`}
                              >
                                <Input
                                  id="pishtaz"
                                  type="radio"
                                  name="shipping"
                                  style="hidden"
                                  defaultChecked={
                                    selectedShipping === "pishtaz"
                                  }
                                  onChange={() =>
                                    handleSelectShipping("pishtaz")
                                  }
                                  required={false}
                                />
                                <img
                                  src={PishtazPic}
                                  alt="Pishtaz"
                                  className="w-[170px] h-[100px] cursor-pointer rounded-md"
                                  onClick={() =>
                                    handleSelectShipping("pishtaz")
                                  }
                                />
                              </label>
                            </div>
                            <div className="flex flex-grow">
                              <label
                                htmlFor="tipax"
                                className={`relative rounded-md ${
                                  selectedShipping === "tipax"
                                    ? "border-2 border-primary shadow-lg"
                                    : "border-2 border-neutral"
                                }`}
                              >
                                <Input
                                  id="tipax"
                                  type="radio"
                                  name="shipping"
                                  style="hidden"
                                  defaultChecked={selectedShipping === "tipax"}
                                  onChange={() => handleSelectShipping("tipax")}
                                  required={false}
                                />
                                <img
                                  src={TipaxPic}
                                  alt="Tipax"
                                  className="w-[170px] h-[100px] cursor-pointer rounded-md"
                                  onClick={() => handleSelectShipping("tipax")}
                                />
                              </label>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                    <div dir={isFa ? "rtl" : "ltr"} className="relative mt-5">
                      <label htmlFor="textArea">{t("note")}</label>
                      <textarea
                        className="pl-2 mt-2 rounded-md border bg-base-100 border-neutral focus:border-primary focus:border-2 focus:outline-none placeholder:text-neutral"
                        name="text"
                        id="textArea"
                        cols={30}
                        rows={5}
                        placeholder={t("note")}
                      ></textarea>
                    </div>
                  </Container>
                </div>
                <Button
                  onClick={() => {}}
                  style="p-2 text-sm rounded-md bg-primary text-secondary hover:opacity-[0.9]"
                >
                  {t("checkout")}
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
