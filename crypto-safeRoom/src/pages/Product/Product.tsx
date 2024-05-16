import {
  NavBar,
  Footer,
  FeaturesSection,
  Breadcrumbs,
} from "../../components/ui";
import ProductDetails from "./ProductDetails";
import ProductPictures from "./ProductPictures";
import ProductToCart from "./ProductToCart";

const Product = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <NavBar />
      {/* <Breadcrumbs /> */}
      <div className="flex w-[85%] justify-end gap-2">
        <FeaturesSection place="product" />

        <ProductToCart />
        <div className="flex gap-2">
          {/* <div className="mt-[40%] text-right">
            <ProductDesc
              type="clothes"
              height={80}
              waist={42}
              waist_to_crotch={32}
              crotch_to_thigh={32}
              size="xl"
              collar_to_sleeve={0}
              armpit_to_armpit={0}
            />
          </div> */}

          <ProductPictures />
        </div>
        {/* <ProductToCart /> */}
      </div>
      <div className="flex w-[85%] flex-col gap-2">
        <ProductDetails
          type="clothes"
          height={80}
          waist={42}
          waist_to_crotch={32}
          crotch_to_thigh={32}
          size="xl"
          collar_to_sleeve={0}
          armpit_to_armpit={0}
        />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};
export default Product;
