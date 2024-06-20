import { useEffect, useState } from "react";
import { Container } from "@/pages";
import { IProduct } from "../../../Interfaces/Interfaces";
import dummyIMG from "../../../assets/img/logos/images.png";
import CardSearchPage from "@/pages/SearchPage/CardSearchPage";
import { SkeletonCard } from "@/components/ui";
import { useSearchParams } from "react-router-dom";
import emptyImg from "../../../assets/img/logos/empty_state.png";

const ProductDicountedPage = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [showSkeleton, setShowSkeleton] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = searchParams.get("q") || "";
      console.log("queryInUseEffect: ", query);
      setProducts([]);
      setShowSkeleton(true);
      // const allProduct = `http://localhost:3000/product/searched/all`;
      // const url = `http://localhost:3000/product/searched/${query}/${
      //   page ? page : 1
      // }/${limit ? limit : 10}`;
      const response = await fetch(`http://localhost:3000/product/discounted`);
      if (response.ok) {
        const { results } = await response.json();
        console.log("products: ", results);
        setProducts(results);
        setShowSkeleton(false);
      }
    };
    fetchProducts();
  }, [searchParams]);

  return (
    <Container dir="" style={`h-full`}>
      {!showSkeleton && products.length <= 0 && (
        <div className="flex justify-center items-center h-full text-center">
          <p className="p-2 pr-5 border-r-2">چیزی یافت نشد</p>
          <img src={emptyImg} alt="" className="w-[400px] " />
        </div>
      )}
      {!showSkeleton ? (
        <Container
          dir={`rtl`}
          style="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 rounded-xl gap-2"
        >
          {products?.map((item, index) => (
            <CardSearchPage
              key={index}
              url={item.url}
              type={item.type}
              general_info={item.general_info}
              tags={item.tags}
              price={item.price}
              tombnailImg={dummyIMG}
            />
          ))}
        </Container>
      ) : (
        <Container
          dir={`rtl`}
          style="grid mt-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 rounded-xl gap-2"
        >
          {Array.from({ length: 10 }, (_, i) => (
            <SkeletonCard key={i} />
          ))}
        </Container>
      )}
    </Container>
  );
};
export default ProductDicountedPage;
