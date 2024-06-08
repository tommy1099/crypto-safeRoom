import { useEffect, useState } from "react";
import Container from "../Container/Container";
import {
  FilterOption,
  IProduct,
  IProductsSearch,
} from "../../../Interfaces/Interfaces";
import dummyIMG from "../../../assets/img/logos/images.png";
import CardSearchPage from "./CardSearchPage";
import { SkeletonCard } from "..";
const ProductsSearchPage = ({ query, sortValue, filters }: IProductsSearch) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [sortedProducts, setSortedProducts] = useState<IProduct[]>([]);
  const [showSkeleton, setShowSkeleton] = useState<boolean>(true);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  //===================================================
  const applyFilters = (
    products: IProduct[],
    filters: Record<string, FilterOption[]>
  ): IProduct[] => {
    return products.filter((product) => {
      return Object.keys(filters).every((key) => {
        const filterOptions = filters[key];
        if (filterOptions.length === 0) return true;

        return filterOptions.some(() => {
          if (key === "brands" && product.detailedInfo?.brand) {
            return filterOptions.some(
              (filterOption) => product.detailedInfo?.brand === filterOption.id
            );
          }
          if (key === "sizes" && product.general_info?.size) {
            return filterOptions.some(
              (filterOption) => product.general_info?.size === filterOption.id
            );
          }
          if (key === "colors" && product.detailedInfo?.color) {
            return filterOptions.some(
              (filterOption) => product.detailedInfo?.color === filterOption.id
            );
          }
          if (key === "countries" && product.detailedInfo?.country) {
            return filterOptions.some(
              (filterOption) =>
                product.detailedInfo?.country === filterOption.id
            );
          }
          if (key === "textures" && product.texture) {
            return filterOptions.some(
              (filterOption) => product.texture === filterOption.id
            );
          }
          if (key === "usages" && product.type) {
            return filterOptions.some(
              (filterOption) => product.type === filterOption.id
            );
          }
          return true;
        });
      });
    });
  };

  //===================================================

  useEffect(() => {
    const fetchProducts = async () => {
      setProducts([]);
      setShowSkeleton(true);

      const response = await fetch(
        `http://localhost:3000/product/searched/${query}`
      );
      if (response.ok) {
        const data: IProduct[] = await response.json();
        setProducts(data);
        setShowSkeleton(false);
        setFilteredProducts(applyFilters(data, filters || {}));
      }
    };
    fetchProducts();
  }, [filters, query]);

  useEffect(() => {
    setFilteredProducts(applyFilters(products, filters || {}));
  }, [filters, products]);

  useEffect(() => {
    if (filteredProducts.length > 0) {
      switch (sortValue) {
        case "جدید ترین":
          setSortedProducts(
            filteredProducts.sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            )
          );
          break;
        case "ارزان ترین":
          setSortedProducts(
            filteredProducts.sort(
              (a, b) =>
                (a.price?.price_after || 0) - (b.price?.price_after || 0)
            )
          );
          break;
        case "گران ترین":
          setSortedProducts(
            filteredProducts.sort(
              (a, b) =>
                (b.price?.price_after || 0) - (a.price?.price_after || 0)
            )
          );
          break;
        case "فروش ویژه":
          setSortedProducts(
            filteredProducts.sort(
              (a, b) => Number(b.price?.off) - Number(a.price?.off)
            )
          );
          break;
        default:
          setSortedProducts(filteredProducts);
      }
    }
  }, [filteredProducts, sortValue]);

  return (
    <Container dir="" style="border-t border-grey-300 h-full">
      {" "}
      <div className="text-gray-400 text-sm ml-2 my-2">
        {filteredProducts.length} کالا
      </div>
      {!showSkeleton ? (
        <Container
          dir={`rtl`}
          style="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 rounded-xl gap-2"
        >
          {" "}
          {filteredProducts?.map((item, index) => (
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
export default ProductsSearchPage;
