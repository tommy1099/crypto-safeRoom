import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../Store/Store";
import { NavBar, Footer } from "../../components/ui";
import { ScrollToTopIcon } from "../../components/forms";

import { useTranslation } from "react-i18next";

import Modal from "../../components/forms/Modal/Modal";
import { orders } from "../../Interfaces/Interfaces";
import CheckoutSummary from "./CheckoutSummary";
import CheckoutForm from "./CheckoutForm";
const Checkout = () => {
  const { t } = useTranslation();

  const cartItems = useSelector((state: RootState) => state.cartList.list);
  const [, setIncludesPhysical] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [newOrder] = useState<orders>();
  const [shippingPrice] = useState(0);
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const desc = {
    desc1: "alksdjlkajsdajwdlkasjdasidoqw",
    desc2: "aisudhasdasd54asdasdaiusdhasd",
    desc3: "asdhjahsdjahsdiqwuhdpwdhhambn",
  };
  const tags = {
    tag1: "you can see this page again by clicking on the order in your profile",
    tag2: "after your time ran out your order will be dismissed",
  };
  const tpPrices = {
    tp1Price: "",
    tp2Price: "",
    tp3Price: "",
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
  useEffect(() => {
    const includesPhysical = cartItems.some((item) => item.physical === true);
    setIncludesPhysical(includesPhysical);
  }, [cartItems]);

  return (
    <div className="pt-[10%]">
      <NavBar />

      <div dir="" className="flex justify-center">
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
        physical={false} //doest matter
        tpPrices={tpPrices} //doest matter
        entryPoint={""} //doest matter
        alertDesc={""} //doest matter
        children={<></>} //doest matter
        price={newOrder?.totalPrice}
        id={newOrder?._id || ""}
        type={"checkout"}
        showModal={showModal}
        handleClose={handleCloseModal}
        img={""}
        desc={desc}
        tags={tags}
        crypto={""} //doest matter
        title={newOrder?._id}
      />
    </div>
  );
};
export default Checkout;
