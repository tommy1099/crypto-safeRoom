import { Container } from "..";
import { Card, Filters, ScrollToTopIcon } from "../../components/forms";
import {
  ExpandedSidePanel,
  Footer,
  NarrowContainer,
  NavBar,
  ShrunkSidePanel,
} from "../../components/ui";
import img from "../../assets/img/bearandbull.png";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/Store";
import uuid from "react-uuid";

const Tutorials = () => {
  const selectedRadioValue: string | null = useSelector(
    (state: RootState) => state.Radio.selectedValue
  );

  const cardComponents = [
    {
      id: uuid(),
      title: "beginner",
      img: img,
      price: 30,
      desc: { desc1: "buy it now it has a good deal and off on it bitches" },
      tags: { tag1: "Beginner" },
    },
    {
      id: uuid(),

      title: "advanced",
      img: img,
      price: 30,

      desc: { desc1: "buy it now it has a good deal and off on it bitches" },
      tags: { tag1: "Advanced" },
    },
    {
      id: uuid(),

      title: "advanced",
      img: img,
      price: 30,

      desc: { desc1: "buy it now it has a good deal and off on it bitches" },
      tags: { tag1: "Advanced" },
    },
    {
      id: uuid(),

      title: "strategies",
      img: img,
      price: 30,

      desc: { desc1: "buy it now it has a good deal and off on it bitches" },
      tags: { tag1: "Strategies" },
    },
    {
      id: uuid(),

      title: "strategies",
      img: img,
      price: 30,

      desc: { desc1: "buy it now it has a good deal and off on it bitches" },
      tags: { tag1: "Strategies" },
    },
    {
      id: uuid(),

      title: "strategies",
      img: img,
      price: 30,

      desc: { desc1: "buy it now it has a good deal and off on it bitches" },
      tags: { tag1: "Strategies" },
    },
    {
      id: uuid(),

      title: "strategies",
      img: img,
      price: 30,

      desc: { desc1: "buy it now it has a good deal and off on it bitches" },
      tags: { tag1: "Strategies" },
    },
    {
      id: uuid(),

      title: "emotions management",
      img: img,
      price: 30,

      desc: { desc1: "buy it now it has a good deal and off on it bitches" },
      tags: { tag1: "Emotions Management" },
    },
    {
      id: uuid(),

      title: "emotions management",
      img: img,
      price: 30,

      desc: { desc1: "buy it now it has a good deal and off on it bitches" },
      tags: { tag1: "Emotions Management" },
    },
    {
      id: uuid(),

      title: "money management",
      img: img,
      price: 30,

      desc: { desc1: "buy it now it has a good deal and off on it bitches" },
      tags: { tag1: "Money Management" },
    },
    {
      id: uuid(),

      title: "money management",
      img: img,
      price: 30,

      desc: { desc1: "buy it now it has a good deal and off on it bitches" },
      tags: { tag1: "Money Management" },
    },
    {
      id: uuid(),

      title: "money management",
      img: img,
      price: 30,

      desc: { desc1: "buy it now it has a good deal and off on it bitches" },
      tags: { tag1: "Money Management" },
    },
    {
      id: uuid(),

      title: "placeholder",
      img: img,
      price: 30,

      desc: { desc1: "buy it now it has a good deal and off on it bitches" },
      tags: { tag1: "notebook", tag2: "candle" },
    },
    {
      id: uuid(),

      title: "placeholder",
      img: img,
      price: 30,

      desc: { desc1: "buy it now it has a good deal and off on it bitches" },
      tags: { tag1: "notebook", tag2: "candle" },
    },
  ];
  const filteredCardComponents = selectedRadioValue
    ? cardComponents.filter(
        (component) => component.tags?.tag1 === selectedRadioValue
      )
    : cardComponents;
  return (
    <>
      <NavBar />
      {/* <ExpandedSidePanel children={<Filters type="tutorials" />} />
      <ShrunkSidePanel children={<Filters type="tutorials" />} /> */}
      <NarrowContainer style="bg-neutral h-32 w-full fixed" />
      <Container
        dir=""
        style=" bg-base-100 my-[10%] relative mt-[15%] lg:my-[8%] z-0 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4  xl:grid-cols-5 mx-[5%]"
      >
        {selectedRadioValue === "All"
          ? cardComponents.map((component, index) => (
              <Card
                inStock
                key={index.toString()}
                price={component.price}
                id={component.id}
                type="tutorials"
                img={component.img}
                title={component.title}
                desc={component.desc}
                tags={component.tags}
              />
            ))
          : filteredCardComponents.map((component, index) => (
              <Card
                inStock
                key={index.toString()}
                price={component.price}
                id={component.id}
                type="tutorials"
                img={component.img}
                title={component.title}
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
    </>
  );
};
export default Tutorials;
