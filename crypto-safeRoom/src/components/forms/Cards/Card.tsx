import { IProduct } from "../../../Interfaces/Interfaces";
// import { BsCartPlus } from "react-icons/bs";
const Card = ({ type, name, price, img }: IProduct) => {
  return (
    <div className="relative w-[150px] rounded-xl cursor-pointer hover:shadow-2xl md:w-[200px] bg-base-100 flex-shrink-0 shadow-md border-4 border-primary">
      <figure>
        {price?.off && (
          <div className="w-12 absolute top-2 right-2 text-xs badge badge-primary">
            تخفیف
          </div>
        )}
        {/* <div className="absolute top-4 left-4 cursor-pointer">
          <span className="text-primary text-3xl">
            <BsCartPlus />
          </span>
        </div> */}
        {/* </div> */}
        <img className="rounded-md" src={img} alt={type} />
      </figure>
      <div className=" p-2 whitespace-pre-wrap overflow-hidden overflow-ellipsis">
        <h2 className="text-primary text-sm">{name}</h2>
        {/* <div className="flex items-center justify-between text-center bottom-0"> */}
        <p className="flex gap-5 justify-center items-center text-center ">
          <h5 className="text-red-500">{price?.price_after}</h5>
          <h5 className="text-primary line-through">{price?.price_before}</h5>
        </p>
      </div>
    </div>
  );
};

export default Card;
