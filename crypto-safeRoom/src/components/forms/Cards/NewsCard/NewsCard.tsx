import { NewsModal } from "../..";
import { useState } from "react";
interface Props extends React.PropsWithChildren {
  title: string;
  desc: string;
  src: string;
}
const NewsCard = ({ title, desc, src }: Props) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div onClick={handleShowModal}>
      <div className=" hover:shadow-xl rounded-sm m-2 shadow-md">
        <div
          className={` hover:cursor-pointer mb-[10%]  h-full w-full bg-base-100 `}
        >
          <figure>
            <img className="" src={src} alt="News" />
          </figure>
          <div className="p-2">
            <h2 className="text-2xl font-bold">{title}</h2>
            <div className="my-[5%]">
              <p className="text-sm">{desc}</p>
            </div>
          </div>
        </div>
      </div>
      <NewsModal
        showModal={showModal}
        handleClose={handleCloseModal}
        img={src}
        desc={desc}
        title={title}
      />
    </div>
  );
};

export default NewsCard;
