import { NavBar, Footer, Button } from "../../components/ui";
import { Container } from "..";
import { Link } from "react-router-dom";

import { Catagories } from "../../components/forms";
const Products = () => {
  return (
    <div className="">
      <NavBar />
      <Catagories />
      <Container
        dir="ltr"
        style=" grid  lg:grid-cols-4 mt-10 mb-[97px] mt-[10%]"
      >
        <Link
          className="m-5 text-[50px] flex justify-center h-[400px] bg-gradient-to-r from-slate-500 to-white"
          to="/"
        >
          <Button onClick={() => {}} style="">
            Miners
          </Button>
        </Link>
        <Link
          className="m-5 text-[50px] flex justify-center h-[400px] bg-gradient-to-r from-slate-500 to-white"
          to="/product/accessories"
        >
          <Button onClick={() => {}} style="">
            Accessories
          </Button>
        </Link>
        <Link
          className="m-5 text-[50px] flex justify-center h-[400px] bg-gradient-to-r from-slate-500 to-white"
          to="/product/wallet"
        >
          <Button onClick={() => {}} style="">
            Wallet
          </Button>
        </Link>
        <Link
          className="m-5 text-[50px] flex justify-center h-[400px] bg-gradient-to-r from-slate-500 to-white"
          to="/product/tutorial_packages"
        >
          <Button onClick={() => {}} style="">
            Tutorial Packs
          </Button>
        </Link>
      </Container>

      <div className="">
        <Footer />
      </div>
    </div>
  );
};
export default Products;
