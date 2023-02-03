import React, { Fragment, useState } from "react";
import "./App.css";
import Products from "./components/products-screen/Products";
import Header from "./components/layout/Header";
import Cart from "./components/cart/Cart";
import CartProvider from "./components/store/CartProvider";

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
      {showCart && <Cart onCloseCart={closeCartHandler} />}
      <Products />
    </CartProvider>
  );
};

export default App;
