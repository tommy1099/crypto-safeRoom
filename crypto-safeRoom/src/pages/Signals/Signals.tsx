import { Container } from "..";
import { NavBar, Footer, Card } from "../../components/ui";
import Pic from "../../assets/img/proxy-image.jpg";

const Signals = () => {
  return (
    <>
      <NavBar />
      <div className="bg-white shadow-2xl z-20 py-3 px-5 rounded-full fixed top-[10%] w-[15%] ml-[43%]">
        <div className=" form-control">
          <label className="gap-4 label cursor-pointer">
            <span className="label-text">Active</span>
            <input type="checkbox" className="toggle" checked />
            <span className="label-text">All</span>
          </label>
        </div>
      </div>
      <Container style="gap-5 grid grid-cols-4 p-5 mt-20">
        <Card
          expire={10000}
          src={Pic}
          title="CELR/USDT"
          desc={{
            desc1: "Target Price 1: 20%",
            desc2: "Target Price 2: 30%",
            desc3: "Target Price 3: 50%",
          }}
          tags={{ tag1: "Long: x10", tag2: "SL: 15%" }}
        />
        <Card
          expire={10000}
          src={Pic}
          title="CELR/USDT"
          desc={{
            desc1: "Target Price 1: 20%",
            desc2: "Target Price 2: 30%",
            desc3: "Target Price 3: 50%",
          }}
          tags={{ tag1: "Long: x10", tag2: "SL: 15%" }}
        />
        <Card
          expire={10000}
          src={Pic}
          title="CELR/USDT"
          desc={{
            desc1: "Target Price 1: 20%",
            desc2: "Target Price 2: 30%",
            desc3: "Target Price 3: 50%",
          }}
          tags={{ tag1: "Long: x10", tag2: "SL: 15%" }}
        />
        <Card
          expire={10000}
          src={Pic}
          title="CELR/USDT"
          desc={{
            desc1: "Target Price 1: 20%",
            desc2: "Target Price 2: 30%",
            desc3: "Target Price 3: 50%",
          }}
          tags={{ tag1: "Long: x10", tag2: "SL: 15%" }}
        />
        <Card
          expire={10000}
          src={Pic}
          title="CELR/USDT"
          desc={{
            desc1: "Target Price 1: 20%",
            desc2: "Target Price 2: 30%",
            desc3: "Target Price 3: 50%",
          }}
          tags={{ tag1: "Long: x10", tag2: "SL: 15%" }}
        />
      </Container>
      <div className="">
        <Footer />
      </div>
    </>
  );
};
export default Signals;
