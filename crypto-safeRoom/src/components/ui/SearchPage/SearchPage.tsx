import { useEffect, useState } from "react";
import { Footer, NavBar } from "..";
import { ScrollToTopIcon } from "../../forms";
import { useSearchParams } from "react-router-dom";
import RightSideProfileMenu from "./RightSideSearchPageeMenu";
import ProductsSearchPage from "./ProductsSearchPage";
import SortSearchPage from "./SortSearchPage";
import { FilterOption } from "@/Interfaces/Interfaces";

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [numberOfProducts, setNumberOfProducts] = useState(0);
  const [sortValue, setSortValue] = useState("");
  const [query, setQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [filters, setFilters] = useState<Record<string, FilterOption[]>>();
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
  const handlerNumberOfProducts = (num: number) => {
    setNumberOfProducts(num);
  };
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleSendFiltersFromChild = (data: Record<string, FilterOption[]>) => {
    setFilters(data);
  };
  return (
    <div className="">
      <NavBar />
      <div className="flex justify-center mt-[5%]">
        <div className=" overflow-x-auto md:w-[82%] h-full">
          <SortSearchPage
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
            handlerSortValueFromChild={handlerSortValueFromChild}
            query={query}
            numberOfProducts={numberOfProducts}
          />
          <ProductsSearchPage
            filters={filters}
            query={query}
            sortValue={sortValue}
            handlerNumberOfProducts={handlerNumberOfProducts}
          />
        </div>
        <RightSideProfileMenu
          handleSendFiltersFromChild={handleSendFiltersFromChild}
          isSidebarOpen={isSidebarOpen}
        />
      </div>
      <div className="w-screen">
        <Footer />
      </div>
      <div className="fixed left-4 bottom-4">
        <ScrollToTopIcon />
      </div>
    </div>
  );
};
export default SearchPage;
