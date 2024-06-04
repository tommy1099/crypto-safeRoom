import { useEffect, useState } from "react";
import { Footer, NavBar } from "..";
import { ScrollToTopIcon } from "../../forms";
import { useSearchParams } from "react-router-dom";
import RightSideProfileMenu from "./RightSideSearchPageeMenu";
import ProductsSearchPage from "./ProductsSearchPage";
import SortSearchPage from "./SortSearchPage";

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortValue, setSortValue] = useState("");
  const [query, setQuery] = useState("");
  useEffect(() => {
    const queryParam = searchParams.get("q");
    if (queryParam) {
      setQuery(queryParam);
    }
    console.log("query...", searchParams);
  }, [query, searchParams]);
  const handlerSortValueFromChild = (value: string) => {
    setSortValue(value);
  };
  return (
    <div className="">
      <NavBar />
      <div className="flex justify-center mt-[6%]">
        <div className="mt-[2%] h-1/2 mr-[12%] w-[82%]">
          <SortSearchPage
            handlerSortValueFromChild={handlerSortValueFromChild}
            query={query}
            numberOfProducts={10}
          />
          <ProductsSearchPage query={query} sortValue={sortValue} />
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
