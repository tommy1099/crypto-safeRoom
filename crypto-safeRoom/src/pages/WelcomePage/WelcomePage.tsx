import { Shape } from "../../components/ui";
import { HelloHero } from "../../components/forms";
import { BsCurrencyBitcoin } from "react-icons/bs";

const WelcomePage = () => {
  return (
    <>
      <HelloHero />
      <Shape>
        <BsCurrencyBitcoin
          style={{
            color: "white",
            posision: "absolute",
            marginTop: "-30%",

            fontSize: "750px",
          }}
        />
      </Shape>
    </>
  );
};

export default WelcomePage;
