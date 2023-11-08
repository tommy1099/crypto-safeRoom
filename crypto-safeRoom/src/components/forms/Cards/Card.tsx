import React, { useState } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { ImCross } from "react-icons/im";
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
import { BiLineChartDown } from "react-icons/bi";
import { BsSignStop } from "react-icons/bs";
interface Props {
  type: string;
  state?: boolean;
  blur?: boolean;
  id: string;
  price?: number;
  vip?: boolean;
  crypto?: string;
  title?: string;
  desc?: {
    desc1: string;
    desc2?: string;
    desc3?: string;
  };
  img: string;
  tags?: {
    tag1: string;
    tag2?: string;
    tag3?: string;
    tag4?: string;
  };
  inStock?: boolean;
  tp: {
    tp1: boolean;
    tp2: boolean;
    tp3: boolean;
  };
}

const Card = ({
  price,
  id,
  blur,
  crypto,
  title,
  desc,
  img,
  tags,
  state,
  type,
  inStock,
  vip,
  tp,
}: Props) => {
  const isFa = useSelector((state: RootState) => state.lang.isFa);
  const user = useSelector((state: RootState) => state.user);
  const [errorAlert, setErrorAlert] = useState(false);
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    if (
      (user.plan === "VIP" && vip) ||
      (user.plan === "VIP" && !vip) ||
      (user.plan !== "VIP" && !vip) ||
      (user.plan !== "VIP" && vip && blur)
    ) {
      setShowModal(true);
    } else {
      setErrorAlert(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Function to render the state (Result) based on blur and state props
  const renderState = () => {
    if (blur) {
      return state ? (
        <div className="flex gap-2 text-green-500">
          <p>{t("result")}</p>
          <div className="mt-1">
            {" "}
            <IoMdCheckmarkCircle />
          </div>
        </div>
      ) : (
        <div className="flex gap-2 text-red-500">
          <p>{t("result")}</p>
          <div className="mt-1">
            {" "}
            <ImCross />
          </div>
        </div>
      );
    } else {
      return (
        <div
          className={`flex gap-2 text-primary ${
            !blur ? "w-[60px] border-primary" : ""
          }`}
        >
          {t("new")}
        </div>
      );
    }
  };
  // const renderDescription = (text: string, maxLength: number) => {
  //   return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  // };
  // Function to render the description based on desc prop
  const renderDescriptions = () => {
    const shouldFormatNumbers = type === "signals";

    return (
      <div id={id} className="my-[5%] p-1">
        {desc?.desc1 && (
          <div className="flex gap-1 items-center">
            <div className={`flex`}>
              {!blur && tp.tp1 ? (
                <div className="text-xl text-green-700">
                  <IoMdCheckmarkCircle />
                </div>
              ) : !blur && !tp.tp1 ? (
                <span className="loading loading-ring loading-md"></span>
              ) : blur && tp.tp1 ? (
                <div className="text-xl text-green-700">
                  <IoMdCheckmarkCircle />
                </div>
              ) : (
                <div className="text-red-700">
                  <ImCross />
                </div>
              )}
            </div>

            <p
              className={`${
                shouldFormatNumbers ? "" : "black"
              } text-[14px] md:text-[12px]`}
            >
              {t("tp1")}%
              {shouldFormatNumbers
                ? isFa
                  ? formatNumberToPersian(Number(desc.desc1))
                  : desc.desc1
                : desc.desc1}
            </p>
          </div>
        )}
        {desc?.desc2 && (
          <div className="flex gap-1 items-center">
            <div className={`flex`}>
              {!blur && tp.tp2 ? (
                <div className="text-xl text-green-700">
                  <IoMdCheckmarkCircle />
                </div>
              ) : !blur && !tp.tp2 ? (
                <span className="loading loading-ring loading-md"></span>
              ) : blur && tp.tp2 ? (
                <div className="text-xl text-green-700">
                  <IoMdCheckmarkCircle />
                </div>
              ) : (
                <div className="text-red-700">
                  <ImCross />
                </div>
              )}
            </div>
            <p
              className={`text-${
                shouldFormatNumbers ? "" : "black"
              } text-[14px] md:text-[12px]`}
            >
              {t("tp2")}%
              {shouldFormatNumbers
                ? isFa
                  ? formatNumberToPersian(Number(desc.desc2))
                  : desc.desc2
                : desc.desc2}
            </p>
          </div>
        )}
        {desc?.desc3 && (
          <div className="flex gap-1 items-center">
            <div className={"flex"}>
              {!blur && tp.tp3 ? (
                <div className="text-xl text-green-700">
                  <IoMdCheckmarkCircle />
                </div>
              ) : !blur && !tp.tp3 ? (
                <span className="loading loading-ring loading-md"></span>
              ) : blur && tp.tp3 ? (
                <div className="text-xl text-green-700">
                  <IoMdCheckmarkCircle />
                </div>
              ) : (
                <div className="text-red-700">
                  <ImCross />
                </div>
              )}
            </div>
            <p
              className={`text-${
                shouldFormatNumbers ? "" : "black"
              } text-[14px] md:text-[12px]`}
            >
              {t("tp3")}%
              {shouldFormatNumbers
                ? isFa
                  ? formatNumberToPersian(Number(desc.desc3))
                  : desc.desc3
                : desc.desc3}
            </p>
          </div>
        )}
      </div>
    );
  };

  // Function to render tags based on tags prop and type
  const renderTags = () => {
    const tagClassName =
      type === "signals" ? "flex flex-col" : "text-xs text-black min-h-[20px]";

    return (
      <div className={`flex gap-0 p-1 card-actions ${tagClassName}`}>
        {tags && tags.tag1 && (
          <div className="flex gap-1 items-center">
            <div
              className={`${
                user.plan !== "VIP" && vip && !blur
                  ? "opacity-0"
                  : "text-red-700"
              }`}
            >
              <BsSignStop />
            </div>
            <div className="text-[14px]">
              {type === "signals"
                ? `${t("stop")}%${
                    isFa ? formatNumberToPersian(Number(tags.tag1)) : tags.tag1
                  }`
                : `${tags.tag1}`}
            </div>
          </div>
        )}
        {tags && tags.tag2 && (
          <div className="flex gap-1 items-center">
            <div
              className={`${
                user.plan !== "VIP" && vip && !blur
                  ? "opacity-0"
                  : "text-blue-700"
              }`}
            >
              <BiLineChartDown />
            </div>
            <div className="text-[14px]">
              {t("sl")} {tags.tag2}
            </div>
          </div>
        )}
        {tags && tags.tag3 && <div>{tags.tag3}</div>}
        {tags && tags.tag4 && <div>{tags.tag4}</div>}
      </div>
    );
  };
  const handleAddToCartEvent = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    event.stopPropagation();
    if (title && id && price && img) {
      dispatch(addItem({ id, title, img, quantity: 0, price: price }));
    }
  };
  const handleAddToCart = (): void => {
    if (title && id && price && img) {
      dispatch(addItem({ id, title, img, quantity: 0, price: price }));
    }
  };

  const blurClass =
    user.plan !== "VIP" && vip && !blur
      ? "bg-gradient-to-b from-base-100 via-gray-700 to-gray-700"
      : "";
  const handleCloseAlert = () => {
    setErrorAlert(false);
  };
  return (
    <>
      {errorAlert && <ErrorAlert close={handleCloseAlert} />}

      <div
        key={id}
        onClick={handleShowModal}
        className={`card ${
          type === "signals"
            ? `transition-all  flex  text-neutral hover:shadow-xl p-2 border-neutral hover:border-primary border-4 rounded-3xl m-3s m-2 shadow-sm bg-base-100 overflow-hidden  ${blurClass}`
            : type === "news"
            ? "hover:shadow-2xl transition-all rounded-sm m-2 shadow-md"
            : type === "products" || type === "tutorials"
            ? `transition-all hover:border-primary hover:shadow-xl p-4 border-neutral border-4 rounded-3xl m-3s m-2 bg-base-100 shadow-sm overflow-hidden `
            : ""
        }`}
      >
        {user.plan !== "VIP" && vip && !blur && (
          <div className="flex absolute flex-col justify-center items-start z-[0] bottom-1 left-1">
            <div className="text-6xl text-primary">
              <AiFillLock />
            </div>
          </div>
        )}
        <div className={`w-full h-[50%] hover:cursor-pointer image-full`}>
          {type !== "signals" && (
            <figure>
              <img className="rounded-md" src={img} alt="img" />
            </figure>
          )}
          <div className="flex flex-col">
            <h2
              className={`text-${
                type === "news" ? "black" : type === "signals" ? "" : ""
              } text-xl p-1 font-bold block`}
            >
              <div className="flex gap-1 items-start">
                {crypto || title}
                {vip && (
                  <div className="text-2xl text-primary">
                    <AiFillStar />
                  </div>
                )}
              </div>
            </h2>
            {type === "signals" && renderState()}
            {desc && renderDescriptions()}
            {tags && renderTags()}
            {type !== "signals" && type !== "news" && (
              <div className="">
                <div className="flex justify-between items-center">
                  {price && (
                    <div className="mt-2 text-xl font-bold">{price}$</div>
                  )}
                  {inStock ? (
                    <Button
                      onClick={handleAddToCart}
                      onClickWithEvent={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => handleAddToCartEvent(event)}
                      style=" transition-all text-s p-[3%] mt-2 border-2 border-primary text-neutral hover:bg-primary hover:text-base-100 rounded-md"
                    >
                      Add to cart
                    </Button>
                  ) : (
                    "Out of Stock"
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        {user.plan !== "VIP" && vip && !blur ? (
          <></>
        ) : (
          <Modal
            children={renderState()}
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
