import { Container } from "..";
import {
  NavBar,
  Footer,
  ExpandedSidePanel,
  ShrunkSidePanel,
} from "../../components/ui";
import { NewsCard } from "../../components/forms";
import Pic from "../../assets/img//proxy-image.jpg";
// import { useSelector } from "react-redux";
// import { RootState } from "../../Store/Store";

const News = () => {
  const cardComponents = [
    {
      id: Date.now(),
      src: Pic,
      title: "Bitcoin Crashed!",
      desc: "we just found out that the recent events had a pretty bad impact on the worth of Bitcoin",
      tags: { tag1: "bitcoin", tag2: "crypto", tag3: "trade", tag4: "market" },
    },
    {
      id: Date.now(),
      src: Pic,
      title: "Bitcoin Crashed!",
      desc: "we just found out that the recent events had a pretty bad impact on the worth of Bitcoin",
      tags: { tag1: "bitcoin", tag2: "crypto", tag3: "trade", tag4: "market" },
    },
    {
      id: Date.now(),
      src: Pic,
      title: "Bitcoin Crashed!",
      desc: "we just found out that the recent events had a pretty bad impact on the worth of Bitcoin",
      tags: { tag1: "bitcoin", tag2: "crypto", tag3: "trade", tag4: "market" },
    },
    {
      id: Date.now(),
      src: Pic,
      title: "Bitcoin Crashed!",
      desc: "we just found out that the recent events had a pretty bad impact on the worth of Bitcoin",
      tags: { tag1: "bitcoin", tag2: "crypto", tag3: "trade", tag4: "market" },
    },
    {
      id: Date.now(),
      src: Pic,
      title: "Bitcoin Crashed!",
      desc: "we just found out that the recent events had a pretty bad impact on the worth of Bitcoin",
      tags: { tag1: "bitcoin", tag2: "crypto", tag3: "trade", tag4: "market" },
    },
  ];
  cardComponents.sort((a, b) => {
    if (a.id === b.id) {
      return 0;
    } else if (a.id) {
      return 1;
    } else {
      return -1;
    }
  });
  //   const toggle = useSelector((state: RootState) => state.toggleReducer.switch);
  //   const filteredComponents = cardComponents.filter((component) =>
  //     toggle ? true : component.blur === toggle
  //   );
  return (
    <>
      <NavBar />
      <ExpandedSidePanel />
      <ShrunkSidePanel />
      <Container style=" dracula grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ml-[5%] mr-[20%] mt-[3%]">
        {cardComponents.map((component) => (
          <NewsCard
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
export default News;
