import { Container } from "..";
import { NavBar, Footer } from "../../components/ui";
import Card from "../../components/forms/Cards/Card"; //change
import { Loading, ScrollToTopIcon } from "../../components/forms";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSignals } from "../../Store/SignalsReducer";
import { Slide } from "../../components/ui";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/Store";
// import { NarrowContainer } from "../../components/ui";
import { BackendAddress } from "../../utils/BackendAddress/BackendAddress";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  togglesignalIndicatorFalse,
  togglesignalIndicatorTrue,
} from "../../Store/signalIndicator";
// import StatsVisualizer from "../../components/forms/StatsVisualizer/StatsVisualizer";

const Signals = () => {
  const isFa = useSelector((state: RootState) => state.lang.isFa);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [isLoaded, setIsLoaded] = useState(false);
  const signalsList = useSelector((state: RootState) => state.signals.signals);
  // console.log("signalsList:", signalsList);
  const toggle = useSelector((state: RootState) => state.toggleReducer.switch);
  const filteredComponents = signalsList.filter((component) =>
    toggle ? true : component.blur === toggle
  );
  // if (filteredComponents.length === 0) dispatch(togglesignalIndicatorFalse());

  // useEffect(() => {
  //   const handleUseEffect = () => {
  //     fetch(`${BackendAddress()}/signals`) // Replace with your API endpoint.
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error("Network response was not ok");
  //         }
  //         return response.json(); // Parse the response as JSON.
  //       })
  //       .then((responseData) => {
  //         // Update the state with the data.
  //         setIsLoaded(true);
  //         dispatch(setSignals(responseData));
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching data:", error);
  //         setIsLoaded(true);
  //       });
  //   };
  //   handleUseEffect();
  // }, [dispatch]);

  useEffect(() => {
    const eventSource = new EventSource(`${BackendAddress()}/signals`);

    eventSource.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);
      setIsLoaded(true);
      dispatch(setSignals(data));
    });
    return () => {
      // Cleanup when the component unmounts
      eventSource.close();
    };
  }, []); // Empty dependency array to run this effect only once

  // Rest of your component code
  // useEffect(() => {
  //   console.log("filteredComponents.length:", filteredComponents.length);
  //   const newFilter = filteredComponents.filter((component) => !component.blur);
  //   if (newFilter.length === 0) dispatch(togglesignalIndicatorFalse());
  // }, []);
  useEffect(() => {
    filteredComponents.filter((component) => !component.blur).length === 0
      ? dispatch(togglesignalIndicatorFalse())
      : dispatch(togglesignalIndicatorTrue());
  }, [dispatch, filteredComponents]);
  return (
    <div className="">
      <NavBar />

      <div className="flex mt-[7%] mr-[4%] justify-center items-center gap-5">
        {/* <StatsVisualizer signals={signalsList} /> */}
        <div className="hidden lg:block">
          {" "}
          <Slide type="signals" />
        </div>
      </div>
      {!isLoaded && <Loading />}
      <a
        dir={`${isFa ? "rtl" : "ltr"}`}
        className="flex text-3xl mx-[5%] mt-[15%] sm:mt-[6%] md:mt-[4%] lg:mt-[1%]"
      >
        {t("newSignals")}
      </a>

      <Container
        dir={`${isFa ? "rtl" : "ltr"}`}
        style="relative mt-[60px] z-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 mx-[5%] border-b-2 pb-10 align-bottom"
      >
        {isLoaded &&
          filteredComponents
            .filter((component) => !component.blur) // Filter based on component.state being true
            .map((component) => (
              <Card
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
        className="flex text-3xl mx-[5%] mt-[2%]"
      >
        {t("oldSignals")}
      </a>
      <Container
        dir={`${isFa ? "rtl" : "ltr"}`}
        style="relative mb-[50px] z-1 lg:mb-[100px] mt-[60px] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 mx-[5%] "
      >
        {isLoaded &&
          filteredComponents
            .filter((component) => component.blur) // Filter based on component.state being true
            .map((component) => (
              <Card
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
