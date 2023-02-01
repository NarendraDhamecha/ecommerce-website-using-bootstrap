import React, { useState } from "react";
import "./App.css";
import Products from "./components/products-screen/Products";
import Header from "./components/header/Header";
import Cart from "./components/cart/Cart"

const App = (props) => {
  const [showCart, setCart] = useState(false);

  const showCartHandler = () => {
    setCart(true);
  }

  const closeCartHandler = () => {
    setCart(false);
  }

  return (
    <>
      <Header onShowCart={showCartHandler}/>
       {showCart && <Cart onCloseCart={closeCartHandler}/>}
      <Products/>
    </>
  );
};

export default App;
