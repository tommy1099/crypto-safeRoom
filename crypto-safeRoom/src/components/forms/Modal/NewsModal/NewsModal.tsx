import { useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import LoremIpsum from "react-lorem-ipsum"; //remove
import { fullScreenToggle } from "../../../../Store/IsFullScreen";
import { useDispatch } from "react-redux";
interface Props {
  showModal: boolean;
  handleClose: () => void;
  img: string;
  desc: string;
  title: string;
}

const NewsModal = ({ showModal, handleClose, img, title }: Props) => {
  const dispatch = useDispatch();

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
        <div className="flex fixed inset-0 z-20 justify-center items-center bg-black bg-opacity-50">
          <div
            id="inner"
            className="overflow-y-auto bg-white lg:w-[80%] mt-[5%] h-[80%] p-6 rounded-lg shadow-lg"
          >
            <div className="flex justify-between mb-5">
              <h2 className="p-3 w-full text-3xl font-bold rounded-lg border-l-8 border-patternColors-red">
                {title}
              </h2>
              <div
                id="cross"
                className="flex w-[40px] mt-1 h-[40px] text-2xl p-2 bg-gray-300 rounded-full cursor-pointer"
              >
                <RxCross2 />
              </div>
            </div>
            <div className="mb-5">
              <img
                className="w-full h-[200px] object-cover"
                src={img}
                alt={title}
                onClick={handleImageClick}
              />
            </div>

            <p className="mb-4">{<LoremIpsum p={10} />}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsModal;
