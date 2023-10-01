import { IoMdCheckmarkCircle } from "react-icons/io";
import { ImCross } from "react-icons/im";
// import { useDispatch } from "react-redux";
// import {
//   failedSignal,
//   successfulSignal,
//   reset,
// } from "../../../../Store/SignalStatsTracker";
// import { useEffect } from "react";
// import { useState } from "react";
// import { SignalModal } from "../..";
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
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if (blur && state) dispatch(successfulSignal());
  //   else if (blur && !state) {
  //     dispatch(failedSignal());
  //   }
  //   // dispatch(reset());
  // }, [state, dispatch, blur]);
  // const [showModal, setShowModal] = useState(false);

  // const handleButtonClick = () => {
  //   setShowModal(true);
  // };

  // const handleCloseModal = () => {
  //   setShowModal(false);
  // };
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
      // onClick={handleButtonClick}
      className="hover:border-gray-700 border-gray-300 border-4 rounded-3xl m-3s m-2 shadow-sm"
    >
      <div
        className={`${
          blur ? " grayscale-[70%]" : ""
        } hover:cursor-pointer mb-[10%] card image-full hover:shadow-xl h-full w-full  `}
      >
        <figure>
          <img className="overflow-hidden" src={src} alt="Signal" />
        </figure>
        <div className="card-body">
          <h2 className={"card-title text-black inline-block"}>{crypto}</h2>
          {handleState()}
          <div className="my-[5%]">
            <p className="text-black text-[14px]">{desc.desc1}</p>
            <p className="text-black text-[14px]">{desc.desc2}</p>
            <p className="text-black text-[14px]">{desc.desc3}</p>
          </div>
          <div className="card-actions">
            <div className=" badge badge-outline text-black">{tags.tag1}</div>
            <div className=" badge badge-outline text-black">{tags.tag2}</div>
          </div>
        </div>
      </div>
      {/* <SignalModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        img={Pic}
        desc={`${desc.desc1} ${desc.desc2} ${desc.desc3} `}
        tags={tags}
        state={state}
        blur={blur}
        crypto={crypto}
      /> */}
    </div>
  );
};

export default SignalCard;
