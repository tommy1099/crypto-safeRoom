import Container from "../Container/Container";
import pants from "../../../assets/img/hero/3990.jpg";
import tshirt from "../../../assets/img/hero/27734.jpg";
import windstopper from "../../../assets/img/hero/43270.jpg";
import jacket from "../../../assets/img/hero/athletes-walking-vibrant-multi-colored-jackets-outdoors-generated-by-ai_188544-40040.jpg";
const SuggestionCards = () => {
  return (
    <Container
      dir="ltr"
      style=" gap-5 flex flex-col md:flex-row items-center justify-center w-screen md:w-[70%] rounded-xl"
    >
      {/* <img className="object-cover"
      className="w-[300px] ml-[200px] -rotate-12"
      src={greenPants}
      alt=""
    /> */}
      <div className="flex gap-5 justify-between items-center">
        <div className="relative w-full h-full shadow-lg cursor-pointer  hover:shadow-2xl bg-base-100 image-full">
          <figure>
            <img
              className="object-cover rounded-xl brightness-50"
              src={windstopper}
              alt="windstopper"
            />
          </figure>
          <div className="flex absolute top-0 right-0 flex-col gap-3 p-5 text-right text-white">
            <h2 className="">بادگیر</h2>
            <p className="mr-5">
              If a dog chews shoes whose shoes does he choose?
            </p>
          </div>
        </div>
        <div className="relative w-full h-full shadow-lg cursor-pointer  hover:shadow-2xl bg-base-100 image-full">
          <figure>
            <img
              className="object-cover rounded-xl brightness-50"
              src={jacket}
              alt="شلوار"
            />
          </figure>
          <div className="flex absolute top-0 right-0 flex-col gap-3 p-5 text-right text-white">
            <h2 className="">شلوار</h2>
            <p className="mr-5">
              If a dog chews shoes whose shoes does he choose?
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between items-center">
        <div className="relative w-full h-full shadow-lg cursor-pointer  hover:shadow-2xl bg-base-100 image-full">
          <figure>
            <img
              className="object-cover rounded-xl brightness-50"
              src={tshirt}
              alt="tshirt"
            />
          </figure>
          <div className="flex absolute top-0 right-0 flex-col gap-3 p-5 text-right text-white">
            <h2 className="">تیشرت</h2>
            <p className="mr-5">
              If a dog chews shoes whose shoes does he choose?
            </p>
          </div>
        </div>
        <div className="relative w-full h-full shadow-lg cursor-pointer  hover:shadow-2xl bg-base-100 image-full">
          <figure>
            <img
              className="object-cover rounded-xl brightness-50"
              src={jacket}
              alt="jacket"
            />
          </figure>
          <div className="flex absolute top-0 right-0 flex-col gap-3 p-5 text-right text-white">
            <h2 className="">بارانی</h2>
            <p className="mr-5">
              If a dog chews shoes whose shoes does he choose?
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default SuggestionCards;
