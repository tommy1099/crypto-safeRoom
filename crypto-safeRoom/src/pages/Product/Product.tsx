import { Card } from "../../components/forms";
import {
  NavBar,
  Footer,
  FeaturesSection,
  Breadcrumbs,
} from "../../components/ui";
import ProductDetails from "./ProductDetails";
import ProductPictures from "./ProductPictures";
import ProductToCart from "./ProductToCart";

import { BsArrowLeftSquare } from "react-icons/bs";
import { Container } from "..";
import smileyGirl from "../../assets/img/cheerful-young-woman-smiling.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { IProduct } from "../../Interfaces/Interfaces";

//temp
import quechua from "../../assets/img/logos/dequ22p2_frise-13.jpg";
import timberland from "../../assets/img/logos/images.png";
import columbia from "../../assets/img/logos/4c01da3c0a75404bf73f430a792edd98.png";
import marmot from "../../assets/img/logos/images-marmot.png";
import northface from "../../assets/img/logos/png-transparent-the-north-face-decal-sticker-brand-logo-north-face-text-retail.png";
import outdoor from "../../assets/img/logos/Outdoor-Research-Logo-Square.png";
//temp

const Product = () => {
  const tempArr = [outdoor, northface, marmot, columbia, quechua, timberland];
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const productName = pathname.split("/")[2];
  const [product, setProduct] = useState<IProduct>();

  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    const productFetch = async () => {
      try {
        const resource = await fetch(
          "http://localhost:3000/product/discounted"
        );

        if (resource.ok) {
          const data = await resource.json();
          setProducts(data);
          console.log(data);
        }
      } catch (error) {
        console.error({ message: error });
      }
    };
    productFetch();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/product/product_detail/${productName}`
        );

        if (response.ok) {
          const data = await response.json();
          console.log("data", data);
          setProduct(data);
        } else {
          navigate("/");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [productName]);
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <NavBar />
      {/* <Breadcrumbs /> */}
      <div className="flex w-[85%] justify-center gap-2">
        <ProductToCart
          type={product?.type}
          price={product?.price}
          general_info={product?.general_info}
        />
        <div className="flex w-1/3 gap-2">
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

          <ProductPictures img={tempArr} tombnailImg={product?.tombnailImg} />
        </div>
        {/* <ProductToCart /> */}
      </div>
      <FeaturesSection place="product" />
      <Container
        dir={`ltr`}
        style="flex items-center overflow-x-auto md:w-[85%] gap-3 mt-10 whitespace-nowrap"
      >
        <div className="flex p-[67px] text-6xl justify-center items-center text-center text-primary w-[150px] rounded-xl cursor-pointer hover:shadow-2xl md:w-[200px] bg-base-100 flex-shrink-0 shadow-md border-4 border-primary">
          <div className="flex gap-5 justify-center items-center text-center flex-col">
            <BsArrowLeftSquare />
            <a className="text-lg">مشاهده همه</a>
          </div>
        </div>
        {products?.map((item, index) => (
          <Card
            key={index}
            url={item.url}
            type={item.type}
            general_info={item.general_info}
            tags={item.tags}
            price={item.price}
            tombnailImg={timberland}
          />
        ))}
      </Container>
      <div className="flex w-[85%] flex-col gap-2">
        <ProductDetails
          type={product?.type}
          detailedInfo={product?.detailedInfo}
          texture={product?.texture}
        />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};
export default Product;
