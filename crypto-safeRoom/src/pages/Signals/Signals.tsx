import { Container } from "..";
import { NavBar, Footer } from "../../components/ui";
import Card from "../../components/forms/Cards/Card"; //change
import { ScrollToTopIcon } from "../../components/forms";
import { useDispatch } from "react-redux";
import { resetSignals, setSignals } from "../../Store/SignalsReducer";
import { Slide } from "../../components/ui";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/Store";
import Cookies from "js-cookie";
import { useEffect } from "react";
import RefreshToken from "../../utils/RefreshToken/RefreshToken";
import { BackendAddress } from "../../utils/BackendAddress/BackendAddress";
import { useTranslation } from "react-i18next";
import {
  togglesignalIndicatorFalse,
  togglesignalIndicatorTrue,
} from "../../Store/signalIndicator";
import { useLocation, useNavigate } from "react-router-dom";
import { LiveChat } from "../../components/Features";
// import StatsVisualizer from "../../components/forms/StatsVisualizer/StatsVisualizer";

const Signals = () => {
  const isFa = useSelector((state: RootState) => state.lang.isFa);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const isDarkTheme = useSelector((state: RootState) => state.themeToggle.Dark);

  const signalsList = useSelector((state: RootState) => state.signals.signals);
  // console.log("signalsList:", signalsList);
  const toggle = useSelector((state: RootState) => state.toggleReducer.switch);
  const filteredComponents = signalsList.filter((component) =>
    toggle ? true : component.blur === toggle
  );

  useEffect(() => {
    const accessToken = Cookies.get("accessToken");
    if (accessToken === undefined) {
      RefreshToken(navigate, location, dispatch);
    }
    const fetchData = async () => {
      try {
        const response = await fetch(`${BackendAddress()}/signals`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        dispatch(resetSignals());
        dispatch(setSignals(data));
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("Error during fetch request:", error.message);
        } else {
          console.error("Unknown error during fetch request:", error);
        }
      }
    };

    fetchData();

    // Use setInterval to fetch data every 10 seconds (optional)
    const intervalId = setInterval(fetchData, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, [dispatch]);

  useEffect(() => {
    filteredComponents.filter((component) => !component.blur).length === 0
      ? dispatch(togglesignalIndicatorFalse())
      : dispatch(togglesignalIndicatorTrue());
  }, [dispatch, filteredComponents]);
  return (
    <div className="">
      <NavBar />

      <div className="flex  mr-[4%] justify-center items-center gap-5">
        <div className="mt-[20%] hidden md:flex sm:mt-[15%] lg:mt-[10%] xl:mt-[7%]">
          {" "}
          <Slide type="signals" />
        </div>
      </div>
      <a
        dir={`${isFa ? "rtl" : "ltr"}`}
        className="flex text-neutral text-3xl mx-[5%] mt-[15%] sm:mt-[15%] md:mt-[4%] lg:mt-[1%]"
      >
        {t("newSignals")}
      </a>

      <Container
        dir={`${isFa ? "rtl" : "ltr"}`}
        style={`relative mt-[60px] z-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 mx-[5%] ${
          isDarkTheme ? "border-neutral" : ""
        } border-b-2 pb-10 align-bottom`}
      >
        {filteredComponents
          .filter((component) => !component.blur)
          .map((component, index) => (
            <Card
              handleClose={() => {}}
              alertDesc={component.alertDesc}
              entryPoint={component.entryPoint}
              tpPrices={component.tpPrices}
              physical={false}
              key={index.toString()} // Add a unique key prop
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
          ))}
      </Container>
      <a
        dir={`${isFa ? "rtl" : "ltr"}`}
        className="flex text-neutral text-3xl mx-[5%] mt-[2%]"
      >
        {t("oldSignals")}
      </a>
      <Container
        dir={`${isFa ? "rtl" : "ltr"}`}
        style="relative mb-[50px] z-1 lg:mb-[100px] mt-[60px] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 mx-[5%] "
      >
        {filteredComponents
          .filter((component) => component.blur)
          .map((component, index) => (
            <Card
              handleClose={() => {}}
              physical={false}
              key={index.toString()} // Add a unique key prop
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
          ))}
      </Container>
      <div>
        <LiveChat />
      </div>
      <div className="">
        <Footer />
      </div>
      <div className="fixed left-0 top-[90%] m-5 ">
        <ScrollToTopIcon />
      </div>
    </div>
  );
};
export default Signals;
