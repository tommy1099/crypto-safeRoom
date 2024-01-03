import { Container } from "..";
import { NavBar, Footer } from "../../components/ui";
import Card from "../../components/forms/Cards/Card";
import { useEffect, useState } from "react";
import { HomeCarousel, Loading } from "../../components/forms";
import { BackendAddress } from "../../utils/BackendAddress/BackendAddress";
import { RootState } from "../../Store/Store";
import { useDispatch, useSelector } from "react-redux";
import "../../components/Features/InfiniteScroll/InfiniteScroll.css";
import InfiniteLoopSlider from "../../components/Features/InfiniteScroll/InfiniteScroll";
import { ISignalsProps, NewsItem } from "../../Interfaces/Interfaces";
import { useTranslation } from "react-i18next";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [signals, setSignals] = useState<ISignalsProps[]>();
  const { t } = useTranslation();
  const isFa = useSelector((state: RootState) => state.lang.isFa);
  const toggle = useSelector((state: RootState) => state.toggleReducer.switch);
  const [newsList, setNewsList] = useState<NewsItem[]>([]);

  const filteredComponents = signals?.filter((component) =>
    toggle ? true : component.blur === toggle
  );
  const limitedComponents = filteredComponents?.slice(0, 15);
  const limitedNews = newsList?.slice(0, 15);
  // const cardComponents = [{}];
  // signalsList.sort((a, b) => {
  //   if (a.id === b.id) {
  //     return 0;
  //   } else if (a.id) {
  //     return 1;
  //   } else {
  //     return -1;
  //   }
  // });
  //   const toggle = useSelector((state: RootState) => state.toggleReducer.switch);
  //   const filteredComponents = cardComponents.filter((component) =>
  //     toggle ? true : component.blur === toggle
  //   );
  useEffect(() => {
    const fetchData = async () => {
      setIsLoaded(true);

      try {
        // Fetch signals
        const signalResponse = await fetch(`${BackendAddress()}/signals/home`, {
          method: "GET",
        });

        if (!signalResponse.ok) {
          throw new Error(`HTTP error! Status: ${signalResponse.status}`);
        }

        const signalData = await signalResponse.json();
        setSignals(signalData);

        // Fetch news
        const newsResponse = await fetch(`${BackendAddress()}/news/`, {
          method: "GET",
        });

        if (!newsResponse.ok) {
          throw new Error(`HTTP error! Status: ${newsResponse.status}`);
        }

        const newsData = await newsResponse.json();
        setNewsList(newsData);
      } catch (error) {
        // Handle error
        // dispatch(setError(error.message));
      } finally {
        setIsLoaded(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      <HomeCarousel />
      <Container
        dir="ltr"
        style="flex flex-col md:flex-row gap-5 items-center justify-around py-5"
      >
        <Container
          dir={`ltr`}
          style="flex items-center justify-center w-[350px] md:w-[700px] overflow-hidden md:my-[60px]"
        >
          {!isLoaded && <Loading />}
          {limitedComponents
            ?.filter((component) => component.blur)
            .map((component, index) => (
              <InfiniteLoopSlider key={index} duration={25000} reverse={false}>
                <Card
                  handleClose={() => {}}
                  physical={false}
                  type="signals"
                  tp={component.tp}
                  state={component.state}
                  blur={component.blur}
                  id={component.id}
                  vip={component.vip}
                  img={component.img}
                  crypto={component.crypto}
                  desc={component.desc}
                  tags={component.tags}
                />
              </InfiniteLoopSlider>
            ))}
        </Container>
        <div
          dir={`${isFa ? "rtl" : "ltr"}`}
          className="flex flex-col p-5 justify-start items-start md:w-[300px] text-neutral"
        >
          <p className="mb-4 text-3xl">{t("homeSignalsMessage")}</p>
          <button className="px-10 py-2 rounded border-2 transition-all border-primary bg-base-100 text-neutral hover:bg-primary hover:text-secondary">
            {t("homeSignalsButton")}
          </button>
        </div>
      </Container>
      <Container
        dir="ltr"
        style="flex flex-col md:flex-row gap-5 items-center justify-around bg-primary py-5"
      >
        <Container
          dir={`ltr`}
          style="flex items-center justify-center w-[350px] md:w-[700px] overflow-hidden md:my-[60px]"
        >
          {!isLoaded && <Loading />}
          {limitedNews?.map((component, index) => (
            <InfiniteLoopSlider key={index} duration={25000} reverse={true}>
              <Card
                key={component.id}
                id={component.id}
                type="news"
                img={component.img}
                title={component.title}
                desc={component.desc}
                physical={false}
                handleClose={() => {}}
              />
            </InfiniteLoopSlider>
          ))}
        </Container>
        <div
          dir={`${isFa ? "rtl" : "ltr"}`}
          className="flex flex-col gap-5 justify-start items-start w-[300px] text-[#2c2c2c]"
        >
          <p className="text-3xl">{t("homeNewsMessage")}</p>
          <button className="px-10 py-2 rounded border-2 transition-all border-[#2c2c2c] bg-primary text-[#2c2c2c] hover:bg-[#2c2c2c] hover:text-secondary">
            {t("homeNewsButton")}
          </button>
        </div>
      </Container>

      <div className="">
        <Footer />
      </div>
    </>
  );
};
export default Home;
