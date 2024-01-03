import { Container } from "..";
import { NavBar, Footer, PaginationButtons } from "../../components/ui";
import Card from "../../components/forms/Cards/Card"; //change
import { Loading, ScrollToTopIcon } from "../../components/forms";
import { useDispatch } from "react-redux";
import { Slide } from "../../components/ui";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/Store";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import RefreshToken from "../../utils/RefreshToken/RefreshToken";
import { BackendAddress } from "../../utils/BackendAddress/BackendAddress";
import { useTranslation } from "react-i18next";
import {
  togglesignalIndicatorFalse,
  togglesignalIndicatorTrue,
} from "../../Store/signalIndicator";
import { setSignals } from "../../Store/SignalsReducer";
import { useLocation, useNavigate } from "react-router-dom";
import { LiveChat } from "../../components/Features";
import { resetAllSignals, setAllSignals } from "../../Store/AlltheSignals";
// import StatsVisualizer from "../../components/forms/StatsVisualizer/StatsVisualizer";

const Signals = () => {
  const isFa = useSelector((state: RootState) => state.lang.isFa);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const isDarkTheme = useSelector((state: RootState) => state.themeToggle.Dark);
  const [isLoaded, setIsLoaded] = useState(true);
  const signalsList = useSelector((state: RootState) => state.signals.signals);
  const [totalPages, setTotalPages] = useState(0);
  const allSignalsList = useSelector(
    (state: RootState) => state.allSignals.allSignals
  );

  // console.log("signalsList:", signalsList);
  const toggle = useSelector((state: RootState) => state.toggleReducer.switch);
  const filteredComponents = signalsList?.filter((component) =>
    toggle ? true : component.blur === toggle
  );
  const filteredAllComponents = allSignalsList?.filter((component) =>
    toggle ? true : component.blur === toggle
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 14;
  const incPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      // dispatch(resetSignals());
      setIsLoaded(true);
    }
  };
  const decPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      // dispatch(resetSignals());
      setIsLoaded(true);
    }
  };
  // Adjust as needed based on your design
  useEffect(() => {
    // if (signalsList.length > 0) setIsLoaded(false);
    const accessToken = Cookies.get("accessToken");
    if (accessToken === undefined) {
      RefreshToken(navigate, location, dispatch);
    }

    const fetchData = async (page: number) => {
      try {
        const response = await fetch(
          `${BackendAddress()}/signals?page=${page}&perPage=${itemsPerPage}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        } else {
          setIsLoaded(false);
          const data = await response.json();
          dispatch(setSignals(data.signals));
          setTotalPages(data.pageInfo.totalPages);
        }

        const response2 = await fetch(`${BackendAddress()}/signals/all`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!response2.ok) {
          throw new Error(`HTTP error! Status: ${response2.status}`);
        } else {
          const data2 = await response2.json();
          dispatch(resetAllSignals());
          dispatch(setAllSignals(data2));
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("Error during fetch request:", error.message);
        } else {
          console.error("Unknown error during fetch request:", error);
        }
      }
    };

    // Fetch data for the initial page when the component mounts
    fetchData(currentPage);

    // Use setInterval to fetch data every 10 seconds (optional)
    const intervalId = setInterval(() => fetchData(currentPage), 10000);

    // Use useEffect to fetch data whenever currentPage changes
    return () => {
      clearInterval(intervalId);
    };
  }, [dispatch, currentPage, navigate, location, signalsList.length]);

  useEffect(() => {
    filteredComponents?.filter((component) => !component.blur).length === 0
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
        className="flex text-primary text-3xl mx-[5%] mt-[15%] sm:mt-[15%] md:mt-[4%] lg:mt-[1%]"
      >
        {t("newSignals")}
      </a>

      <Container
        dir={`${isFa ? "rtl" : "ltr"}`}
        style={`relative mt-[60px] z-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 mx-[5%] ${
          isDarkTheme ? "border-neutral" : ""
        } border-b-2 pb-10 align-bottom`}
      >
        {filteredAllComponents
          ?.filter((component) => !component.blur)
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
        className="flex text-primary text-3xl mx-[5%] mt-[2%]"
      >
        {t("oldSignals")}
      </a>
      {isLoaded && (
        <div className="block">
          <Loading />
        </div>
      )}
      <Container
        dir={`${isFa ? "rtl" : "ltr"}`}
        style="relative mb-[50px] z-1 lg:mb-[100px] mt-[60px] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 mx-[5%] "
      >
        {filteredComponents
          ?.filter((component) => component.blur)
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
      <div className="flex justify-center items-center my-[5%] z-[3]">
        <PaginationButtons
          isLoaded={isLoaded}
          incPage={incPage}
          decPage={decPage}
          currentPage={currentPage}
        />
      </div>
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
