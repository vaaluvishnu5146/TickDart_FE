import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const ProductContext = createContext({
  products: [],
  setProducts: () => {},
});

export const useProducts = () => useContext(ProductContext);

export function ProductContextProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/products?page=1&limit=10")
      .then((response) => response.json())
      .then((result) => {
        if (result.data.length > 0) {
          setProducts(result.data);
        }
      })
      .catch((error) => console.log(error));
    return () => {};
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
}

ProductContextProvider.propTypes = {
  children: PropTypes.node,
};
