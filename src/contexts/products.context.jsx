import { createContext, useEffect, useState } from "react";
import SHOP_DATA from "../shop-data.json";

export const ProductsContext = createContext({
  products: [],
  //   setProducts: () => null,
});

export const ProductsProvider = ({ children }) => {
  console.log(SHOP_DATA);
  const [products, setProducts] = useState(SHOP_DATA);
  //   const [products, setProducts] = useState([]);
  const value = { products };

  useEffect(() => {
    console.log("Getting shop data");
    setProducts(SHOP_DATA);
  }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
