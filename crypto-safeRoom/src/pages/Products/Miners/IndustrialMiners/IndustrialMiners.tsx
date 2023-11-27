import { Container } from "../../..";
import { Card } from "../../../../components/forms";
import { Footer, NavBar } from "../../../../components/ui";
import img from "../../../../assets/img/bearandbull.png";
import { Catagories } from "../../../../components/forms";
import uuid from "react-uuid";

const IndustrialMiners = () => {
  const cardComponents = [
    {
      id: uuid(),
      title: "industrial miners",
      img: img,
      price: 30,
      desc: { desc1: "buy it now it has a good deal and off on it bitches" },
      tags: { tag1: "notebook", tag2: "candle" },
    },
    {
      id: uuid(),
      title: "industrial miners",
      img: img,
      price: 30,
      desc: { desc1: "buy it now it has a good deal and off on it bitches" },
      tags: { tag1: "notebook", tag2: "candle" },
    },
    {
      id: uuid(),
      title: "industrial miners",
      img: img,
      price: 30,
      desc: { desc1: "buy it now it has a good deal and off on it bitches" },
      tags: { tag1: "notebook", tag2: "candle" },
    },
  ];
  return (
    <>
      <NavBar />
      <Catagories />
      <Container
        dir="ltr"
        style="  relative mb-[416px] mt-[130px] z-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-[5%]"
      >
        {cardComponents.map((component) => (
          <Card
            price={component.price}
            id={component.id}
            type="products"
            img={component.img}
            title={component.title}
            desc={component.desc}
            tags={component.tags}
            key=""
            physical
          />
        ))}
      </Container>
      <div className="">
        <Footer />
      </div>
    </>
  );
};
export default IndustrialMiners;
