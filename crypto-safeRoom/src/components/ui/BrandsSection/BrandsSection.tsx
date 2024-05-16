import Container from "../Container/Container";
import BrandsCard from "./BrandCard";
import quechua from "../../../assets/img/logos/dequ22p2_frise-13.jpg";
import timberland from "../../../assets/img/logos/images.png";
import columbia from "../../../assets/img/logos/4c01da3c0a75404bf73f430a792edd98.png";
import marmot from "../../../assets/img/logos/images-marmot.png";
import northface from "../../../assets/img/logos/png-transparent-the-north-face-decal-sticker-brand-logo-north-face-text-retail.png";
import outdoor from "../../../assets/img/logos/Outdoor-Research-Logo-Square.png";
const BrandsSection = () => {
  return (
    <Container
      dir="ltr"
      style=" flex bg-primary flex-row items-center justify-center  w-screen md:w-[70%] rounded-xl gap-5 py-6"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-5 ">
        <BrandsCard img={quechua} />
        <BrandsCard img={timberland} />
        <BrandsCard img={columbia} />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-5">
        <BrandsCard img={marmot} />
        <BrandsCard img={northface} />
        <BrandsCard img={outdoor} />
      </div>
    </Container>
  );
};

export default BrandsSection;
