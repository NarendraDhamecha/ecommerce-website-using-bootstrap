import React, { useContext } from "react";
import { Button, Container, Nav, Navbar, Row } from "react-bootstrap";
import classes from './Header.module.css'
import CartContext from "../store/Cart-contex";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const cartCtx = useContext(CartContext);

  const totalQuantity = cartCtx.items.reduce((sum, currNum) => {
          return sum + Number(currNum.quantity);
  },0)

  return (
    <>
      <Navbar className={classes.navbar} bg="black" variant="dark">
        <Container>
          <Nav>
            <NavLink className="nav-link" to="/home">HOME</NavLink>
            <NavLink className="nav-link" to="/store">STORE</NavLink>
            <NavLink className="nav-link" to="/about">ABOUT</NavLink>
          </Nav>
          <Button variant="outline-secondary" onClick={props.onShowCart}>
            <span className={classes.icon}></span>
            <span>Cart</span>
            <span className={classes.badge}>{totalQuantity}</span>
          </Button>
        </Container>
      </Navbar>
      <Row className={classes.header}>
        <h1>The Generics</h1>
      </Row>
    </>
  );
};

export default Header;
