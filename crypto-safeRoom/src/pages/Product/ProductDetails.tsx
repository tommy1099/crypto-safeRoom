import { IProduct } from "../../Interfaces/Interfaces";
import { DropDown_normal } from "../../components/ui";
const ProductDetails = ({
  // type,
  // brand,
  // catagory,
  // waterproof,
  // water_resistance,
  // country,
  // color,
  // number_of_pockets,
  // damage,
  // texture,
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
    <DropDown_normal name="مشخصات">
      {type === "clothes" ? (
        <div className="flex items-end text-end justify-end gap-2 mb-6">
          <div className="flex flex-col w-full gap-2">
            <p className="border-b">80</p>
            <p className="border-b">البسه</p>
            <p className="border-b">کلمبیا</p>
            <p className="border-b">ورزشی</p>
            <p className="border-b">بله</p>
            <p className="border-b">بله</p>
            <p className="border-b">بریتیش</p>
            <p className="border-b">مشکی</p>
            <p className="border-b">5</p>
            <p className="border-b">خیر</p>
            <p className="border-b">گورتکس</p>
          </div>
          <div dir="rtl" className="flex flex-col mr-[15%] text-right">
            <ul className="list-disc flex flex-col w-32 gap-2 ">
              <li>
                <p className="text-slate-500 rtl">قد:</p>
              </li>
              <li>
                <p className="text-slate-500 rtl">نوع:</p>
              </li>
              <li>
                <p className="text-slate-500 rtl">برند:</p>
              </li>
              <li>
                <p className="text-slate-500 rtl">دسته بندی:</p>
              </li>
              <li>
                <p className="text-slate-500 rtl">ضدآب:</p>
              </li>
              <li>
                <p className="text-slate-500 rtl">آب گریز:</p>
              </li>
              <li>
                <p className="text-slate-500 rtl">کشور:</p>
              </li>
              <li>
                <p className="text-slate-500 rtl">رنگ:</p>
              </li>
              <li>
                <p className="text-slate-500 rtl">جیب:</p>
              </li>
              <li>
                <p className="text-slate-500 rtl">آسیب دیدگی:</p>
              </li>
              <li>
                <p className="text-slate-500 rtl">جنس:</p>
              </li>
            </ul>
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
export default ProductDetails;
