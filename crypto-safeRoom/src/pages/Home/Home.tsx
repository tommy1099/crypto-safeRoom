import { Container } from "..";
import {
  NavBar,
  Footer,
  FeaturesSection,
  BrandsSection,
} from "../../components/ui";
import { useState } from "react";
import { HomeCarousel, Loading } from "../../components/forms";
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

// import { useTranslation } from "react-i18next";
const list_of_products = [
  {
    type: "windstopper",
    name: "وینداستاپر کلمبیا سایز 2ایکس شسییسش",
    quantity: 1,
    in_stock: true,
    height: 95,
    collar_to_sleeve: 75,
    armpit_to_armpit: 70,
    size: "2xl",
    brand: "columbia",
    category: "sport",
    hat: true,
    waterproof: true,
    water_resistance: true,
    waist_fixation: true,
    country: "usa",
    color: "black",
    number_of_pockets: 4,
    damage: false,
    tags: {
      tag1: "sport",
      tag2: "columbia",
      tag3: "2xl",
    },
    price: {
      off: false,
      price_before: 1500000,
      price_after: 999000,
    },
    img: "",
  },
  {
    type: "windstopper",
    name: "وینداستاپر کلمبیا سایز 2ایکس شسییسش",
    quantity: 1,
    in_stock: true,
    height: 95,
    collar_to_sleeve: 75,
    armpit_to_armpit: 70,
    size: "2xl",
    brand: "columbia",
    category: "sport",
    hat: true,
    waterproof: true,
    water_resistance: true,
    waist_fixation: true,
    country: "usa",
    color: "black",
    number_of_pockets: 4,
    damage: false,
    tags: {
      tag1: "sport",
      tag2: "columbia",
      tag3: "2xl",
    },
    price: {
      off: true,
      price_before: 1500000,
      price_after: 999000,
    },
    img: "",
  },
  {
    type: "windstopper",
    name: "وینداستاپر کلمبیا سایز 2ایکس شسییسش",
    quantity: 1,
    in_stock: true,
    height: 95,
    collar_to_sleeve: 75,
    armpit_to_armpit: 70,
    size: "2xl",
    brand: "columbia",
    category: "sport",
    hat: true,
    waterproof: true,
    water_resistance: true,
    waist_fixation: true,
    country: "usa",
    color: "black",
    number_of_pockets: 4,
    damage: false,
    tags: {
      tag1: "sport",
      tag2: "columbia",
      tag3: "2xl",
    },
    price: {
      off: true,
      price_before: 1500000,
      price_after: 999000,
    },
    img: "",
  },
  {
    type: "windstopper",
    name: "وینداستاپر کلمبیا سایز 2ایکس شسییسش",
    quantity: 1,
    in_stock: true,
    height: 95,
    collar_to_sleeve: 75,
    armpit_to_armpit: 70,
    size: "2xl",
    brand: "columbia",
    category: "sport",
    hat: true,
    waterproof: true,
    water_resistance: true,
    waist_fixation: true,
    country: "usa",
    color: "black",
    number_of_pockets: 4,
    damage: false,
    tags: {
      tag1: "sport",
      tag2: "columbia",
      tag3: "2xl",
    },
    price: {
      off: true,
      price_before: 1500000,
      price_after: 999000,
    },
    img: "",
  },
  {
    type: "windstopper",
    name: "وینداستاپر کلمبیا سایز 2ایکس شسییسش",
    quantity: 1,
    in_stock: true,
    height: 95,
    collar_to_sleeve: 75,
    armpit_to_armpit: 70,
    size: "2xl",
    brand: "columbia",
    category: "sport",
    hat: true,
    waterproof: true,
    water_resistance: true,
    waist_fixation: true,
    country: "usa",
    color: "black",
    number_of_pockets: 4,
    damage: false,
    tags: {
      tag1: "sport",
      tag2: "columbia",
      tag3: "2xl",
    },
    price: {
      off: true,
      price_before: 1500000,
      price_after: 999000,
    },
    img: "",
  },
  {
    type: "windstopper",
    name: "وینداستاپر کلمبیا سایز 2ایکس شسییسش",
    quantity: 1,
    in_stock: true,
    height: 95,
    collar_to_sleeve: 75,
    armpit_to_armpit: 70,
    size: "2xl",
    brand: "columbia",
    category: "sport",
    hat: true,
    waterproof: true,
    water_resistance: true,
    waist_fixation: true,
    country: "usa",
    color: "black",
    number_of_pockets: 4,
    damage: false,
    tags: {
      tag1: "sport",
      tag2: "columbia",
      tag3: "2xl",
    },
    price: {
      off: true,
      price_before: 1500000,
      price_after: 999000,
    },
    img: "",
  },
  {
    type: "windstopper",
    name: "وینداستاپر کلمبیا سایز 2ایکس شسییسش",
    quantity: 1,
    in_stock: true,
    height: 95,
    collar_to_sleeve: 75,
    armpit_to_armpit: 70,
    size: "2xl",
    brand: "columbia",
    category: "sport",
    hat: true,
    waterproof: true,
    water_resistance: true,
    waist_fixation: true,
    country: "usa",
    color: "black",
    number_of_pockets: 4,
    damage: false,
    tags: {
      tag1: "sport",
      tag2: "columbia",
      tag3: "2xl",
    },
    price: {
      off: true,
      price_before: 1500000,
      price_after: 999000,
    },
    img: "",
  },
  {
    type: "windstopper",
    name: "وینداستاپر کلمبیا سایز 2ایکس شسییسش",
    quantity: 1,
    in_stock: true,
    height: 95,
    collar_to_sleeve: 75,
    armpit_to_armpit: 70,
    size: "2xl",
    brand: "columbia",
    category: "sport",
    hat: true,
    waterproof: true,
    water_resistance: true,
    waist_fixation: true,
    country: "usa",
    color: "black",
    number_of_pockets: 4,
    damage: false,
    tags: {
      tag1: "sport",
      tag2: "columbia",
      tag3: "2xl",
    },
    price: {
      off: true,
      price_before: 1500000,
      price_after: 999000,
    },
    img: "",
  },
  {
    type: "windstopper",
    name: "وینداستاپر کلمبیا سایز 2ایکس شسییسش",
    quantity: 1,
    in_stock: true,
    height: 95,
    collar_to_sleeve: 75,
    armpit_to_armpit: 70,
    size: "2xl",
    brand: "columbia",
    category: "sport",
    hat: true,
    waterproof: true,
    water_resistance: true,
    waist_fixation: true,
    country: "usa",
    color: "black",
    number_of_pockets: 4,
    damage: false,
    tags: {
      tag1: "sport",
      tag2: "columbia",
      tag3: "2xl",
    },
    price: {
      off: true,
      price_before: 1500000,
      price_after: 999000,
    },
    img: "",
  },
  {
    type: "windstopper",
    name: "وینداستاپر کلمبیا سایز 2ایکس شسییسش",
    quantity: 1,
    in_stock: true,
    height: 95,
    collar_to_sleeve: 75,
    armpit_to_armpit: 70,
    size: "2xl",
    brand: "columbia",
    category: "sport",
    hat: true,
    waterproof: true,
    water_resistance: true,
    waist_fixation: true,
    country: "usa",
    color: "black",
    number_of_pockets: 4,
    damage: false,
    tags: {
      tag1: "sport",
      tag2: "columbia",
      tag3: "2xl",
    },
    price: {
      off: true,
      price_before: 1500000,
      price_after: 999000,
    },
    img: "",
  },
];

