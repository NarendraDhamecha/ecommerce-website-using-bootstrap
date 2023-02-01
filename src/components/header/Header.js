import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

const Header = (props) => {
    return (
        <Navbar bg="dark" expand="sm" variant="dark">
           <Container>
           <Nav>
           <Nav.Link href="#home">HOME</Nav.Link>
           <Nav.Link href="#store">STORE</Nav.Link>
           <Nav.Link href="#about">ABOUT</Nav.Link>
           </Nav>
           <Button onClick={props.onShowCart}>Cart</Button>
           </Container>
        </Navbar>
    )
}

export default Header;