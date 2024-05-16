import { Container } from "..";
import dummyImg from "../../assets/img/404-error-with-landscape-concept-illustration_114360-7898.avif";
const ProductPictures = () => {
  return (
    <div className="flex flex-col gap-2 mt-32">
      <img
        className="w-[700px] h-[400px] rounded-xl border-2 border-primary"
        src={dummyImg}
        alt=""
      />
      <Container style="flex gap-2 overflow-x-auto w-[550px] h-[110px]" dir="">
        <img
          className="w-44 rounded-xl border-2 border-primary"
          src={dummyImg}
          alt=""
        />
        <img
          className="w-44 rounded-xl border-2 border-primary"
          src={dummyImg}
          alt=""
        />
        <img
          className="w-44 rounded-xl border-2 border-primary"
          src={dummyImg}
          alt=""
        />
      </Container>
    </div>
  );
};
export default ProductPictures;
