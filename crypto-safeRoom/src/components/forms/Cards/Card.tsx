import React, { useState } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { ImCross } from "react-icons/im";
import Modal from "../Modal/Modal";
import { useDispatch } from "react-redux";
import { addItem } from "../../../Store/CartListReducer";
import { Button } from "../../ui";
interface Props {
  type: string;
  state?: boolean;
  blur?: boolean;
  id: string;
  price?: number;
  expire?: number;
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
}: Props) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Function to render the state (Result) based on blur and state props
  const renderState = () => {
    if (blur) {
      return state ? (
        <div className="flex gap-2 text-green-500">
          <p>Result:</p>
          <div className="mt-1">
            {" "}
            <IoMdCheckmarkCircle />
          </div>
        </div>
      ) : (
        <div className="flex gap-2 text-red-500">
          <p>Result:</p>
          <div className="mt-1">
            {" "}
            <ImCross />
          </div>
        </div>
      );
    } else {
      return <div className="flex gap-2 text-yellow-400">NEW</div>;
    }
  };

  // Function to render the description based on desc prop
  const renderDescription = () => {
    return (
      <div id={id} className="my-[5%]">
        {desc?.desc1 && (
          <p
            className={`text-${
              type === "signals" ? "white" : "black"
            } text-[14px]`}
          >
            {desc.desc1}
          </p>
        )}
        {desc?.desc2 && (
          <p
            className={`text-${
              type === "signals" ? "white" : "black"
            } text-[14px]`}
          >
            {desc.desc2}
          </p>
        )}
        {desc?.desc3 && (
          <p
            className={`text-${
              type === "signals" ? "white" : "black"
            } text-[14px]`}
          >
            {desc.desc3}
          </p>
        )}
      </div>
    );
  };

  // Function to render tags based on tags prop and type
  const renderTags = () => {
    const tagClassName =
      type === "signals" ? "text-white" : "text-xs text-black min-h-[20px]";

    return (
      <div
        className={`card-actions ${
          type === "signals" ? "border-t" : ""
        } ${tagClassName}`}
      >
        {tags && tags.tag1 && <div>{tags.tag1}</div>}
        {tags && tags.tag2 && <div>{tags.tag2}</div>}
        {tags && tags.tag3 && <div>{tags.tag3}</div>}
        {tags && tags.tag4 && <div>{tags.tag4}</div>}
      </div>
    );
  };
  const handleAddToCartEvent = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    event.stopPropagation();
    if (title && id && price) {
      dispatch(addItem({ id, title, img, quantity: 0, price: price }));
    }
  };
  const handleAddToCart = (): void => {
    if (title && id && price) {
      dispatch(addItem({ id, title, img, quantity: 0, price: price }));
    }
  };
  return (
    <div
      key={id}
      onClick={handleShowModal}
      className={` ${
        type === "signals"
          ? "hover:border-gray-800 transition-all hover:shadow-xl p-2 border-gray-300 border-4 rounded-3xl m-3s m-2 shadow-sm bg-gray-800 overflow-hidden"
          : ""
      } ${
        type === "news"
          ? "hover:shadow-2xl transition-all rounded-sm m-2 shadow-md"
          : type === "products" || type === "tutorials"
          ? "hover:border-gray-800 transition-all hover:shadow-xl p-4 border-gray-300 border-4 rounded-3xl m-3s m-2 shadow-sm overflow-hidden"
          : ""
      }`}
    >
      <div className={`w-full h-[50%] hover:cursor-pointer card image-full`}>
        {type !== "signals" && (
          <figure>
            <img className="" src={img} alt="img" />
          </figure>
        )}
        <div className="flex flex-col">
          <h2
            className={`text-${
              type === "news" ? "black" : type === "signals" ? "white" : ""
            } text-xl font-bold block`}
          >
            {crypto || title}
          </h2>
          {type === "signals" && renderState()}
          {desc && renderDescription()}
          {tags && renderTags()}
          {type !== "signals" && type !== "news" && (
            <div className="">
              <div className="flex justify-between items-center">
                {price && (
                  <div className="mt-2 text-xl font-bold">{price}$</div>
                )}

                <Button
                  onClick={handleAddToCart}
                  onClickWithEvent={(
                    event: React.MouseEvent<HTMLButtonElement>
                  ) => handleAddToCartEvent(event)}
                  style=" transition-all text-xs p-[3%] mt-2 border-gray-800 border-2 hover:bg-gray-800 hover:text-gray-200 rounded-md text-gray-800"
                >
                  Add to cart
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Modal
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
    </div>
  );
};

export default Card;
