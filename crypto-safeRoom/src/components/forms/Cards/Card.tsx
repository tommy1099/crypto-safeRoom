import React, { useState } from "react";
import Modal from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../../Store/CartListReducer";
import { Button } from "../../ui";
import { useTranslation } from "react-i18next";
import { formatNumberToPersian } from "../../../utils/NumberToFarsi/NumberToFarsi";
import { RootState } from "../../../Store/Store";
import "../../../styles/signalBorderAnimation.css";
import { ErrorAlert } from "..";
import { AiFillLock, AiFillStar } from "react-icons/ai";

import { StateComponent, TagsComponent, DescriptionsComponent } from ".";
import { CardProps } from "../../../Interfaces/Interfaces.ts";

const Card = ({
  tpPrices,
  entryPoint,
  alertDesc,
  state,
  price,
  id,
  blur,
  crypto,
  title,
  desc,
  img,
  tags,
  type,
  inStock,
  vip,
  tp,
  physical,
}: CardProps) => {
  const isDarkTheme = useSelector((state: RootState) => state.themeToggle.Dark);

  const isFa = useSelector((state: RootState) => state.lang.isFa);
  const user = useSelector((state: RootState) => state.user);
  const [errorAlert, setErrorAlert] = useState(false);
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    if (
      (user.plan.type === "VIP" && vip) ||
      (user.plan.type === "VIP" && !vip) ||
      (user.plan.type !== "VIP" && !vip) ||
      (user.plan.type !== "VIP" && vip && blur)
    ) {
      setShowModal(true);
    } else {
      setErrorAlert(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddToCartEvent = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    event.stopPropagation();
    if (title && id && price) {
      if (!user.email.confirm && window.location.pathname === "/plans") {
        setErrorAlert(true);
      } else {
        dispatch(
          addItem({
            id,
            title,
            img,
            quantity: 0,
            price: price,
            physical: physical,
          })
        );
      }
    }
  };
  const handleAddToCart = (): void => {
    if (title && id && price) {
      if (!user.email.confirm && window.location.pathname === "/plans") {
        setErrorAlert(true);
      } else {
        dispatch(
          addItem({
            id,
            title,
            img,
            quantity: 0,
            price: price,
            physical: physical,
          })
        );
      }
    }
  };

  const blurClass =
    user.plan.type !== "VIP" && vip && !blur
      ? "bg-gradient-to-b from-base-100 via-neutral to-neutral"
      : "";
  const handleCloseAlert = () => {
    setErrorAlert(false);
  };
  return (
    <>
      {errorAlert && window.location.pathname === "/signals" ? (
        <ErrorAlert close={handleCloseAlert} type="signals" />
      ) : errorAlert && window.location.pathname === "/plans" ? (
        <ErrorAlert close={handleCloseAlert} type="plans" />
      ) : (
        <></>
      )}

      <div
        onClick={handleShowModal}
        className={`card ${
          type === "signals"
            ? `transition-all  flex  text-neutral hover:shadow-xl p-2 border-neutral hover:border-primary border-4 rounded-3xl m-3s m-2 shadow-sm bg-base-100 overflow-hidden  ${blurClass}`
            : type === "news"
            ? "hover:shadow-2xl transition-all rounded-sm m-2 shadow-md"
            : type === "products" || type === "tutorials"
            ? `transition-all hover:border-primary hover:shadow-xl p-4 border-neutral border-4 rounded-3xl m-3s m-2 bg-base-100 shadow-sm overflow-hidden `
            : ` transition-all rounded-xl border-primary border-2 m-2 ${
                isDarkTheme ? "bg-[#2c2c2c]" : "bg-base-100"
              } p-10 z-[2] shadow-md h-[550px] w-full`
        }`}
      >
        {user.plan.type !== "VIP" && vip && !blur && (
          <div className="flex absolute flex-col justify-center items-start z-[0] bottom-1 left-1">
            <div className="text-6xl text-primary">
              <AiFillLock />
            </div>
          </div>
        )}
        <div
          className={`w-full h-[50%]  ${
            type !== "plans" && "hover:cursor-pointer"
          } image-full`}
        >
          {type !== "signals" && type !== "plans" && (
            <figure>
              <img className="rounded-md" src={img} alt="img" />
            </figure>
          )}
          <div className="flex flex-col justify-between">
            <h2 className={`block p-1 text-xl font-bold text-neutral`}>
              <div
                className={`flex gap-1 ${
                  type === "plans"
                    ? "items-center justify-center mb-[40px]"
                    : "items-start"
                }`}
              >
                {crypto || title}
                {vip && (
                  <div className="text-2xl text-primary">
                    <AiFillStar />
                  </div>
                )}
              </div>
            </h2>
            {type === "signals" && (
              <StateComponent blur={blur} state={state} t={t} />
            )}
            {desc && (
              <DescriptionsComponent
                vip={vip}
                id={id}
                type={type}
                desc={desc}
                t={t}
                tp={tp}
                formatNumberToPersian={formatNumberToPersian}
                isFa={isFa}
                blur={blur}
              />
            )}
            {tags && (
              <TagsComponent
                tags={tags}
                user={user}
                vip={vip}
                blur={blur}
                t={t}
                formatNumberToPersian={formatNumberToPersian}
                isFa={isFa}
                type={type}
              />
            )}
            {type !== "signals" && type !== "news" && (
              <div className="">
                <div
                  className={`flex justify-between items-center ${
                    type === "plans" && "flex-col gap-20 mt-[40px]"
                  }`}
                >
                  {price && (
                    <div className="mt-2 text-xl font-bold">
                      {isFa ? formatNumberToPersian(price) : price}$
                    </div>
                  )}
                  {inStock ? (
                    <Button
                      onClick={handleAddToCart}
                      onClickWithEvent={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => handleAddToCartEvent(event)}
                      style=" transition-all text-s p-[3%] mt-2 border-2 border-primary text-neutral hover:bg-primary hover:text-base-100 rounded-md"
                    >
                      {t("addToCart")}
                    </Button>
                  ) : (
                    "Out of Stock"
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        {(user.plan.type !== "VIP" && vip && !blur) || type === "plans" ? (
          <></>
        ) : (
          <Modal
            key=""
            physical={false}
            tpPrices={tpPrices}
            entryPoint={entryPoint}
            alertDesc={alertDesc}
            children={<StateComponent blur={blur} state={state} t={t} />}
            price={price}
            id={id}
            type={type}
            showModal={showModal}
            handleClose={handleCloseModal}
            img={img}
            desc={desc}
            tags={tags}
            crypto={crypto}
            title={title}
          />
        )}
      </div>
    </>
  );
};

export default Card;
