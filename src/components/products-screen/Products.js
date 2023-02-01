import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Products = (props) => {
  return (
    <Container className="mt-3">
      <Row>
        <Col className="col-4">
          <h5>{productsArr[0].title}</h5>
          <img className="img-thumbnail" src={productsArr[0].imageUrl} alt="..."/>
          <p>{`$${productsArr[0].price}`}</p>
        </Col>
        <Col className="col-4">
          <h5>{productsArr[1].title}</h5>
          <img className="img-thumbnail" src={productsArr[1].imageUrl} alt="..."/>
          <p>{`$${productsArr[1].price}`}</p>
        </Col>
      </Row>
      <Row>
        <Col className="col-4">
          <h5>{productsArr[2].title}</h5>
          <img className="img-thumbnail" src={productsArr[2].imageUrl} alt="..."/>
          <p>{`$${productsArr[2].price}`}</p>
        </Col>
        <Col className="col-4">
          <h5>{productsArr[3].title}</h5>
          <img className="img-thumbnail" src={productsArr[3].imageUrl} alt="..."/>
          <p>{`$${productsArr[2].price}`}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
