import React, { useContext, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./Products.module.css";
import CartContext from "../store/Cart-contex";
import AuthContext from "../store/auth-contex";

const productsArr = [
  {
    id: "item_1",
    title: "Colors",
    price: 100,
    quantity: "1",
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id: "item_2",
    title: "Black and white Colors",
    price: 50,
    quantity: "1",
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id: "item_3",
    title: "Yellow and Black Colors",
    price: 70,
    quantity: "1",
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id: "item_3",
    title: "Blue Color",
    price: 100,
    quantity: "1",
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Products = (props) => {
  const cartCxt = useContext(CartContext);
  const authCtx = useContext(AuthContext);


  useEffect(() => {
    fetch(`https://crudcrud.com/api/ab967692f4a1476e81e773c0e49cab63/cart${authCtx.email}`)
    .then(res =>  res.json())
    .then(data => cartCxt.updateAfterRefresh(data))
  },[])

  return (
    <Container className={classes.product}>
      <Row className="mb-5">
        <Col>
          <h5>{productsArr[0].title}</h5>
          <Link to="/store/p1">
            <img
              className="img-thumbnail"
              src={productsArr[0].imageUrl}
              alt="..."
            />
          </Link>
          <div>{`$${productsArr[0].price}`}</div>
          <Button onClick={() => cartCxt.addItem(productsArr[0])}>
            Add To Cart
          </Button>
        </Col>
        <Col>
          <h5>{productsArr[1].title}</h5>
          <Link to="store/p2">
            <img
              className="img-thumbnail"
              src={productsArr[1].imageUrl}
              alt="..."
            />
          </Link>
          <div>{`$${productsArr[1].price}`}</div>
          <Button onClick={() => cartCxt.addItem(productsArr[1])}>
            Add To Cart
          </Button>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <h5>{productsArr[2].title}</h5>
          <Link to="store/p3">
            <img
              className="img-thumbnail"
              src={productsArr[2].imageUrl}
              alt="..."
            />
          </Link>
          <div>{`$${productsArr[2].price}`}</div>
          <Button onClick={() => cartCxt.addItem(productsArr[2])}>
            Add To Cart
          </Button>
        </Col>
        <Col>
          <h5>{productsArr[3].title}</h5>
          <Link to="store/p4">
            <img
              className="img-thumbnail"
              src={productsArr[3].imageUrl}
              alt="..."
            />
          </Link>
          <div>{`$${productsArr[2].price}`}</div>
          <Button onClick={() => cartCxt.addItem(productsArr[3])}>
            Add To Cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
