import { useState } from "react";

import { NavBar, Footer } from "../../components/ui";
import { ScrollToTopIcon } from "../../components/forms";

import Modal from "../../components/forms/Modal/Modal";
import { orders } from "../../Interfaces/Interfaces";
import CheckoutSummary from "./CheckoutSummary";
import CheckoutForm from "./CheckoutForm";
const Checkout = () => {
  const [showModal, setShowModal] = useState(false);
  const [newOrder] = useState<orders>();
  const [shippingPrice] = useState(0);
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // const handleDecreaseOneItem = (
  //   id: string,
  //   title: string,
  //   img: string | undefined,
  //   quantity: number,
  //   physical: boolean
  // ) => {
  //   dispatch(decreaseOne({ id, title, img, quantity, price, physical }));
  // };

  // const handleAddOneItem = (
  //   id: string,
  //   title: string,
  //   img: string | undefined,
  //   quantity: number,
  //   physical: boolean
  // ) => {
  //   dispatch(addItem({ id, title, img, quantity, price, physical }));
  // };
  //if cart includes physical item enable shipping methods

  return (
    <div className="pt-[10%]">
      <NavBar />

      <div dir="" className="flex gap-10 justify-center">
        <CheckoutSummary shippingPrice={shippingPrice} />
        <CheckoutForm />
        {/* <div className="flex flex-col">
          <p className="text-3xl font-bold">{t("billingInfo")}</p>
          <p className="mt-5">{t("underBillingInfo")}</p>
        </div> */}
      </div>
      <div className="mt-[10%] md:mt-[15%]">
        <Footer />
      </div>
      <div className="fixed left-0 top-[90%] m-5 ">
        <ScrollToTopIcon />
      </div>
      <Modal
        key=""
        price={newOrder?.totalPrice}
        id={newOrder?._id || ""}
        type={"checkout"}
        showModal={showModal}
        handleClose={handleCloseModal}
        img={""}
        title={newOrder?._id}
      />
    </div>
  );
};
export default Checkout;
