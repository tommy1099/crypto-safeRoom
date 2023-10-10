import { Container } from "..";
import { NavBar, Footer } from "../../components/ui";
import Card from "../../components/forms/Cards/Card"; //change
import { ScrollToTopIcon } from "../../components/forms";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  successfulSignal,
  failedSignal,
  reset,
} from "../../Store/SignalStatsTracker";
import Pic from "../../assets/img/bearandbull.png";
import btc from "../../assets/img/test2.jpeg";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/Store";
import { Filters } from "../../components/forms";
import StatsVisualizer from "../../components/forms/StatsVisualizer/StatsVisualizer";
import { NarrowContainer } from "../../components/ui";
import uuid from "react-uuid";
const Signals = () => {
  const isFullscreen = useSelector(
    (state: RootState) => state.FullScreenToggleReducer.fullScreen
  );
  const cardComponents = [
    {
      id: uuid(),
      state: true,
      blur: true,
      expire: 5000,
      src: Pic,
      crypto: "CELR/USDT",
      desc: {
        desc1: "First TP:  20%",
        desc2: "Second TP: 30%",
        desc3: "Third TP:  50%",
      },
      tags: { tag1: "Long: x10", tag2: "SL: 15%" },
    },
    {
      blur: false,
      id: uuid(),
      expire: 5000,
      src: Pic,
      crypto: "CELR/USDT",
      desc: {
        desc1: "First TP:  20%",
        desc2: "Second TP: 30%",
        desc3: "Third TP:  50%",
      },
      tags: { tag1: "Long: x10", tag2: "SL: 15%" },
    },
    {
      blur: false,
      id: uuid(),
      expire: 5000,
      src: Pic,
      crypto: "ATOM/USDT",
      desc: {
        desc1: "First TP: 20%",
        desc2: "Second TP: 30%",
        desc3: "Third TP: 50%",
      },
      tags: { tag1: "Long: x10", tag2: "SL: 15%" },
    },
    {
      state: true,
      blur: true,
      id: uuid(),
      expire: 5000,
      src: Pic,
      crypto: "CELR/USDT",
      desc: {
        desc1: "First TP: 20%",
        desc2: "Second TP: 30%",
        desc3: "Third TP: 50%",
      },
      tags: { tag1: "Long: x10", tag2: "SL: 15%" },
    },
    {
      state: false,
      blur: true,
      id: uuid(),
      expire: 5000,
      src: Pic,
      crypto: "CELR/USDT",
      desc: {
        desc1: "First TP: 20%",
        desc2: "Second TP: 30%",
        desc3: "Third TP: 50%",
      },
      tags: { tag1: "Long: x10", tag2: "SL: 15%" },
    },
    {
      blur: false,
      id: uuid(),
      expire: 5000,
      src: btc,
      crypto: "BTC/USDT",
      desc: {
        desc1: "First TP: 20%",
        desc2: "Second TP: 30%",
        desc3: "Third TP: 50%",
      },
      tags: { tag1: "Long: x10", tag2: "SL: 15%" },
    },
    {
      state: true,
      blur: true,
      id: uuid(),
      expire: 5000,
      src: Pic,
      crypto: "CELR/USDT",
      desc: {
        desc1: "First TP: 20%",
        desc2: "Second TP: 30%",
        desc3: "Third TP: 50%",
      },
      tags: { tag1: "Long: x10", tag2: "SL: 15%" },
    },
    {
      state: true,
      blur: true,
      id: uuid(),
      expire: 5000,
      src: Pic,
      crypto: "CELR/USDT",
      desc: {
        desc1: "First TP: 20%",
        desc2: "Second TP: 30%",
        desc3: "Third TP: 50%",
      },
      tags: { tag1: "Long: x10", tag2: "SL: 15%" },
    },
    {
      state: false,
      blur: true,
      id: uuid(),
      expire: 5000,
      src: Pic,
      crypto: "CELR/USDT",
      desc: {
        desc1: "First TP: 20%",
        desc2: "Second TP: 30%",
        desc3: "Third TP: 50%",
      },
      tags: { tag1: "Long: x10", tag2: "SL: 15%" },
    },
    {
      state: false,
      blur: true,
      id: uuid(),
      expire: 5000,
      src: Pic,
      crypto: "CELR/USDT",
      desc: {
        desc1: "First TP: 20%",
        desc2: "Second TP: 30%",
        desc3: "Third TP: 50%",
      },
      tags: { tag1: "Long: x10", tag2: "SL: 15%" },
    },
    {
      state: false,
      blur: true,
      id: uuid(),
      expire: 5000,
      src: Pic,
      crypto: "CELR/USDT",
      desc: {
        desc1: "First TP: 20%",
        desc2: "Second TP: 30%",
        desc3: "Third TP: 50%",
      },
      tags: { tag1: "Long: x10", tag2: "SL: 15%" },
    },
  ];

  cardComponents.sort((a, b) => {
    if (a.blur === b.blur) {
      return 0;
    } else if (a.blur) {
      return 1;
    } else {
      return -1;
    }
  });
  const toggle = useSelector((state: RootState) => state.toggleReducer.switch);
  const filteredComponents = cardComponents.filter((component) =>
    toggle ? true : component.blur === toggle
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reset());
    cardComponents.forEach((elm) => {
      if (elm.blur && elm.state) dispatch(successfulSignal());
      else if (elm.blur && !elm.state) {
        dispatch(failedSignal());
      }
    });
  });

  return (
    <div className="">
      <NavBar />
      <NarrowContainer
        style={`"z-[19] bg-white fixed w-full h-[60px] top-[64px] border-b-2 z-10 bg-white" ${
          isFullscreen ? "hidden" : ""
        }`}
      >
        <Filters type="signals" />
        <StatsVisualizer />
      </NarrowContainer>
      <Container style="relative mb-[416px] mt-[130px] z-0 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 mx-[5%] ">
        {filteredComponents.map((component) => (
          <Card
            type="signals"
            state={component.state}
            blur={component.blur}
            id={component.id}
            expire={component.expire}
            img={component.src}
            crypto={component.crypto}
            desc={component.desc}
            tags={component.tags}
          />
        ))}
      </Container>

      <div className="">
        <Footer />
      </div>
      <div className="fixed left-0 top-[92%] m-5 ">
        <ScrollToTopIcon />
      </div>
    </div>
  );
};
export default Signals;
