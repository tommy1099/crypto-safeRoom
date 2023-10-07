import React, { useState } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { ImCross } from "react-icons/im";
import Modal from "../Modal/Modal";
import uuid from "react-uuid";
// Define the props for the Card component
interface Props {
  type: string;
  state?: boolean;
  blur?: boolean;
  id?: string;
  expire?: number;
  crypto?: string;
  title?: string;
  desc?: {
    desc1: string;
    desc2?: string;
    desc3?: string;
  };
  imgSrc: string;
  tags?: {
    tag1: string;
    tag2?: string;
    tag3?: string;
    tag4?: string;
  };
}

const Card = ({
  id,
  blur,
  crypto,
  title,
  desc,
  imgSrc,
  tags,
  state,
  type,
}: Props) => {
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
          <IoMdCheckmarkCircle />
        </div>
      ) : (
        <div className="flex gap-2 text-red-500">
          <p>Result:</p>
          <ImCross />
        </div>
      );
    } else {
      return <div className="flex gap-2 text-yellow-400">NEW</div>;
    }
  };

  // Function to render the description based on desc prop
  const renderDescription = () => {
    return (
      <div className="my-[5%]">
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
      type === "signals" ? "text-white" : "text-xs text-black";

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
          ? "hover:border-patternColors-red transition-all hover:shadow-xl p-4 border-gray-300 border-4 rounded-3xl m-3s m-2 shadow-sm overflow-hidden"
          : ""
      }`}
    >
      <div
        className={`hover:cursor-pointer mb-[10%] card image-full h-full w-full`}
      >
        {type !== "signals" && (
          <figure>
            <img className="" src={imgSrc} alt="img" />
          </figure>
        )}
        <div className="p-2">
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
        </div>
      </div>
      <Modal
        id={uuid()}
        type={type}
        showModal={showModal}
        handleClose={handleCloseModal}
        img={imgSrc}
        desc={desc}
        tags={tags}
        crypto={crypto}
        title={title}
      />
    </div>
  );
};

export default Card;
