import { Container } from "@/pages";
import tshirt from "../../../assets/img/hero/27734.jpg";
import windstopper from "../../../assets/img/hero/43270.jpg";
import jacket from "../../../assets/img/hero/athletes-walking-vibrant-multi-colored-jackets-outdoors-generated-by-ai_188544-40040.jpg";
const DiscountedCategoryCards = () => {
  return (
    <Container
      dir="ltr"
      style=" gap-5 flex flex-col md:flex-row items-center justify-center w-screen md:w-[70%] rounded-xl"
    >
      <div className="flex flex-col items-center justify-between gap-5">
        <div
          onClick={() => {}}
          className=" w-full cursor-pointer hover:shadow-2xl h-full bg-base-100 shadow-lg image-full relative overflow-hidden rounded-xl"
        >
          <figure className="object-cover   brightness-75  hover:scale-110 hover:brightness-50 transition-all">
            <img className="" src={tshirt} alt="tshirt" />
          </figure>
          <div
            dir="rtl"
            className="absolute bottom-2 right-2 justify-center items-center flex flex-col text-white p-5 gap-3"
          >
            <h2 className="text-[20px] border border-base-100 rounded-full px-3 py-1 bg-opacity-25 bg-base-100">
              تی شرت های با تخفیف
            </h2>
          </div>
        </div>
        <div
          onClick={() => {}}
          className=" w-full cursor-pointer hover:shadow-2xl h-full bg-base-100 shadow-lg image-full relative overflow-hidden rounded-xl"
        >
          <figure className="object-cover   brightness-75  hover:scale-110 hover:brightness-50 transition-all">
            <img className="" src={jacket} alt="tshirt" />
          </figure>
          <div
            dir="rtl"
            className="absolute bottom-2 right-2 justify-center items-center flex flex-col text-white p-5 gap-3"
          >
            <h2 className="text-[20px] border border-base-100 rounded-full px-3 py-1 bg-opacity-25 bg-base-100">
              بادگیر های با تخفیف
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-5">
        <div
          onClick={() => {}}
          className=" w-full cursor-pointer hover:shadow-2xl h-full bg-base-100 shadow-lg image-full relative overflow-hidden rounded-xl"
        >
          <figure className="object-cover   brightness-75  hover:scale-110 hover:brightness-50 transition-all">
            <img className="" src={tshirt} alt="tshirt" />
          </figure>
          <div
            dir="rtl"
            className="absolute bottom-2 right-2 justify-center items-center flex flex-col text-white p-5 gap-3"
          >
            <h2 className="text-[20px] border border-base-100 rounded-full px-3 py-1 bg-opacity-25 bg-base-100">
              شلوار های با تخفیف
            </h2>
          </div>
        </div>
        <div
          onClick={() => {}}
          className=" w-full cursor-pointer hover:shadow-2xl h-full bg-base-100 shadow-lg image-full relative overflow-hidden rounded-xl"
        >
          <figure className="object-cover   brightness-75  hover:scale-110 hover:brightness-50 transition-all">
            <img className="" src={windstopper} alt="tshirt" />
          </figure>
          <div
            dir="rtl"
            className="absolute bottom-2 right-2 justify-center items-center flex flex-col text-white p-5 gap-3"
          >
            <h2 className="text-[20px] border border-base-100 rounded-full px-3 py-1 bg-opacity-25 bg-base-100">
              وینداستاپر های با تخفیف
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-5">
        <div
          onClick={() => {}}
          className=" w-full cursor-pointer hover:shadow-2xl h-full bg-base-100 shadow-lg image-full relative overflow-hidden rounded-xl"
        >
          <figure className="object-cover   brightness-75  hover:scale-110 hover:brightness-50 transition-all">
            <img className="" src={tshirt} alt="tshirt" />
          </figure>
          <div
            dir="rtl"
            className="absolute bottom-2 right-2 justify-center items-center flex flex-col text-white p-5 gap-3"
          >
            <h2 className="text-[20px] border border-base-100 rounded-full px-3 py-1 bg-opacity-25 bg-base-100">
              ورزشی های با تخفیف
            </h2>
          </div>
        </div>
        <div
          onClick={() => {}}
          className=" w-full cursor-pointer hover:shadow-2xl h-full bg-base-100 shadow-lg image-full relative overflow-hidden rounded-xl"
        >
          <figure className="object-cover  brightness-75  hover:scale-110 hover:brightness-50 transition-all">
            <img className="" src={tshirt} alt="tshirt" />
          </figure>
          <div
            dir="rtl"
            className="absolute bottom-2 right-2 justify-center items-center flex flex-col text-white p-5 gap-3"
          >
            <h2 className="text-[20px] border border-base-100 rounded-full px-3 py-1 bg-opacity-25 bg-base-100">
              غیر ورزشی های با تخفیف
            </h2>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default DiscountedCategoryCards;
