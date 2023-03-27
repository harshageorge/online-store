import React, { useContext } from "react";
import { Product } from "./product";
import "./shop.css";
import { ShopBoxWrapper } from "../../styles/shop";
import { ShopContext } from "../../context/shop-context";

export const Shop = () => {
  const { search, allProductData } = useContext(ShopContext);

  return (
    <ShopBoxWrapper>
      {allProductData
        .filter((item) => {
          return search.toLowerCase() === ""
            ? item
            : item.title.toLowerCase().includes(search);
        })
        .map((product) => (
          <Product data={product} key={product.id} />
        ))}
    </ShopBoxWrapper>
  );
};
