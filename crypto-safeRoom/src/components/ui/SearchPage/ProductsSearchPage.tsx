import { useEffect, useState } from "react";
import Container from "../Container/Container";
import { IProduct, IProductsSearch } from "../../../Interfaces/Interfaces";
import dummyIMG from "../../../assets/img/logos/images.png";
import CardSearchPage from "./CardSearchPage";

const ProductsSearchPage = ({ query, sortValue }: IProductsSearch) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [sortedProducts, setSortedProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `http://localhost:3000/product/searched/${query}`
      );
      const data: IProduct[] = await response.json();

      setProducts(data);
    };
    fetchProducts();
  }, [query]);

  useEffect(() => {
    if (products.length > 0) {
      switch (sortValue) {
        case "جدید ترین":
          setSortedProducts(
            products.sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            )
          );
          break;
        case "ارزان ترین":
          setSortedProducts(
            products.sort(
              (a, b) =>
                (a.price?.price_after || 0) - (b.price?.price_after || 0)
            )
          );
          break;
        case "گران ترین":
          setSortedProducts(
            products.sort(
              (a, b) =>
                (b.price?.price_after || 0) - (a.price?.price_after || 0)
            )
          );
          break;
        case "فروش ویژه":
          setSortedProducts(
            products.sort((a, b) => Number(b.price?.off) - Number(a.price?.off))
          );
          break;
        default:
          setSortedProducts(products);
      }
    }
  }, [products, sortValue]);

  return (
    <Container dir="" style="border-t border-grey-300 h-screen ">
      <Container dir={`rtl`} style="grid mt-5 grid-cols-5 rounded-xl">
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
    </Container>
  );
};
export default ProductsSearchPage;
