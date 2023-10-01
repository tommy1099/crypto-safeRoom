import { Container } from "..";
import { NavBar, Footer } from "../../components/ui";
import { SignalCard } from "../../components/forms";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  successfulSignal,
  failedSignal,
  reset,
} from "../../Store/SignalStatsTracker";
import Pic from "../../assets/img/bearandbull.png";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/Store";
import { SignalFilters } from "../../components/forms";
import StatsVisualizer from "../../components/forms/StatsVisualizer/StatsVisualizer";
const Signals = () => {
  const cardComponents = [
    {
      state: true,
      blur: true,
      id: Date.now(),
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
      id: Date.now(),
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
      id: Date.now(),
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
      id: Date.now(),
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
      id: Date.now(),
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
      id: Date.now(),
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
      id: Date.now(),
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
      id: Date.now(),
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
      id: Date.now(),
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
      id: Date.now(),
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
      id: Date.now(),
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
      <div className="z-[19] fixed w-full h-[12%] top-[3%] border-b-2  bg-white">
        <SignalFilters />
        <StatsVisualizer />
      </div>
      <Container style=" relative mb-[100px] mt-[10%] z-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 mx-[5%] ">
        {filteredComponents.map((component) => (
          <SignalCard
            state={component.state}
            blur={component.blur}
            id={component.id}
            expire={component.expire}
            src={component.src}
            crypto={component.crypto}
            desc={component.desc}
            tags={component.tags}
          />
        ))}
      </Container>

      <div className="">
        <Footer />
      </div>
    </div>
  );
};
export default Signals;
