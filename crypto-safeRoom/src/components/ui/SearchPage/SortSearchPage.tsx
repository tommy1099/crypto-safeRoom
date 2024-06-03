import { useState } from "react";
import Container from "../Container/Container";
import { BsSortDown } from "react-icons/bs";

const SortSearchPage = () => {
  const [selectedSort, setSelectedSort] = useState("جدید");

  const handleSortClick = (sort: string) => {
    setSelectedSort(sort);
  };

  return (
    <Container
      dir="rtl"
      style=" text-sm flex justify-between items-center px-5  w-full h-12"
    >
      <div className="flex gap-10">
        <div className="font-bold flex items-center gap-2">
          <div className="text-xl">
            <BsSortDown />
          </div>
          مرتب سازی:
        </div>

        <div
          className={`cursor-pointer ${
            selectedSort === "جدید"
              ? "text-red-500 border-b-4 p-2 border-red-500 rounded-sm"
              : "  border-b-4 p-2 border-base-100"
          }`}
          onClick={() => handleSortClick("جدید")}
        >
          جدید
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
      <div className="text-gray-400">۵۰ کالا</div>
    </Container>
  );
};

export default SortSearchPage;
