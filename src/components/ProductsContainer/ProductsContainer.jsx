import ProductCard from "../ProductCard";
import PropTypes from "prop-types";

export default function ProductsContainer({
  products = [],
  handleAddToCart = () => {},
  cart = {},
}) {
  function findCartStatus(product = {}) {
    return cart?.products?.some((d) => d.product == product._id);
  }
  return (
    <section className="container" id="products-container">
      <div className="container-fluid p-5">
        <div className="row">
          {products.map((data, index) => (
            <ProductCard
              key={`${data.name}-${index}`}
              data={data}
              handleAddToCart={handleAddToCart}
              isAddedToCart={findCartStatus(data)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

ProductsContainer.propTypes = {
  products: PropTypes.array,
  handleAddToCart: PropTypes.func,
  cart: PropTypes.object,
};
