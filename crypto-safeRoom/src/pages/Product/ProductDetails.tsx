import { IProduct } from "../../Interfaces/Interfaces";
import { DropDown_normal } from "../../components/ui";
const ProductDetails = ({
  type,
  detailedInfo,
  texture,
  general_info,
}: IProduct) => {
  return (
    <DropDown_normal where="product" name="مشخصات">
      {type === "Clothes" ? (
        <div className="flex gap-2 justify-end items-end p-4 py-5 mb-6 bg-gray-100 rounded-xl text-end">
          <div className="flex flex-col gap-2 w-full">
            <p className="border-b">{detailedInfo?.brand}</p>
            <p className="border-b">{general_info?.kind}</p>
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
            <ul className="flex flex-col gap-2 w-32 list-disc">
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
