import { Container } from "..";
import { NavBar, Footer, Card, SidePanelFilter } from "../../components/ui";

import Pic from "../../assets/img/bearandbull.png";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/Store";

const Signals = () => {
  const cardComponents = [
    {
      blur: true,
      id: Date.now(),
      expire: 5000,
      src: Pic,
      title: "CELR/USDT",
      desc: {
        desc1: "Target Price 1: 20%",
        desc2: "Target Price 2: 30%",
        desc3: "Target Price 3: 50%",
      },
      tags: { tag1: "Long: x10", tag2: "SL: 15%" },
    },
    {
      blur: false,
      id: Date.now(),
      expire: 5000,
      src: Pic,
      title: "CELR/USDT",
      desc: {
        desc1: "Target Price 1: 20%",
        desc2: "Target Price 2: 30%",
        desc3: "Target Price 3: 50%",
      },
      tags: { tag1: "Long: x10", tag2: "SL: 15%" },
    },
    {
      blur: false,
      id: Date.now(),
      expire: 5000,
      src: Pic,
      title: "CELR/USDT",
      desc: {
        desc1: "Target Price 1: 20%",
        desc2: "Target Price 2: 30%",
        desc3: "Target Price 3: 50%",
      },
      tags: { tag1: "Long: x10", tag2: "SL: 15%" },
    },
    {
      blur: true,
      id: Date.now(),
      expire: 5000,
      src: Pic,
      title: "CELR/USDT",
      desc: {
        desc1: "Target Price 1: 20%",
        desc2: "Target Price 2: 30%",
        desc3: "Target Price 3: 50%",
      },
      tags: { tag1: "Long: x10", tag2: "SL: 15%" },
    },
    {
      blur: true,
      id: Date.now(),
      expire: 5000,
      src: Pic,
      title: "CELR/USDT",
      desc: {
        desc1: "Target Price 1: 20%",
        desc2: "Target Price 2: 30%",
        desc3: "Target Price 3: 50%",
      },
      tags: { tag1: "Long: x10", tag2: "SL: 15%" },
    },
    {
      blur: false,
      id: Date.now(),
      expire: 5000,
      src: Pic,
      title: "CELR/USDT",
      desc: {
        desc1: "Target Price 1: 20%",
        desc2: "Target Price 2: 30%",
        desc3: "Target Price 3: 50%",
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
  return (
    <>
      <NavBar />
      <SidePanelFilter />
      <Container style=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 ml-[5%] mr-[20%] mt-[3%]">
        {filteredComponents.map((component) => (
          <Card
            blur={component.blur}
            id={component.id}
            expire={component.expire}
            src={component.src}
            title={component.title}
            desc={component.desc}
            tags={component.tags}
          />
        ))}
      </Container>
      <div className="">
        <Footer />
      </div>
    </>
  );
};
export default Signals;
