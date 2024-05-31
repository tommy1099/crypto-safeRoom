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
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={pants} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={tshirt} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-5 p-5">
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={windstopper} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={jacket} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default SuggestionCards;
