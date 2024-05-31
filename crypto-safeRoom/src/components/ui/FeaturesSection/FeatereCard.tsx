import { IFeatureCardProps } from "../../../Interfaces/Interfaces";

const FeatureCard = ({
  icon,
  title,
  description,
  place,
}: IFeatureCardProps) => {
  return (
    <span className="relative rounded-2xl shadow-2xl w-[200px] p-[6px] bg-base-100">
      <div
        className={`flex gap-2 ${
          place === "product" ? "flex-row text-right" : "flex-col"
        } justify-center text-center items-center pt-2`}
      >
        <div>
          <p>{title}</p>
          <p className="text-xs">{description}</p>
        </div>
        <div
          className={` ${
            place === "product" ? "text-[30px]" : "text-[40px]"
          } text-primary`}
        >
          {icon}
        </div>
      </div>
    </span>
  );
};
export default FeatureCard;
