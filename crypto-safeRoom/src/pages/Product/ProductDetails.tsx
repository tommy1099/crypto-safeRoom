import { IProduct } from "../../Interfaces/Interfaces";
import { DropDown_normal } from "../../components/ui";
const ProductDetails = ({ type, detailedInfo, texture }: IProduct) => {
  return (
    <DropDown_normal name="مشخصات">
      {type === "Clothes" ? (
        <div className="flex items-end text-end justify-end gap-2 mb-6 border-2 rounded-xl p-4 border-primary">
          <div className="flex flex-col w-full gap-2">
            <p className="border-b">{detailedInfo?.brand}</p>
            <p className="border-b">{detailedInfo?.category}</p>
            <p className="border-b">
              {detailedInfo?.waterproof ? "بله" : "خیر"}
            </p>
            <p className="border-b">
              {detailedInfo?.water_resistance ? "بله" : "خیر"}
            </p>
            <p className="border-b">{detailedInfo?.country}</p>
            <p className="border-b">{detailedInfo?.color}</p>
            <p className="border-b">{detailedInfo?.number_of_pockets}</p>
            <p className="border-b">{detailedInfo?.damage ? "بله" : "خیر"}</p>
            <p className="border-b">{texture}</p>
          </div>
          <div dir="rtl" className="flex flex-col mr-[15%] text-right">
            <ul className="list-disc flex flex-col w-32 gap-2 ">
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
        <div className="flex justify-around"></div>
      ) : (
        <></>
      )}
    </DropDown_normal>
  );
};
export default ProductDetails;
