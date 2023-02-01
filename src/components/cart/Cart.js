import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const cartElements = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },

  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },

  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

const Cart = (props) => {
  return (
    <Card style={{ width: "35rem"}}>
      <Card.Body>
        <Card.Title>Cart</Card.Title>
        <Row>
          <Col className="col-2">Item</Col>
          <Col className="col-2">Price</Col>
          <Col className="col-2">Quantity</Col>
        </Row>
        <Row>
          <Col className="col-2">
            <img className="img-thumbnail" src={cartElements[0].imageUrl} alt="..."/>
            <div>{cartElements[0].title}</div>
          </Col>
          <Col className="col-2">
            <div>{`$${cartElements[0].price}`}</div>
          </Col>
          <Col className="col-2">
            <div>{cartElements[0].quantity}</div>
          </Col>
          <Col className="col-2">
            <Button variant="danger">Remove</Button>
          </Col>
        </Row>
        <Row>
          <Col className="col-2">
            <img className="img-thumbnail" src={cartElements[1].imageUrl} alt="..."/>
            <div>{cartElements[1].title}</div>
          </Col>
          <Col className="col-2">
            <div>{`$${cartElements[1].price}`}</div>
          </Col>
          <Col className="col-2">
            <div>{cartElements[1].quantity}</div>
          </Col>
          <Col className="col-2">
            <Button variant="danger">Remove</Button>
          </Col>
        </Row>
        <Row>
          <Col className="col-2">
            <img className="img-thumbnail" src={cartElements[2].imageUrl} alt="..."/>
            <div>{cartElements[2].title}</div>
          </Col>
          <Col className="col-2">
            <div>{`$${cartElements[2].price}`}</div>
          </Col>
          <Col className="col-2">
            <div>{cartElements[2].quantity}</div>
          </Col>
          <Col className="col-2">
            <Button variant="danger">Remove</Button>
          </Col>
        </Row>
      </Card.Body>
      <Button onClick={props.onCloseCart} variant="danger">Close</Button>
    </Card>
  );
};

export default Cart;