const Home = () => {
  const [isLoaded] = useState(false);
  // const { t } = useTranslation();
  const isFa = useSelector((state: RootState) => state.lang.isFa);

  return (
    <div className="justify-center flex flex-col items-center text-center gap-10">
      <NavBar />
      <HomeCarousel />
      <Container
        dir="ltr"
        style="flex flex-col text-end w-full justify-center items-center"
      >
        <Container
          dir={`ltr`}
          style="flex items-center overflow-x-auto md:w-[70%] gap-3 whitespace-nowrap"
        >
          <div className="flex p-[67px] text-6xl justify-center items-center text-center text-primary w-[150px] rounded-xl cursor-pointer hover:shadow-2xl md:w-[200px] bg-base-100 flex-shrink-0 shadow-md border-4 border-primary">
            <div className="flex gap-5 justify-center items-center text-center flex-col">
              <BsArrowLeftSquare />
              <a className="text-lg">مشاهده همه</a>
            </div>
          </div>
          {list_of_products.map((item, index) => (
            <Card
              type={item.type}
              name={item.name}
              quantity={item.quantity}
              in_stock={item.in_stock}
              size={item.size}
              brand={item.brand}
              category={item.category}
              tags={item.tags}
              price={item.price}
              img={timberland}
            />
          ))}
          <img className="w-40" src={smileyGirl} alt="" />
        </Container>
      </Container>
      <FeaturesSection place="home" />
      <SuggestionCards />

      <Container dir="ltr" style="flex w-full justify-center items-center">
        <Container
          dir={`ltr`}
          style="flex items-center overflow-x-auto md:w-[70%] gap-3 whitespace-nowrap"
        >
          <img className="" src="" alt="" />
          {list_of_products.map((item, index) => (
            <Card
              type={item.type}
              name={item.name}
              quantity={item.quantity}
              in_stock={item.in_stock}
              size={item.size}
              brand={item.brand}
              category={item.category}
              tags={item.tags}
              price={item.price}
              img={timberland}
            />
          ))}
          <img className="w-40" src={smileyGirl} alt="" />
        </Container>
      </Container>
      <BrandsSection />
      <div className="w-screen">
        <Footer />
      </div>
    </div>
  );
};
export default Home;
//The North Face Columbia Marmot Outdoor Research timberland Helly Hansen
