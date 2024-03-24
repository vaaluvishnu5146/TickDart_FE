import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const CartContext = createContext({
  items: {},
  handleAddToCart: () => {},
  handleUpdateCart: () => {},
});

export const useCart = () => useContext(CartContext);

export function CartContextProvider({ children }) {
  const [items, setItems] = useState({});
  const cartDetails = JSON.parse(localStorage.getItem("tempCart")) || {};

  function handleAddToCart(data = {}) {
    const URI = "http://localhost:4000/api/cart/create";
    fetch(URI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: "65fe9fe6ed0b6d7babe993e0",
        products: [
          {
            quantity: 1,
            product: data._id,
          },
        ],
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success && result.cart) {
          localStorage.setItem("tempCart", JSON.stringify(result.cart));
          setItems(result.cart);
        }
      })
      .catch((error) => console.log(error));
  }

  function handleUpdateCart(data = {}) {
    try {
      if (cartDetails._id) {
        const URI = `http://localhost:4000/api/cart/update/${cartDetails._id}`;
        fetch(URI, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            products: [
              ...cartDetails.products,
              {
                product: data._id,
                quantity: 1,
              },
            ],
          }),
        })
          .then((response) => response.json())
          .then((result) => {
            if (result.success && result.cart) {
              localStorage.setItem("tempCart", JSON.stringify(result.cart));
              setItems(result.cart);
            }
          })
          .catch((error) => console.log(error));
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (cartDetails) {
      setItems(cartDetails);
    }
  }, []);

  return (
    <CartContext.Provider value={{ items, handleAddToCart, handleUpdateCart }}>
      {children}
    </CartContext.Provider>
  );
}

CartContextProvider.propTypes = {
  children: PropTypes.node,
};
