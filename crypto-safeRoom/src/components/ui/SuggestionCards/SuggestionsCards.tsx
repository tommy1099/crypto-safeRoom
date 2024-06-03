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
      <div className="flex items-center justify-between gap-5">
        <div className=" w-full cursor-pointer hover:shadow-2xl h-full bg-base-100 shadow-lg image-full relative ">
          <figure>
            <img
              className="object-cover rounded-xl brightness-50"
              src={windstopper}
              alt="windstopper"
            />
          </figure>
          <div className="absolute top-0 right-0 flex flex-col text-right text-white p-5 gap-3">
            <h2 className="">بادگیر</h2>
            <p className="mr-5">
              If a dog chews shoes whose shoes does he choose?
            </p>
          </div>
        </div>
        <div className=" w-full cursor-pointer hover:shadow-2xl h-full bg-base-100 shadow-lg image-full relative ">
          <figure>
            <img
              className="object-cover rounded-xl brightness-50"
              src={jacket}
              alt="شلوار"
            />
          </figure>
          <div className="absolute top-0 right-0 flex flex-col text-right text-white p-5 gap-3">
            <h2 className="">شلوار</h2>
            <p className="mr-5">
              If a dog chews shoes whose shoes does he choose?
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-5">
        <div className=" w-full cursor-pointer hover:shadow-2xl h-full bg-base-100 shadow-lg image-full relative ">
          <figure>
            <img
              className="object-cover rounded-xl brightness-50"
              src={tshirt}
              alt="tshirt"
            />
          </figure>
          <div className="absolute top-0 right-0 flex flex-col text-right text-white p-5 gap-3">
            <h2 className="">تیشرت</h2>
            <p className="mr-5">
              If a dog chews shoes whose shoes does he choose?
            </p>
          </div>
        </div>
        <div className=" w-full cursor-pointer hover:shadow-2xl h-full bg-base-100 shadow-lg image-full relative ">
          <figure>
            <img
              className="object-cover rounded-xl brightness-50"
              src={jacket}
              alt="jacket"
            />
          </figure>
          <div className="absolute top-0 right-0 flex flex-col text-right text-white p-5 gap-3">
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
