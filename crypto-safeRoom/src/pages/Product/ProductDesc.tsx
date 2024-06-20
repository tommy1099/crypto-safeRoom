import { IProduct } from "../../Interfaces/Interfaces";
import { DropDown_normal } from "../../components/ui";

const ProductDesc = ({ type, general_info }: IProduct) => {
  console.log("general_info:", general_info);
  console.log("type:", type);

  return (
    <DropDown_normal where="product" name="سایز ها">
      {type === "Clothes" ? (
        <div dir="rtl" className="flex p-4 pr-10 bg-gray-100 rounded-xl">
          <div className="flex flex-col w-full">
            <ul className="flex flex-col gap-2 text-sm list-disc">
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

          <div className="flex flex-col gap-2 w-full text-sm">
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
        <div className="flex gap-2 justify-around">
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
