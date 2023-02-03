import React, { useState } from "react";
import Products from "./components/products-screen/Products";
import Header from "./components/layout/Header";
import Cart from "./components/cart/Cart";
import CartProvider from "./components/store/CartProvider";
import { Route } from "react-router-dom";
import About from "../src/pages/About";

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
      <Header onShowCart={showCartHandler} />
      <Route path="/about">
        <About />
      </Route>
      <Route path="/store">
        {/* <Header onShowCart={showCartHandler} /> */}
        {showCart && <Cart onCloseCart={closeCartHandler} />}
        <Products />
      </Route>
    </CartProvider>
  );
};

export default App;
