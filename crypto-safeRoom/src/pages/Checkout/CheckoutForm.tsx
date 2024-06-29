import { useState } from "react";
import { Container } from "..";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Store/Store";
import MellatPic from "../../assets/img/Mellat.jpg";
import ZarinPalPic from "../../assets/img/zarinPal.png";
import PishtazPic from "../../assets/img/pishtaz.jpeg";
import TipaxPic from "../../assets/img/tipax.jpeg";
import Cookies from "js-cookie";
import { resetShippingCart } from "@/Store/CartListReducer";
import { orders } from "@/Interfaces/Interfaces";
import PaymentSection from "./CheckoutPeymentSelection";
import CheckoutShippingOption from "./CheckoutShippingOption";

const CheckoutForm = () => {
  const userData = useSelector((state: RootState) => state.user);
  const accessToken = Cookies.get("accessToken");
  const abortController = new AbortController();
  const cartItems = useSelector((state: RootState) => state.cartList.list);
  const [selectedShipping, setSelectedShipping] = useState("");
  const [shippingPrice, setShippingPrice] = useState(0);
  const { price, discount } = useSelector((state: RootState) => state.Price);
  const handleSelectPayment = (value: string) => setSelectedPayment(value);
  const [selectedPayment, setSelectedPayment] = useState("");
  const [newOrder, setNewOrder] = useState<orders>();
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const handleSelectShipping = (value: string) => {
    setSelectedShipping(value);

    setShippingPrice(value === "tipax" ? 15 : 10);
  };
  const [formDataState, setFormDataState] = useState({
    firstname: "",
    lastname: "",
    country: "ایران/Iran",
    city: "",
    town: "",
    zipCode: "",
    address: "",
    phone: "",
    username: userData.username,
    // userId: "",
    // orderDate: null,
    // state: false,
    method: "",
    products: "",
    totalPrice: "",
    userNote: "",
  });
  const handleOnChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormDataState((prevData) => {
      return {
        ...prevData,
        products: JSON.stringify(cartItems),
        totalPrice: String(price - discount + shippingPrice),
        [name]: value,
      };
    });
  };
  const handleCheckout = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (cartItems.length <= 0) return;

    try {
      const formData = new FormData();
      const productsJson = formDataState.products;
      formData.append("method", selectedPayment);
      formData.append("selectedShipping", selectedShipping);
      formData.append("firstname", formDataState.firstname);
      formData.append("lastname", formDataState.lastname);
      formData.append("country", formDataState.country);
      formData.append("city", formDataState.city);
      formData.append("zipCode", formDataState.zipCode);
      formData.append("address", formDataState.address);
      formData.append("phone", formDataState.phone);
      formData.append("username", formDataState.username);
      formData.append("products", productsJson);
      formData.append("totalPrice", formDataState.totalPrice);
      formData.append("userNote", formDataState.userNote);
      console.log("FormData:", formData);
      const response = await fetch(`http://localhost:3000/orders/new`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData, //sending the form data to the backend
      });

      if (response.ok) {
        const data = await response.json();
        console.log("New order created:", data);
        setNewOrder(data.order);
        dispatch(resetShippingCart());
        setShowModal(true);
      } else {
        console.error("Error creating new order");
      }
    } catch (error) {
      console.error("Error creating new order:", error);
    }

    abortController.abort();
  };
  return (
    <Container
      dir="ltr"
      style="relative flex rounded-md lg:w-[55%] lg:h-[45%]  justify-center items-center text-neutral "
    >
      <form
        onSubmit={handleCheckout}
        action=""
        className="flex  flex-col justify-center text-right items-end"
      >
        <div className="flex border-b border-grey-300 pb-5">
          <div className="flex flex-col ">
            <div className="flex flex-col gap-20 md:flex-row">
              <div>
                <p dir={"rtl"} className="mb-5 text-xl font-bold">
                  {"صورت حساب و حمل و نقل"}
                </p>
                <div className="flex gap-5">
                  <div className="flex flex-col">
                    <label className="mb-2 text-sm" htmlFor="lastname">
                      {"نام خانوادگی"}
                    </label>
                    <input
                      dir="rtl"
                      id="lastname"
                      name="lastname"
                      className="border pl-2 h-10 rounded-md mb-1 bg-base-100 border-neutral focus:border-primary focus:border-2 focus:outline-none placeholder:text-neutral"
                      type="text"
                      placeholder={""}
                      required
                      onChange={handleOnChange}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-2 text-sm" htmlFor="firstname">
                      {"نام"}
                    </label>
                    <input
                      dir="rtl"
                      id="firstname"
                      name="firstname"
                      className="border pl-2  h-10 rounded-md mb-1 bg-base-100 border-neutral focus:border-primary focus:border-2 focus:outline-none placeholder:text-neutral"
                      type="text"
                      placeholder={""}
                      required
                      onChange={handleOnChange}
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="mb-2 text-sm" htmlFor="address">
                    {"آدرس"}
                  </label>
                  <input
                    dir="rtl"
                    id="address"
                    name="address"
                    className="border pl-2  h-10 rounded-md mb-1 bg-base-100 border-neutral focus:border-primary focus:border-2 focus:outline-none placeholder:text-neutral"
                    type="text"
                    placeholder={""}
                    required
                    onChange={handleOnChange}
                  />
                </div>
                <div className="flex gap-5">
                  <div className="flex flex-col">
                    <label className="mb-2 text-sm" htmlFor="city">
                      {"شهر"}
                    </label>
                    <input
                      dir="rtl"
                      id="city"
                      name="city"
                      className="border pl-2  h-10 rounded-md mb-1 bg-base-100 border-neutral focus:border-primary focus:border-2 focus:outline-none placeholder:text-neutral"
                      type="text"
                      placeholder={""}
                      required
                      onChange={handleOnChange}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-2 text-sm" htmlFor="town">
                      {"استان"}
                    </label>
                    <input
                      dir="rtl"
                      id="town"
                      name="town"
                      className="border pl-2  h-10 rounded-md mb-1 bg-base-100 border-neutral focus:border-primary focus:border-2 focus:outline-none placeholder:text-neutral"
                      type="text"
                      placeholder={""}
                      required
                      onChange={handleOnChange}
                    />
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="flex flex-col">
                    <label className="mb-2 text-sm" htmlFor="zipCode">
                      {"کد پستی"}
                    </label>
                    <input
                      dir="rtl"
                      id="zipCode"
                      name="zipCode"
                      className="border pl-2  h-10 rounded-md mb-1 bg-base-100 border-neutral focus:border-primary focus:border-2 focus:outline-none placeholder:text-neutral"
                      type="text"
                      placeholder={""}
                      required
                      onChange={handleOnChange}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-2 text-sm" htmlFor="phone">
                      {"شماره تماس"}
                    </label>
                    <input
                      dir="rtl"
                      id="phone"
                      name="phone"
                      className="border pl-2  h-10 rounded-md mb-1 bg-base-100 border-neutral focus:border-primary focus:border-2 focus:outline-none placeholder:text-neutral"
                      type="text"
                      placeholder={""}
                      required
                      onChange={handleOnChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <button
              type="submit"
              className="p-2 text-sm rounded-md bg-primary text-secondary hover:opacity-[0.9]"
            >
              {"checkout"}
            </button> */}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <PaymentSection
            selectedPayment={selectedPayment}
            handleSelectPayment={handleSelectPayment}
          />
          <CheckoutShippingOption
            selectedShipping={selectedShipping}
            handleSelectShipping={handleSelectShipping}
          />
          <div dir={""} className="flex flex-col gap-2">
            <label htmlFor="userNote">{"توضیحات سفارش (اختیاری)"}</label>
            <textarea
              dir="rtl"
              className=" rounded-md border p-2 bg-base-100 border-neutral focus:border-primary focus:border-2 focus:outline-none placeholder:text-gray-400 placeholder:text-sm"
              name="userNote"
              id="userNote"
              cols={30}
              rows={5}
              placeholder={
                "یادداشت ها درباره سفارش شما، برای مثال نکان مهم درباره نحوه تحویل سفارش"
              }
              onChange={handleOnChange}
            ></textarea>
          </div>
        </div>
      </form>
    </Container>
  );
};
export default CheckoutForm;
