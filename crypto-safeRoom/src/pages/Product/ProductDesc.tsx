import { IProduct } from "../../Interfaces/Interfaces";
import { DropDown_normal } from "../../components/ui";

const ProductDesc = ({
  type,
  height,
  collar_to_sleeve,
  armpit_to_armpit,
  waist,
  waist_to_crotch,
  crotch_to_thigh,
  size,
}: IProduct) => {
  return (
    <DropDown_normal name="سایز ها">
      {type === "clothes" ? (
        <div className="flex justify-around">
          <div className="flex flex-col">
            <p>قد: {height}</p>
            <p>یقه تا آستین: {collar_to_sleeve}</p>
          </div>
          <div className="flex flex-col">
            <p>زیربغل تا زیربغل: {armpit_to_armpit}</p>
            <p>سایز: {size}</p>
          </div>
        </div>
      ) : type === "pants" ? (
        <div className="flex justify-around">
          <div className="flex flex-col">
            <p>قد: {height}</p>
            <p>کمر: {waist}</p>
            <p>کمر تا فاق: {waist_to_crotch}</p>
          </div>
          <div className="flex flex-col">
            <p>فاق تا ران: {crotch_to_thigh}</p>

            <p>سایز: {size}</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </DropDown_normal>
  );
};
export default ProductDesc;
