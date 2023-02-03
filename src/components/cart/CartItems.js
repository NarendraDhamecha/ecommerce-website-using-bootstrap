import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import classes from "./CartItems.module.css";

const CartItems = (props) => {
  return (
    <ul className={`list-group ${classes.list}`}>
      {props.items.map((item) => {
        return (
          <li key={item.id} className="list-group-item">
            <Row>
              <Col>
                <img className="img-thumbnail" src={item.imageUrl} />
                {item.title}
              </Col>
              <Col>{`$${item.price}`}</Col>
              <Col>{`x${item.quantity}`}</Col>
              <Col>
                <Button variant="outline-danger" size="sm">
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
