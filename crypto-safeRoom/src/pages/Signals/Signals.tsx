import { Container } from "..";
import { NavBar, Footer, Card } from "../../components/ui";
import Pic from "../../assets/img/proxy-image.jpg";

const Signals = () => {
  return (
    <>
      <NavBar />
      <Container style="rounded-lg shadow-2xl absolute box-border z-10 bg-white max-w-screen overflow-x-auto">
        <div className="pt-[5%] h-screen">
          <div className="z-2 fixed right-[5%] ">
            <div className=" form-control">
              <label className="gap-4 label cursor-pointer">
                <span className="label-text">Active</span>
                <input type="checkbox" className="toggle" checked />
                <span className="label-text">All</span>
              </label>
            </div>
          </div>
          <Container style="gap-5 grid grid-cols-4 justify-start ml-20 mt-20">
            {/* remove ================================================= */}
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
              expire={5000}
              src={Pic}
              title="CELR/USDT"
              desc={{
                desc1: "Target Price 1: 20%",
                desc2: "Target Price 2: 30%",
                desc3: "Target Price 3: 50%",
              }}
              tags={{ tag1: "Long: x10", tag2: "SL: 15%" }}
            />
            {/* remove ================================================= */}
          </Container>
          <div className="">
            <Footer />
          </div>
        </div>
      </Container>
    </>
  );
};
export default Signals;
