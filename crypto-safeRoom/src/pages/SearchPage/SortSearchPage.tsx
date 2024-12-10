import { useEffect, useState } from "react";
import Container from "../../components/ui/Container/Container";
import { BsSortDown } from "react-icons/bs";
import { useSearchParams } from "react-router-dom";
import { ISortedSearch } from "../../Interfaces/Interfaces";
import { IoIosClose } from "react-icons/io";
import { FiFilter } from "react-icons/fi";

const SortSearchPage = ({
  query,
  handlerSortValueFromChild,
  toggleSidebar,
  isSidebarOpen,
}: ISortedSearch) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortParam = searchParams.get("sort") || "newest";
  const [selectedSort, setSelectedSort] = useState(() => {
    switch (sortParam) {
      case "cheapest":
        return "ارزان ترین";
      case "expensive":
        return "گران ترین";
      case "featured":
        return "فروش ویژه";
      default:
        return "جدید ترین";
    }
  });
  const handleSortClick = (sort: string) => {
    setSelectedSort(sort);
    updateURL(sort);
  };

  useEffect(() => {
    updateURL(selectedSort);
  }, [selectedSort]);
  const updateURL = (sort: string) => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (query) {
      newSearchParams.set("q", query);
    }

    switch (sort) {
      case "جدید ترین":
        newSearchParams.set("sort", "newest");
        break;
      case "ارزان ترین":
        newSearchParams.set("sort", "cheapest");
        break;
      case "گران ترین":
        newSearchParams.set("sort", "expensive");
        break;
      case "فروش ویژه":
        newSearchParams.set("sort", "featured");
        break;
      default:
        newSearchParams.delete("sort");
        break;
    }

    handlerSortValueFromChild(sort);
    setSearchParams(newSearchParams);
  };

  //  const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
  //     window.history.replaceState(null, "", newUrl);
  //   };
  return (
    <Container
      dir="rtl"
      style=" text-xs flex items-center mt-20 md:mt-24 lg:mt-20  overflow-x-auto overflow-y-hidden h-12 w-full px-4 "
    >
      <button className="ml-2 md:hidden" onClick={toggleSidebar}>
        {isSidebarOpen ? <IoIosClose size={20} /> : <FiFilter size={20} />}
      </button>
      <div className="flex gap-5">
        <div className="font-bold flex items-center gap-2 w-[100px]">
          <div className="text-xl">
            <BsSortDown />
          </div>
          مرتب سازی:
        </div>

        <div
          className={`cursor-pointer w-[70px] ${
            selectedSort === "جدید ترین"
              ? "text-red-500 border-b-4 p-2 border-red-500 rounded-sm"
              : "  border-b-4 p-2 border-base-100"
          }`}
          onClick={() => handleSortClick("جدید ترین")}
        >
          جدید ترین
        </div>
        <div
          className={`cursor-pointer w-[70px] ${
            selectedSort === "ارزان ترین"
              ? "text-red-500 border-b-4 p-2 border-red-500 rounded-sm"
              : "text-gray-500 border-b-4 p-2 border-base-100"
          }`}
          onClick={() => handleSortClick("ارزان ترین")}
        >
          ارزان ترین
        </div>
        <div
          className={`cursor-pointer w-[70px] ${
            selectedSort === "گران ترین"
              ? "text-red-500 border-b-4 p-2 border-red-500 rounded-sm"
              : "text-gray-500 border-b-4 p-2 border-base-100"
          }`}
          onClick={() => handleSortClick("گران ترین")}
        >
          گران ترین
        </div>
        <div
          className={`cursor-pointer w-[80px] ${
            selectedSort === "فروش ویژه"
              ? "text-red-500 border-b-4 p-2 border-red-500 rounded-sm"
              : "text-gray-500 border-b-4 p-2 border-base-100"
          }`}
          onClick={() => handleSortClick("فروش ویژه")}
        >
          فروش ویژه
        </div>
      </div>
    </Container>
  );
};

export default SortSearchPage;
