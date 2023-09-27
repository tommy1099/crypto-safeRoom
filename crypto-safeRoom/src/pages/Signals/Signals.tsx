import { Container } from "..";
import { NavBar, Footer, Card } from "../../components/ui";
import Pic from "../../assets/img/proxy-image.jpg";

const Signals = () => {
  return (
    <>
      <NavBar />
      <div className="bg-white shadow-2xl z-10 rounded-md fixed top-[10%] w-[15%] p-10 h-screen right-[0%]">
        <div className=" form-control">
          <label className=" label cursor-pointer">
            <span className="label-text">Active</span>
            <input type="checkbox" className="toggle" checked />
            <span className="label-text">All</span>
          </label>
        </div>
      </div>
      <Container style=" grid grid-cols-5 p-5 ml-[5%] mr-[15%] mt-[3%]">
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
