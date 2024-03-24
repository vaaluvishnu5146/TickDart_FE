import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductContextProvider } from "./Context/Products.context.jsx";
import { CartContextProvider } from "./Context/Cart.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductContextProvider>
    <CartContextProvider>
      <Router>
        <App />
      </Router>
    </CartContextProvider>
  </ProductContextProvider>
);
