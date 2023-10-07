import { IoMdCheckmarkCircle } from "react-icons/io";
import { ImCross } from "react-icons/im";
// import { useDispatch } from "react-redux";
// import {
//   failedSignal,
//   successfulSignal,
//   reset,
// } from "../../../../Store/SignalStatsTracker";
// import { useEffect } from "react";
import { useState } from "react";
import { SignalModal } from "../..";
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
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleState = () => {
    if (blur) {
      if (state) {
        return (
          <div className="">
            <div className="text-green-500 flex gap-2">
              <p>Result:</p>

              <div className="mt-1">
                <IoMdCheckmarkCircle />
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className="">
            <div className="text-red-500 flex gap-2">
              <p>Result:</p>
              <div className="mt-1">
                <ImCross />
              </div>
            </div>
          </div>
        );
      }
    } else {
      return (
        <div className="text-yellow-400 flex gap-2">
          <p>Result: Active</p>
        </div>
      );
    }
  };

  return (
    <div
      onClick={handleShowModal}
      className="hover:border-patternColors-red hover:shadow-xl p-4 border-gray-300 border-4 rounded-3xl m-3s m-2 shadow-sm bg-gray-800 overflow-hidden"
    >
      <div
        className={` hover:cursor-pointer mb-[10%] card image-full h-full w-full  `}
      >
        <div className="card-body ">
          <h2 className={"card-title text-white text-2xl block"}>{crypto}</h2>
          {handleState()}
          <div className="my-[5%]">
            <p className="text-white text-[14px]">{desc.desc1}</p>
            <p className="text-white text-[14px]">{desc.desc2}</p>
            <p className="text-white text-[14px]">{desc.desc3}</p>
          </div>
          <div className="card-actions">
            <div className=" border-t text-white">{tags.tag1}</div>
            <div className=" border-b text-white">{tags.tag2}</div>
          </div>
        </div>
      </div>
      <SignalModal
        showModal={showModal}
        handleClose={handleCloseModal}
        img={src}
        desc={desc}
        tags={tags}
        state={state}
        blur={blur}
        crypto={crypto}
      />
    </div>
  );
};

export default SignalCard;
