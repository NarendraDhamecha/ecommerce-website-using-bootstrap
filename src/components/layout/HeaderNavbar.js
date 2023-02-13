import React, { useContext } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import classes from "./Header.module.css";
import CartContext from "../store/Cart-contex";
import AuthContext from "../store/auth-contex";

const HeaderNavbar = (props) => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const location = useLocation();
  
  const totalQuantity = cartCtx.items.reduce((sum, currNum) => {
    return sum + Number(currNum.quantity);
  }, 0);

  const logoutHandler = () => {
    authCtx.logout();
    history.replace("/login");
  };

  return (
    <Navbar className={classes.navbar} sticky="top" bg="black" variant="dark">
      <Container>
        <Nav>
          <NavLink className="nav-link" to="/home">
            HOME
          </NavLink>
          <NavLink className="nav-link" to="/store">
            STORE
          </NavLink>
          <NavLink className="nav-link" to="/about">
            ABOUT
          </NavLink>
          <NavLink className="nav-link" to="/contact_us">
            CONTACT US
          </NavLink>
          {!authCtx.isLoggedIn && (
            <NavLink className="nav-link " to="/login">
              LOG IN
            </NavLink>
          )}
        </Nav>
        <Nav>
          {location.pathname === "/store" && <Button
            className="me-3"
            variant="outline-secondary"
            onClick={props.onShowCart}
          >
            <span className={classes.icon}></span>
            <span>Cart</span>
            <span className={classes.badge}>{totalQuantity}</span>
          </Button>}
          {authCtx.isLoggedIn && <Button onClick={logoutHandler} size="sm" variant="secondary">
            LOG OUT
          </Button>}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default HeaderNavbar;
