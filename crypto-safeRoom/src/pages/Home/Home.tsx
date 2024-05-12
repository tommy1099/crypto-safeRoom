import { Container } from "..";
import { NavBar, Footer } from "../../components/ui";
import { useState } from "react";
import { HomeCarousel, Loading } from "../../components/forms";
import { RootState } from "../../Store/Store";
import { useSelector } from "react-redux";
import "../../components/Features/InfiniteScroll/InfiniteScroll.css";
import { Card } from "../../components/forms/Cards/index";
// import { useTranslation } from "react-i18next";

const Home = () => {
  const [isLoaded] = useState(false);
  // const { t } = useTranslation();
  const isFa = useSelector((state: RootState) => state.lang.isFa);

  return (
    <>
      <NavBar />
      <HomeCarousel />
      <Container
        dir="ltr"
        style="flex flex-col gap-5 items-center justify-around py-5"
      >
        <p className="">On Sale! Up to 50%</p>
        <Container
          dir={`ltr`}
          style="flex items-center overflow-x-auto justify-center w-full overflow-hidden"
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Container>
      </Container>

      <Container
        dir="ltr"
        style=" flex flex-row items-center justify-center bg-primary"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 p-5">
          <span
            className={`relative rounded-2xl shadow-md h-[130px] w-[150px] bg-base-100`}
          >
            <img
              src={""}
              alt=""
              className="w-full h-full rounded-md object-cover"
            />
          </span>
          <span
            className={`relative rounded-2xl shadow-md h-[130px] w-[150px] bg-base-100`}
          >
            <img
              src={""}
              alt=""
              className="w-full h-full rounded-md object-cover"
            />
          </span>
          <span
            className={`relative rounded-2xl shadow-md h-[130px] w-[150px] bg-base-100`}
          >
            <img
              src={""}
              alt=""
              className="w-full h-full rounded-md object-cover"
            />
          </span>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 p-5">
          <span
            className={`relative rounded-2xl shadow-md h-[130px] w-[150px] bg-base-100`}
          >
            <img
              src={""}
              alt=""
              className="w-full h-full rounded-md object-cover"
            />
          </span>
          <span
            className={`relative rounded-2xl shadow-md h-[130px] w-[150px] bg-base-100`}
          >
            <img
              src={""}
              alt=""
              className="w-full h-full rounded-md object-cover"
            />
          </span>
          <span
            className={`relative rounded-2xl shadow-md h-[130px] w-[150px] bg-base-100`}
          >
            <img
              src={""}
              alt=""
              className="w-full h-full rounded-md object-cover"
            />
          </span>
        </div>
      </Container>
      <Container
        dir="ltr"
        style="flex flex-col gap-5 items-center justify-around py-5"
      >
        <p className="">latest added products!</p>
        <Container
          dir={`ltr`}
          style="flex items-center overflow-x-auto justify-center w-full overflow-hidden"
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Container>
      </Container>
      <div className="">
        <Footer />
      </div>
    </>
  );
};
export default Home;
