import { Container } from "..";
import { NavBar, Footer } from "../../components/ui";
import Card from "../../components/forms/Cards/Card"; //change
import { Loading, ScrollToTopIcon } from "../../components/forms";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  successfulSignal,
  failedSignal,
  reset,
} from "../../Store/SignalStatsTracker";
// import Pic from "../../assets/img/bearandbull.png";
// import btc from "../../assets/img/test2.jpeg";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/Store";
import { Filters } from "../../components/forms";
import StatsVisualizer from "../../components/forms/StatsVisualizer/StatsVisualizer";
// import { NarrowContainer } from "../../components/ui";
import { useState } from "react";
type NewItem = {
  id: string;
  //   key: string;
  img: string;
  crypto: string;
  desc: {
    desc1: string;
    desc2: string;
    desc3: string;
  };
  tags: {
    tag1: string;
    tag2: string;
  };
  expire: number;
  blur: boolean;
  state: boolean;
};
const Signals = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [signalsList, setSignalsList] = useState<NewItem[]>([]);

  signalsList.sort((a, b) => {
    if (a.blur === b.blur) {
      return 0;
    } else if (a.blur) {
      return 1;
    } else {
      return -1;
    }
  });
  const toggle = useSelector((state: RootState) => state.toggleReducer.switch);
  const filteredComponents = signalsList.filter((component) =>
    toggle ? true : component.blur === toggle
  );

  const dispatch = useDispatch();

  useEffect(() => {
    // console.log("signal list:", signalsList);
    dispatch(reset());
    signalsList.forEach((elm) => {
      if (elm.blur && elm.state) dispatch(successfulSignal());
      else if (elm.blur && !elm.state) {
        dispatch(failedSignal());
      }
    });
    fetch("http://localhost:4444/admin/dashboard/signals") // Replace with your API endpoint.
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse the response as JSON.
      })
      .then((responseData) => {
        setSignalsList(responseData); // Update the state with the data.
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoaded(true);
      });
  });

  return (
    <div className="">
      <NavBar />

      <div className="flex mt-[7%] mr-[4%] justify-center">
        <Filters type="signals" />
        <StatsVisualizer />
      </div>
      {!isLoaded && <Loading />}
      <Container style="relative mb-[605px] lg:mb-[575px] mt-[60px] z-0 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 mx-[5%] ">
        {filteredComponents.map((component) => (
          <Card
            type="signals"
            state={component.state}
            blur={component.blur}
            id={component.id}
            expire={component.expire}
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
