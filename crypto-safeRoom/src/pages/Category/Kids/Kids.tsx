import { useEffect, useState } from "react";
import { Footer, NavBar } from "@/components/ui";
import { ScrollToTopIcon } from "@/components/forms";
import { useNavigate, useSearchParams } from "react-router-dom";
import KidsCategoryCards from "./KidsCategoryCards";
import ProductKidsPage from "./ProductKidsPage";

const Kids = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState("");
  useEffect(() => {
    const queryParam = searchParams.get("q");
    if (queryParam) {
      setQuery(queryParam);
    }
    // setSearchParams("");
    console.log("query...", searchParams);
  }, [query, searchParams, setSearchParams]);

  return (
    <div className="">
      <NavBar />

      <div className="flex flex-col items-center pt-[10%] justify-center">
        <KidsCategoryCards />
        <div className=" overflow-x-auto mt-10 md:w-[82%] h-full">
          <div
            onClick={() => navigate("/product/category/kids/all")}
            className="flex mr-2 mb-4 cursor-pointer hover:text-red-500"
            dir="rtl"
          >
            مشاهده همه
          </div>
          <ProductKidsPage />
        </div>
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
export default Kids;
