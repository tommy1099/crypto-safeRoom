import { useEffect, useState } from "react";
import Container from "../Container/Container";
import { IProduct, IProductsSearch } from "../../../Interfaces/Interfaces";
import dummyIMG from "../../../assets/img/logos/images.png";
import CardSearchPage from "./CardSearchPage";

const ProductsSearchPage = ({ query }: IProductsSearch) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `http://localhost:3000/product/searched/${query}`
      );
      const data: IProduct[] = await response.json();

      setProducts(data);
    };
    fetchProducts();
  }, []);
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
