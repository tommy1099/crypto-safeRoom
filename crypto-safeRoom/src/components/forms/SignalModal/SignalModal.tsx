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
  showModal && modal.showModal();

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
            <div className="absolute top-0 right-0">
              {blur ? <p>Finished</p> : <p>Ongoing</p>}
            </div>
            <img className="w-full" src={img} alt="signal" />
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
