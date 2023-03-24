import React, { useContext } from "react";
import { Row, Col, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import CartContext from "../store/Cart-contex";
import "./CartItems.css";

const CartItems = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <ListGroup variant="flush" className="list">
      {props.items.map((item) => {
        return (
          <ListGroupItem key={item.id}>
            <Row>
              <Col>
                <img className="img-thumbnail" src={item.imageUrl} alt="..."/>
                {item.title}
              </Col>
              <Col>{`$${item.price}`}</Col>
              <Col>{`x${item.quantity}`}</Col>
              <Col>
                <Button onClick={() => cartCtx.removeItem(item._id)} variant="outline-danger" size="sm">
                  Remove
                </Button>
              </Col>
            </Row>
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
};

export default CartItems;
