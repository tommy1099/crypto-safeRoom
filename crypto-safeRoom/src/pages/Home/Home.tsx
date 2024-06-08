import { Container } from "..";
import {
  NavBar,
  Footer,
  FeaturesSection,
  BrandsSection,
} from "../../components/ui";
import { useEffect, useState } from "react";
import {
  HomeCarousel,
  Loading,
  ScrollToTopIcon,
  SearchBar,
} from "../../components/forms";
import { RootState } from "../../Store/Store";
import { useSelector } from "react-redux";
import "../../components/Features/InfiniteScroll/InfiniteScroll.css";
import { Card } from "../../components/forms/Cards/index";

import smileyGirl from "../../assets/img/cheerful-young-woman-smiling.png";
import { BsArrowLeftSquare } from "react-icons/bs";
// import greenShit from "../../assets/img/men-green-shirt-nature-inspired-design-fresh-modern-summer-fashion-generated-by-artificial-intelligence.png";
// import greenPants from "../../assets/img/pants-hanger-with-green-background.png";
import timberland from "../../assets/img/logos/images.png";
import SuggestionCards from "../../components/ui/SuggestionCards/SuggestionsCards";
import { IProduct } from "../../Interfaces/Interfaces";

// import { useTranslation } from "react-i18next";

const Home = () => {
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
  const [isLoaded] = useState(false);
  // const { t } = useTranslation();
  const isFa = useSelector((state: RootState) => state.lang.isFa);

  return (
    <div className="justify-center flex flex-col items-center text-center gap-10">
      <NavBar />
      {/* <div className="absolute  w-[500px] top-[3%] right-[10%]">
        <SearchBar />
      </div> */}
      <HomeCarousel />
      <Container
        dir="ltr"
        style="flex flex-col text-end w-full justify-center items-center"
      >
        <Container
          dir={`rtl`}
          style="flex bg-primary md:rounded-xl p-5 items-center overflow-x-auto w-full md:w-[70%] gap-3 whitespace-nowrap"
        >
          <img className="w-40" src={smileyGirl} alt="" />

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
          <div className="flex p-[67px] text-6xl justify-center items-center text-center text-primary w-[150px] rounded-xl cursor-pointer hover:shadow-2xl md:w-[200px] bg-base-100 flex-shrink-0 shadow-md border-4 border-primary">
            <div className="flex gap-5 justify-center items-center text-center flex-col">
              <BsArrowLeftSquare />
              <a className="text-lg">مشاهده همه</a>
            </div>
          </div>
        </Container>
      </Container>
      <div className="justify-center flex">
        <FeaturesSection place="home" />
      </div>

      <SuggestionCards />

      <Container dir="ltr" style="flex w-full justify-center items-center">
        <Container
          dir={`ltr`}
          style="flex items-center overflow-x-auto w-[70%] gap-3 whitespace-nowrap"
        >
          <div className="flex p-[67px] text-6xl justify-center items-center text-center text-primary w-[150px] md:rounded-xl cursor-pointer hover:shadow-2xl md:w-[200px] bg-base-100 flex-shrink-0 shadow-md border-4 border-primary">
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
      </Container>
      <BrandsSection />
      <div className="w-screen">
        <Footer />
      </div>
      <div className="fixed left-4 bottom-4">
        {" "}
        <ScrollToTopIcon />
      </div>
    </div>
  );
};
export default Home;
//The North Face Columbia Marmot Outdoor Research timberland Helly Hansen
