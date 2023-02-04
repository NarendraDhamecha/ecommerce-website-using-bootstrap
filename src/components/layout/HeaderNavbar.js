import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Button, Container, Nav, Navbar} from "react-bootstrap";
import classes from './Header.module.css'
import CartContext from "../store/Cart-contex";

const HeaderNavbar = (props) => {
    const cartCtx = useContext(CartContext);

  const totalQuantity = cartCtx.items.reduce((sum, currNum) => {
          return sum + Number(currNum.quantity);
  },0)

    return (
        <Navbar className={classes.navbar} sticky="top" bg="black" variant="dark">
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
    )
}

export default HeaderNavbar;