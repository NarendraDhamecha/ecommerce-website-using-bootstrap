import React, { useContext } from "react";
import CartItems from "./CartItems";
import { CloseButton, Col, Modal, ModalBody, Row } from "react-bootstrap";
import ModalOverlay from "../UI/ModalOverlays";
import classes from "./Cart.module.css";
import CartContext from "../store/Cart-contex";
import { useEffect } from "react";
import AuthContext from "../store/auth-contex";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <ModalOverlay>
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Cart</Modal.Title>
          <CloseButton onClick={props.onCloseCart} />
        </Modal.Header>
        <ModalBody>
          <Row className={classes.cart}>
            <Col>Item</Col>
            <Col>Price</Col>
            <Col>Quantity</Col>
          </Row>
          <CartItems items={cartCtx.items} />
        </ModalBody>
      </Modal.Dialog>
    </ModalOverlay>
  );
};

export default Cart;
