import { IBrandCardProps } from "../../../Interfaces/Interfaces";

const BrandsCard = ({ img }: IBrandCardProps) => {
  return (
    <span
      className={`relative rounded-2xl shadow-md h-[100px] w-[150px] bg-base-100`}
    >
      <img src={img} alt="" className="w-full h-full rounded-md object-cover" />
    </span>
  );
};
export default BrandsCard;
