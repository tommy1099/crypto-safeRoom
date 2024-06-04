import { useEffect, useState } from "react";
import Container from "../Container/Container";
import { BsSortDown } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { ISortedSearch } from "../../../Interfaces/Interfaces";

const SortSearchPage = ({
  query,
  handlerSortValueFromChild,
  numberOfProducts,
}: ISortedSearch) => {
  const [selectedSort, setSelectedSort] = useState("جدید");
  const navigate = useNavigate();
  const handleSortClick = (sort: string) => {
    setSelectedSort(sort);
    updateURL(sort);
  };
  useEffect(() => {
    updateURL(selectedSort);
  }, [selectedSort]);
  const updateURL = (sort: string) => {
    let url = "/search";
    const searchParams = new URLSearchParams();

    if (query) {
      searchParams.set("q", query);
    }

    switch (sort) {
      case "جدید ترین":
        searchParams.set("sort", "newest");
        break;
      case "ارزان ترین":
        searchParams.set("sort", "cheapest");
        break;
      case "گران ترین":
        searchParams.set("sort", "expensive");
        break;
      case "فروش ویژه":
        searchParams.set("sort", "featured");
        break;
      default:
        break;
    }
    handlerSortValueFromChild(sort);
    url += `?${searchParams.toString()}`;
    navigate(url);
  };

  return (
    <Container
      dir="rtl"
      style=" text-sm flex justify-between items-center px-5  w-full h-12"
    >
      <div className="flex gap-5">
        <div className="font-bold flex items-center gap-2">
          <div className="text-xl">
            <BsSortDown />
          </div>
          مرتب سازی:
        </div>

        <div
          className={`cursor-pointer ${
            selectedSort === "جدید ترین"
              ? "text-red-500 border-b-4 p-2 border-red-500 rounded-sm"
              : "  border-b-4 p-2 border-base-100"
          }`}
          onClick={() => handleSortClick("جدید ترین")}
        >
          جدید ترین
        </div>
        <div
          className={`cursor-pointer ${
            selectedSort === "ارزان ترین"
              ? "text-red-500 border-b-4 p-2 border-red-500 rounded-sm"
              : "text-gray-500 border-b-4 p-2 border-base-100"
          }`}
          onClick={() => handleSortClick("ارزان ترین")}
        >
          ارزان ترین
        </div>
        <div
          className={`cursor-pointer ${
            selectedSort === "گران ترین"
              ? "text-red-500 border-b-4 p-2 border-red-500 rounded-sm"
              : "text-gray-500 border-b-4 p-2 border-base-100"
          }`}
          onClick={() => handleSortClick("گران ترین")}
        >
          گران ترین
        </div>
        <div
          className={`cursor-pointer ${
            selectedSort === "فروش ویژه"
              ? "text-red-500 border-b-4 p-2 border-red-500 rounded-sm"
              : "text-gray-500 border-b-4 p-2 border-base-100"
          }`}
          onClick={() => handleSortClick("فروش ویژه")}
        >
          فروش ویژه
        </div>
      </div>
      <div className="text-gray-400">{numberOfProducts} کالا</div>
    </Container>
  );
};

export default SortSearchPage;
