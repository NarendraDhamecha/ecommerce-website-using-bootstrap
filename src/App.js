import React, { useContext, useState } from "react";
import Products from "./components/products-screen/Products";
import Header from "./components/layout/Header";
import Cart from "./components/cart/Cart";
import CartProvider from "./components/store/CartProvider";
import { Redirect, Route, Switch } from "react-router-dom";
import About from "../src/pages/About";
import HeaderNavbar from "./components/layout/HeaderNavbar";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import AuthContext from "./components/store/auth-contex";

const App = (props) => {
  const [showCart, setCart] = useState(false);
  const authCtx = useContext(AuthContext);

  const showCartHandler = () => {
    setCart(true);
  };

  const closeCartHandler = () => {
    setCart(false);
  };

  return (
    <CartProvider>
      <HeaderNavbar onShowCart={showCartHandler} />
      <Switch>
        <Route path="/contact_us">
          <ContactUs />
        </Route>
        <Route path="/about">
          <Header />
          <About />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        {!authCtx.isLoggedIn && <Route path="/login">
          <Login />
        </Route>}
        <Route path="/store" exact>
          <Header />
          {showCart && <Cart onCloseCart={closeCartHandler} />}
          {authCtx.isLoggedIn && <Products />}
          {!authCtx.isLoggedIn && <Redirect to="/login" />}
        </Route>
        <Route path="/store/:productId">
          <ProductDetails />
        </Route>
      </Switch>
    </CartProvider>
  );
};

export default App;
