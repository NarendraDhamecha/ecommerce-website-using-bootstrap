import React, { useContext } from "react";
import { Row, Col, Button } from "react-bootstrap";
import CartContext from "../store/Cart-contex";
import classes from "./CartItems.module.css";

const CartItems = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <ul className={`list-group ${classes.list}`}>
      {props.items.map((item) => {
        return (
          <li key={item.id} className="list-group-item">
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
          </li>
        );
      })}
    </ul>
  );
};

export default CartItems;
