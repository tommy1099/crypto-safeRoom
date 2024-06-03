import { useEffect } from "react";
import { Footer, NavBar } from "..";
import { ScrollToTopIcon } from "../../forms";
import { useSearchParams } from "react-router-dom";
import Container from "../Container/Container";
import RightSideProfileMenu from "./RightSideSearchPageeMenu";
import SortSearchPage from "./SortSearchPage";
import ProductsSearchPage from "./ProductsSearchPage";

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const query = searchParams.get("q");
    console.log("query", query);
  }, [searchParams]);
  return (
    <div className="">
      <NavBar />
      <div className="flex justify-center mt-[6%]">
        <div className="mt-[2%] h-1/2 mr-[12%] w-[82%]">
          <SortSearchPage />
          <ProductsSearchPage query={searchParams.get("q") || ""} />
        </div>

        <RightSideProfileMenu />
      </div>
      <div className="w-screen">
        <Footer />
      </div>
      <div className="fixed left-4 bottom-4">
        {" "}
        <ScrollToTopIcon />
      </div>
    </div>
  );
};
export default SearchPage;
