import React, { lazy, Suspense, useContext, useState } from "react";
import Products from "./components/products-screen/Products";
import Header from "./components/layout/Header";
import Cart from "./components/cart/Cart";
import CartProvider from "./components/store/CartProvider";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import About from "../src/pages/About";
import HeaderNavbar from "./components/layout/HeaderNavbar";
import Home from "./pages/Home";
// import ContactUs from "./pages/ContactUs";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import AuthContext from "./components/store/auth-contex";
import Footer from "./components/layout/Footer";
import "./App.css";

const ContactUs = lazy(() => import("./pages/ContactUs"));

const App = (props) => {
  const [showCart, setCart] = useState(false);
  const authCtx = useContext(AuthContext);
  const location = useLocation();

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
          <Header />
          <Suspense>
            <ContactUs />
          </Suspense>
        </Route>
        <Route path="/about">
          <Header />
          <About />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        {!authCtx.isLoggedIn && (
          <Route path="/login">
            <Header />
            <Login />
          </Route>
        )}
        <Route path="/store" exact>
          <Header />
          {showCart && <Cart onCloseCart={closeCartHandler} />}
          {authCtx.isLoggedIn && <Products />}
          {!authCtx.isLoggedIn && <Redirect to="/login" />}
        </Route>
        <Route path="/store/:productId">
          <ProductDetails />
        </Route>
        <Route path="*"></Route>
      </Switch>
      {location.pathname !== "/" && <Footer />}
    </CartProvider>
  );
};

export default App;
