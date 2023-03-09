import React, { useContext } from "react";
import CartItems from "./CartItems";
import { Button, CloseButton, Col, Modal, ModalBody, Row } from "react-bootstrap";
import ModalOverlay from "../UI/ModalOverlays";
import classes from "./Cart.module.css";
import CartContext from "../store/Cart-contex";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.items.reduce((sum, item) => {
      return sum + (item.price) * (item.quantity);
  },0)

  return (
    <ModalOverlay>
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Cart</Modal.Title>
          <CloseButton onClick={props.onCloseCart} />
        </Modal.Header>
        <ModalBody>
          <Row className={`mb-3 ${classes.cart}`}>
            <Col>Item</Col>
            <Col>Price</Col>
            <Col>Quantity</Col>
          </Row>
          <CartItems items={cartCtx.items} />
          <Row className={`mt-3 ${classes.total_amount}`}>
            <Col className="offset-5">{`Total: $${totalAmount}`}</Col>
            <Col><Button variant="outline-light" size="sm">Order</Button></Col>
          </Row>
        </ModalBody>
      </Modal.Dialog>
    </ModalOverlay>
  );
};

export default Cart;
