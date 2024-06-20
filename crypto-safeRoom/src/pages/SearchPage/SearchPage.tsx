import { useEffect, useState } from "react";
import { Footer, NavBar, PaginationButtons } from "../../components/ui";
import { ScrollToTopIcon } from "../../components/forms";
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
  const [currectPage, setCurrentPage] = useState(1);
  useEffect(() => {
    const queryParam = searchParams.get("q");
    if (queryParam) {
      setQuery(queryParam);
    }
    // setSearchParams("");
    console.log("query...", searchParams);
  }, [query, searchParams, setSearchParams]);
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
  // const handlerIncPageNum = () => {
  //   setCurrentPage((prev) =>
  //     prev <= Math.floor(numberOfProducts / 10) ? prev + 1 : prev
  //   );
  // };

  // const handlerDecPageNum = () => {
  //   setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  // };

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
            where={"search"}
            limit={10}
            page={currectPage}
            filters={filters}
            query={query}
            sortValue={sortValue}
            handlerNumberOfProducts={handlerNumberOfProducts}
          />
          {/* <div className="flex justify-center items-center mt-24 ml-[10%] text-center">
            <PaginationButtons
              isLoaded={false}
              currentPage={currectPage}
              decPage={handlerDecPageNum}
              incPage={handlerIncPageNum}
            />
          </div> */}
        </div>
        <RightSideProfileMenu
          handleSendFiltersFromChild={handleSendFiltersFromChild}
          isSidebarOpen={isSidebarOpen}
        />
      </div>
      <div className="w-screen">
        <Footer />
      </div>
      <div className="fixed bottom-4 left-4">
        <ScrollToTopIcon />
      </div>
    </div>
  );
};
export default SearchPage;
