import Container from "../Container/Container";
import pants from "../../../assets/img/hero/3990.jpg";
import tshirt from "../../../assets/img/hero/27734.jpg";
import windstopper from "../../../assets/img/hero/43270.jpg";
import jacket from "../../../assets/img/hero/athletes-walking-vibrant-multi-colored-jackets-outdoors-generated-by-ai_188544-40040.jpg";
const SuggestionCards = () => {
  return (
    <Container
      dir="ltr"
      style="  flex flex-col md:flex-row items-center justify-center w-screen md:w-[70%] rounded-xl"
    >
      {/* <img
      className="w-[300px] ml-[200px] -rotate-12"
      src={greenPants}
      alt=""
    /> */}
      <div className="flex  flex-col items-center justify-between gap-5">
        <span
          className={` relative rounded-2xl shadow-md md:h-[130px] h-[100px] w-[360px] md:w-[350px] bg-base-100`}
        >
          <img
            src={pants}
            alt=""
            className="w-full h-full rounded-md object-cover"
          />
        </span>
        <span
          className={`relative rounded-2xl shadow-md md:h-[130px] h-[100px] w-[360px] md:w-[350px] bg-base-100`}
        >
          <img
            src={tshirt}
            alt=""
            className="w-full h-full rounded-md object-cover"
          />
        </span>
      </div>
      <div className="flex flex-col items-center justify-between gap-5 p-5">
        <span
          className={`relative rounded-2xl shadow-md md:h-[130px] h-[100px] w-[360px] md:w-[350px] bg-base-100`}
        >
          <img
            src={windstopper}
            alt=""
            className="w-full h-full rounded-md object-cover"
          />
        </span>
        <span
          className={`relative rounded-2xl shadow-md md:h-[130px] h-[100px] w-[360px] md:w-[350px] bg-base-100`}
        >
          <img
            src={jacket}
            alt=""
            className="w-full h-full rounded-md object-cover"
          />
        </span>
      </div>
      {/* <img
      className="w-[500px] -ml-[55px] rotate-12"
      src={greenShit}
      alt=""
    /> */}
    </Container>
  );
};
export default SuggestionCards;
