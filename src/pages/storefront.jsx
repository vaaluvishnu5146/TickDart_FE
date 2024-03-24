import { useCart } from "../Context/Cart.context";
import { useProducts } from "../Context/Products.context";
import ProductsContainer from "../components/ProductsContainer/ProductsContainer";

export default function Storefront() {
  const { products = [] } = useProducts();
  const { items = {}, handleAddToCart, handleUpdateCart } = useCart();

  return (
    <ProductsContainer
      products={products}
      handleAddToCart={items?._id ? handleUpdateCart : handleAddToCart}
      cart={items}
    />
  );
}
