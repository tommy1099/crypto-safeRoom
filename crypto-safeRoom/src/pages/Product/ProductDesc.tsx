import { IProduct } from "../../Interfaces/Interfaces";
import { DropDown_normal } from "../../components/ui";

const ProductDesc = ({ type, general_info }: IProduct) => {
  console.log("general_info:", general_info);
  console.log("type:", type);

  return (
    <DropDown_normal name="سایز ها">
      {type === "Clothes" ? (
        <div
          dir="rtl"
          className="flex pr-10 border-2 border-primary rounded-xl p-4"
        >
          <div className="flex flex-col w-full">
            <ul className="gap-2 flex flex-col text-sm list-disc">
              <li>
                <p className="text-slate-500">قد:</p>
              </li>
              <li>
                <p className="text-slate-500">یقه تا آستین:</p>
              </li>
              <li>
                <p className="text-slate-500">زیربغل تا زیربغل:</p>
              </li>
              <li>
                <p className="text-slate-500">سایز:</p>
              </li>
            </ul>
          </div>

          <div className="flex flex-col w-full gap-2 text-sm">
            <p className="border-b">{general_info?.height} سانتی متر</p>
            <p className="border-b">
              {general_info?.collar_to_sleeve} سانتی متر
            </p>
            <p className="border-b">
              {general_info?.armpit_to_armpit} سانتی متر
            </p>
            <p className="border-b">{general_info?.size}</p>
          </div>
        </div>
      ) : type === "pants" ? (
        <div className="flex justify-around gap-2">
          <div className="flex flex-col gap-2">
            <p>قد: {general_info?.height}</p>
            <p>کمر: {general_info?.waist}</p>
            <p>کمر تا فاق: {general_info?.waist_to_crotch}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p>فاق تا ران: {general_info?.crotch_to_thigh}</p>

            <p>سایز: {general_info?.size}</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </DropDown_normal>
  );
};
export default ProductDesc;
