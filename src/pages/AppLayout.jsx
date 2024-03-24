import NavBar from "../components/Header";
import Billboard from "../components/Billboard/index";
import Footer from "../components/Footer/index";
import { useCart } from "../Context/Cart.context";
import PropTypes from "prop-types";

export default function AppLayout({ children }) {
  const { items = {} } = useCart();
  return (
    <main>
      <NavBar quantity={items?.products?.length} />
      <Billboard />
      {children}
      <Footer />
    </main>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node,
};
