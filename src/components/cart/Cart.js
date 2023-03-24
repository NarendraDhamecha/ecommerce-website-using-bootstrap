import React, { useContext } from "react";
import CartItems from "./CartItems";
import { CloseButton, Modal, ModalBody } from "react-bootstrap";
import ModalOverlay from "../UI/ModalOverlays";
import "./Cart.css";
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
          <div className="cart">
            <span className="mx-4">Item</span>
            <span className="mx-5">Price</span>
            <span className="ms-1">Quantity</span>
          </div>
          <CartItems items={cartCtx.items} />
          <div className="total_amount">
            <span>{`Total: $${totalAmount}`}</span>
            <span><button className="btn btn-success btn-sm">Order</button></span>
          </div>
        </ModalBody>
      </Modal.Dialog>
    </ModalOverlay>
  );
};

export default Cart;
