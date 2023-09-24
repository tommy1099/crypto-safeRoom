import Shape from "../../components/ui/Shape/Shape";
import HelloHero from "../../components/forms/HelloHero/HelloHero";
import { SiBitcoincash } from "react-icons/si";

const WelcomePage = () => {
  return (
    <>
      <HelloHero />
      <Shape>
        <SiBitcoincash
          style={{
            color: "white",
            position: "fixed",
            top: "10px",
            left: "650px",
            fontSize: "750px",
          }}
        />
      </Shape>
    </>
  );
};

export default WelcomePage;
