import { Container } from "..";
import { Card, Filters } from "../../components/forms";
import {
  ExpandedSidePanel,
  Footer,
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
      imgSrc: img,
      desc: { desc1: "buy it now it has a good deal and off on it bitches" },
      tags: { tag1: "Beginner" },
    },
    {
      id: uuid(),

      title: "advanced",
      imgSrc: img,
      desc: { desc1: "buy it now it has a good deal and off on it bitches" },
      tags: { tag1: "Advanced" },
    },
    {
      id: uuid(),

      title: "advanced",
      imgSrc: img,
      desc: { desc1: "buy it now it has a good deal and off on it bitches" },
      tags: { tag1: "Advanced" },
    },
    {
      id: uuid(),

      title: "strategies",
      imgSrc: img,
      desc: { desc1: "buy it now it has a good deal and off on it bitches" },
      tags: { tag1: "Strategies" },
    },
    {
      id: uuid(),

      title: "strategies",
      imgSrc: img,
      desc: { desc1: "buy it now it has a good deal and off on it bitches" },
      tags: { tag1: "Strategies" },
    },
    {
      id: uuid(),

      title: "strategies",
      imgSrc: img,
      desc: { desc1: "buy it now it has a good deal and off on it bitches" },
      tags: { tag1: "Strategies" },
    },
    {
      id: uuid(),

      title: "strategies",
      imgSrc: img,
      desc: { desc1: "buy it now it has a good deal and off on it bitches" },
      tags: { tag1: "Strategies" },
    },
    {
      id: uuid(),

      title: "emotions management",
      imgSrc: img,
      desc: { desc1: "buy it now it has a good deal and off on it bitches" },
      tags: { tag1: "Emotions Management" },
    },
    {
      id: uuid(),

      title: "emotions management",
      imgSrc: img,
      desc: { desc1: "buy it now it has a good deal and off on it bitches" },
      tags: { tag1: "Emotions Management" },
    },
    {
      id: uuid(),

      title: "money management",
      imgSrc: img,
      desc: { desc1: "buy it now it has a good deal and off on it bitches" },
      tags: { tag1: "Money Management" },
    },
    {
      id: uuid(),

      title: "money management",
      imgSrc: img,
      desc: { desc1: "buy it now it has a good deal and off on it bitches" },
      tags: { tag1: "Money Management" },
    },
    {
      id: uuid(),

      title: "money management",
      imgSrc: img,
      desc: { desc1: "buy it now it has a good deal and off on it bitches" },
      tags: { tag1: "Money Management" },
    },
    {
      id: uuid(),

      title: "placeholder",
      imgSrc: img,
      desc: { desc1: "buy it now it has a good deal and off on it bitches" },
      tags: { tag1: "notebook", tag2: "candle" },
    },
    {
      id: uuid(),

      title: "placeholder",
      imgSrc: img,
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
      <ExpandedSidePanel children={<Filters type="tutorials" />} />
      <ShrunkSidePanel children={<Filters type="tutorials" />} />
      <Container style=" bg-white w-[75%]  relative mb-[416px] mt-[130px] z-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-[5%]">
        {selectedRadioValue === "All"
          ? cardComponents.map((component) => (
              <Card
                id={component.id}
                type="tutorials"
                imgSrc={component.imgSrc}
                title={component.title}
                desc={component.desc}
                tags={component.tags}
              />
            ))
          : filteredCardComponents.map((component) => (
              <Card
                id={component.id}
                type="tutorials"
                imgSrc={component.imgSrc}
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
export default Tutorials;
