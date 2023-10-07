import { Container } from "..";
import { NavBar, Footer } from "../../components/ui";
// import { NewsCard } from "../../components/forms";
import Pic from "../../assets/img//proxy-image.jpg";
import Card from "../../components/forms/Cards/Card";
// import { useSelector } from "react-redux";
// import { RootState } from "../../Store/Store";

const News = () => {
  const cardComponents = [
    {
      id: Date.now(),
      src: Pic,
      type: "news",
      title: "Bitcoin Crashed!",
      desc: {
        desc1: "blah blah blah...",
      },
    },
    {
      id: Date.now(),
      src: Pic,
      type: "news",
      title: "Bitcoin Crashed!",
      desc: {
        desc1:
          "we just found out that the recent events had a pretty bad impact on the worth of Bitcoin",
      },
    },
    {
      id: Date.now(),
      src: Pic,
      type: "news",
      title: "Bitcoin Crashed!",
      desc: {
        desc1:
          "we just found out that the recent events had a pretty bad impact on the worth of Bitcoin",
      },
    },
    {
      id: Date.now(),
      src: Pic,
      type: "news",
      title: "Bitcoin Crashed!",
      desc: {
        desc1:
          "we just found out that the recent events had a pretty bad impact on the worth of Bitcoin",
      },
    },
    {
      id: Date.now(),
      src: Pic,
      type: "news",
      title: "Bitcoin Crashed!",
      desc: {
        desc1:
          "we just found out that the recent events had a pretty bad impact on the worth of Bitcoin",
      },
    },
    {
      id: Date.now(),
      src: Pic,
      type: "news",
      title: "Bitcoin Crashed!",
      desc: {
        desc1:
          "we just found out that the recent events had a pretty bad impact on the worth of Bitcoin",
      },
    },
    {
      id: Date.now(),
      src: Pic,
      type: "news",
      title: "Bitcoin Crashed!",
      desc: {
        desc1:
          "we just found out that the recent events had a pretty bad impact on the worth of Bitcoin",
      },
    },
    {
      id: Date.now(),
      src: Pic,
      type: "news",
      title: "Bitcoin Crashed!",
      desc: {
        desc1:
          "we just found out that the recent events had a pretty bad impact on the worth of Bitcoin",
      },
    },
    {
      id: Date.now(),
      src: Pic,
      type: "news",
      title: "Bitcoin Crashed!",
      desc: {
        desc1:
          "we just found out that the recent events had a pretty bad impact on the worth of Bitcoin",
      },
    },
    {
      id: Date.now(),
      src: Pic,
      type: "news",
      title: "Bitcoin Crashed!",
      desc: {
        desc1:
          "we just found out that the recent events had a pretty bad impact on the worth of Bitcoin",
      },
    },
    {
      id: Date.now(),
      src: Pic,
      type: "news",
      title: "Bitcoin Crashed!",
      desc: {
        desc1:
          "we just found out that the recent events had a pretty bad impact on the worth of Bitcoin",
      },
    },
    {
      id: Date.now(),
      src: Pic,
      type: "news",
      title: "Bitcoin Crashed!",
      desc: {
        desc1:
          "we just found out that the recent events had a pretty bad impact on the worth of Bitcoin",
      },
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

      <Container style=" relative mb-[416px] mt-[130px] z-0 grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 mx-[5%]">
        {cardComponents.map((component) => (
          // <NewsCard
          //   src={component.src}
          //   title={component.title}
          //   desc={component.desc.desc1}
          // />
          <Card
            type="news"
            imgSrc={component.src}
            title={component.title}
            desc={component.desc}
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
