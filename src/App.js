import React, { useState } from "react";
import Products from "./components/products-screen/Products";
import Header from "./components/layout/Header";
import Cart from "./components/cart/Cart";
import CartProvider from "./components/store/CartProvider";
import { Route } from "react-router-dom";
import About from "../src/pages/About";
import HeaderNavbar from "./components/layout/HeaderNavbar";
import Home from "./pages/Home";

const App = (props) => {
  const [showCart, setCart] = useState(false);

  const showCartHandler = () => {
    setCart(true);
  };

  const closeCartHandler = () => {
    setCart(false);
  };

  return (
    <CartProvider>
      <HeaderNavbar onShowCart={showCartHandler} />
      <Route path="/about">
        <Header />
        <About />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/store">
        <Header />
        {showCart && <Cart onCloseCart={closeCartHandler} />}
        <Products />
      </Route>
    </CartProvider>
  );
};

export default App;
