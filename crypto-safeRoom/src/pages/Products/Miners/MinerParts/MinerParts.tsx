import { Container } from "../../..";
import { Card } from "../../../../components/forms";
import { Footer, NavBar } from "../../../../components/ui";
import img from "../../../../assets/img/bearandbull.png";
import { Catagories } from "../../../../components/forms";
const MinerParts = () => {
  const cardComponents = [
    {
      title: "miner parts",
      imgSrc: img,
      desc: { desc1: "buy it now it has a good deal and off on it bitches" },
      tags: { tag1: "notebook", tag2: "candle" },
    },
    {
      title: "miner parts",
      imgSrc: img,
      desc: { desc1: "buy it now it has a good deal and off on it bitches" },
      tags: { tag1: "notebook", tag2: "candle" },
    },
    {
      title: "miner parts",
      imgSrc: img,
      desc: { desc1: "buy it now it has a good deal and off on it bitches" },
      tags: { tag1: "notebook", tag2: "candle" },
    },
  ];
  return (
    <>
      <NavBar />
      <Catagories />
      <Container style="  relative mb-[416px] mt-[130px] z-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-[5%]">
        {cardComponents.map((component) => (
          <Card
            type="products"
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
export default MinerParts;
