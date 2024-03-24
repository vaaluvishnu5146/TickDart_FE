import "./App.css";
import { Route, Routes } from "react-router-dom";
import Storefront from "./pages/storefront";
import Login from "./pages/login";
import Cart from "./pages/cart";
import Home from "./pages/home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/" Component={Home}>
          <Route Component={Storefront} index />
          <Route path="/cart" Component={Cart} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
