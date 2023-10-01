import { IoMdCheckmarkCircle } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import { SignalModal } from "..";
interface Props extends React.PropsWithChildren {
  // getModal: () => void;
  state?: boolean;
  blur: boolean;
  id: number;
  expire: number;
  crypto: string;
  desc: {
    desc1: string;
    desc2: string;
    desc3: string;
  };
  src: string;
  tags: {
    tag1: string;
    tag2: string;
  };
}
const SignalCard = ({ blur, crypto, desc, src, tags, state }: Props) => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleState = () => {
    if (blur) {
      if (state) {
        return (
          <div className="absolute top-[10%] right-[10%]">
            <div className="text-green-500 text-[30px]">
              {" "}
              <IoMdCheckmarkCircle />
            </div>
          </div>
        );
      } else {
        return (
          <div className="absolute top-[10%] right-[10%]">
            <div className="text-red-500 text-[30px]">
              {" "}
              <ImCross />
            </div>
          </div>
        );
      }
    }
  };

  return (
    <div
      onClick={handleButtonClick}
      className="hover:border-pink-200 border-gray-800 border-2 rounded-2xl m-3s z-10 m-2"
    >
      <div
        className={`${
          blur ? " grayscale-[70%]" : ""
        } hover:cursor-pointer mb-[10%] card h-full w-full bg-base-100 image-full hover:shadow-xl`}
      >
        <figure>
          <img src={src} alt="Signal" />
        </figure>
        <div className="card-body">
          <h2 className={"card-title text-white inline-block"}>{crypto}</h2>
          {handleState()}
          <div className="my-[5%]">
            <p className="text-white text-[14px]">{desc.desc1}</p>
            <p className="text-white text-[14px]">{desc.desc2}</p>
            <p className="text-white text-[14px]">{desc.desc3}</p>
          </div>
          <div className="card-actions">
            <div className=" badge badge-outline ">{tags.tag1}</div>
            <div className=" badge badge-outline text-white">{tags.tag2}</div>
          </div>
        </div>
      </div>
      <SignalModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        img=""
        desc={`${desc.desc1} ${desc.desc2} ${desc.desc3} `}
        tags={tags}
        state={state}
        blur={blur}
        crypto={crypto}
      />
    </div>
  );
};

export default SignalCard;

import { IoMdCheckmarkCircle } from "react-icons/io";
import { ImCross } from "react-icons/im";
interface Props {
  showModal: boolean;
  handleCloseModal: () => void;
  img: string;
  desc: string;
  tags: {
    tag1: string;
    tag2: string;
  };
  state?: boolean;
  blur: boolean;
  crypto: string;
}
const SignalModal = ({
  showModal,
  handleCloseModal,
  img,
  desc,
  tags,
  state,
  blur,
  crypto,
}: Props) => {
  if (blur) {
    if (state) {
      return (
        <div className="absolute top-[10%] right-[10%]">
          <div className="text-green-500 text-[30px]">
            {" "}
            <IoMdCheckmarkCircle />
          </div>
        </div>
      );
    } else {
      return (
        <div className="absolute top-[10%] right-[10%]">
          <div className="text-red-500 text-[30px]">
            {" "}
            <ImCross />
          </div>
        </div>
      );
    }
  }
  const modal = document.getElementById("my_modal_3") as HTMLDialogElement;
  const handleClose = () => {
    handleCloseModal();
  };
  if (showModal) {
    modal.showModal();
    modal.addEventListener("close", handleClose);
  } else {
    modal.removeEventListener("close", handleClose);
    modal.close();
  }
  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button
            onClick={handleClose}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
        </form>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src={img} alt="signal" />
            <div className="absolute top-0 right-0">
              {blur ? <p>Finished</p> : <p>Ongoing</p>}
            </div>
          </figure>
          <div className="card-body">
            <h2 className="card-title">{crypto}</h2>
            <p>{desc}</p>
            <div className=" badge badge-outline ">{tags.tag1}</div>
            <div className=" badge badge-outline text-white">{tags.tag2}</div>
          </div>
        </div>
      </div>
    </dialog>
  );
};
export default SignalModal;
