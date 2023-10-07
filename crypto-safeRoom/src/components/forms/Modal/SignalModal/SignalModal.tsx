import { useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import LoremIpsum from "react-lorem-ipsum"; //remove
import { fullScreenToggle } from "../../../../Store/IsFullScreen";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../Store/Store";
interface Props {
  showModal: boolean;
  handleClose: () => void;
  img: string;
  desc: {
    desc1: string;
    desc2: string;
    desc3: string;
  };
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
  handleClose,
  img,
  desc,
  tags,
  // state,
  // blur,
  crypto,
}: Props) => {
  // const [isFullscreen, setIsFullscreen] = useState(false);
  const isFullscreen = useSelector(
    (state: RootState) => state.FullScreenToggleReducer.fullScreen
  );
  const dispatch = useDispatch();
  // const handleImageClick = () => {
  //   setIsFullscreen(!isFullscreen);
  // };
  const handleImageClick = () => {
    dispatch(fullScreenToggle());
  };
  const handleOuterClick = (event: MouseEvent) => {
    const outerElement = document.querySelector("#inner") as HTMLDivElement;

    if (outerElement.contains(event.target as Node)) {
      event.stopPropagation();
    } else {
      handleClose();
    }
  };
  const handleCrossClick = (event: MouseEvent) => {
    const outerElement = document.querySelector("#cross") as HTMLDivElement;

    if (outerElement.contains(event.target as Node)) {
      handleClose();
    }
  };
  useEffect(() => {
    if (showModal) {
      document.addEventListener("mousedown", handleOuterClick);
      document.addEventListener("mousedown", handleCrossClick);
    } else {
      document.removeEventListener("mousedown", handleOuterClick);
      document.removeEventListener("mousedown", handleCrossClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOuterClick);
      document.removeEventListener("mousedown", handleCrossClick);
    };
  }, [showModal, handleClose]);
  return (
    <>
      {console.log("showModal:", showModal)}
      {showModal && (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
          <div
            id="inner"
            className="bg-white lg:w-[40%] lg:mt-[5%] p-6 rounded-lg shadow-lg"
          >
            <div className="flex justify-between mb-5">
              <h2 className="text-xl bg-gray-300 rounded-full w-[130px] p-3 font-bold">
                {crypto}
              </h2>
              <div
                id="cross"
                className="flex w-[40px] mt-1 h-[40px] text-2xl p-2 bg-gray-300 rounded-full cursor-pointer"
              >
                <RxCross2 />
              </div>
            </div>
            <div className="">
              <p
                onClick={handleImageClick}
                className="fixed text-white text-2xl rounded-full p-3 bg-gray-500 left-[32%] top-[37%] lg:left-[44%] lg:top-[40%] cursor-pointer opacity-60 z-10"
              >
                Click to Open
              </p>
              <img
                className={` w-full h-64 object-cover blur-custom mb-4 cursor-pointer ${
                  isFullscreen
                    ? "fixed z-20 lg:top-[9%] lg:left-[0%] w-full h-[30%] left-[0%] top-[35%] lg:w-full lg:h-full blur-none"
                    : ""
                }`}
                src={img}
                alt={crypto}
                onClick={handleImageClick}
              />
            </div>

            <p className="mb-4">{<LoremIpsum avgWordsPerSentence={1} />}</p>
            <p className="text-patternColors-green">{desc.desc1}</p>
            <p className="text-patternColors-green">{desc.desc2}</p>
            <p className="text-patternColors-green">{desc.desc3}</p>
            <div className="flex space-x-2 mt-2">
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded">
                {tags.tag1}
              </span>
              <span className="bg-gray-200 text-red-500 px-2 py-1 rounded">
                {tags.tag2}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignalModal;
