import { useState, useEffect } from "react";
import { useCart } from "../Context/Cart.context";
import CartItem from "../components/CartItem/CartItem";

export default function Cart() {
  const { items = {} } = useCart();
  const [cartDetails, setCartDetails] = useState({});

  useEffect(() => {
    if (items._id) {
      fetch(`http://localhost:4000/api/cart/${items._id}`)
        .then((response) => response.json())
        .then((result) => setCartDetails(result.data));
    }
  }, [items]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <h1>Cart Items</h1>
          {cartDetails?.products?.map((item, index) => (
            <CartItem
              key={`${item.product.name}-${index}`}
              data={item.product}
            />
          ))}
        </div>
        <div className="col-4">
          <h1>Billing</h1>
        </div>
      </div>
    </div>
  );
}
