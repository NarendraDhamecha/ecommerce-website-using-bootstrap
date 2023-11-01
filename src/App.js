import React, { lazy, Suspense, useContext, useState } from "react";
import Products from "./components/products-screen/Products";
import Header from "./components/layout/Header";
import Cart from "./components/cart/Cart";
import CartProvider from "./components/store/CartProvider";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import HeaderNavbar from "./components/layout/HeaderNavbar";
import Login from "./pages/Login";
import AuthContext from "./components/store/auth-contex";
import Footer from "./components/layout/Footer";
import "./App.css";

const ContactUs = lazy(() => import("./pages/ContactUs"));
const About = lazy(() => import("./pages/About"));
const Home = lazy(() => import("./pages/Home"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));

const App = () => {
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
      {location.pathname !== "/home" &&
        location.pathname !== "/store/details" && <Header />}
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/contact_us">
          <Suspense>
            <ContactUs />
          </Suspense>
        </Route>
        <Route path="/about">
          <Suspense>
            <About />
          </Suspense>
        </Route>
        <Route path="/home">
          <Suspense>
            <Home />
          </Suspense>
        </Route>
        {!authCtx.isLoggedIn && (
          <Route path="/login">
            <Login />
          </Route>
        )}
        <Route path="/store" exact>
          {showCart && <Cart onCloseCart={closeCartHandler} />}
          {authCtx.isLoggedIn && <Products />}
          {!authCtx.isLoggedIn && <Redirect to="/login" />}
        </Route>
        <Route path="/store/:productId">
          <Suspense>
            <ProductDetails />
          </Suspense>
        </Route>
      </Switch>
      <Footer />
    </CartProvider>
  );
};

export default App;
