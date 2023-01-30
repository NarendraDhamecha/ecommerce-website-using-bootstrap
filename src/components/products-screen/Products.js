import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";

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
    <Container>
      <Row>
        <Col xl={"auto"}>
          <div>
            <div>
              <h3>{productsArr[0].title}</h3>
            </div>
            <div>
              <img src={productsArr[0].imageUrl} />
            </div>
            <div>
              <h5>{`$${productsArr[0].price}`}</h5>
            </div>
          </div>
        </Col>
        <Col>
          <div>
            <div>
              <h3>{productsArr[1].title}</h3>
            </div>
            <div>
              <img src={productsArr[1].imageUrl} />
            </div>
            <div>
              <h5>{`$${productsArr[1].price}`}</h5>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xl={"auto"}>
          <div>
            <div>
              <h3>{productsArr[2].title}</h3>
            </div>
            <div>
              <img src={productsArr[2].imageUrl} />
            </div>
            <div>
              <h5>{`$${productsArr[2].price}`}</h5>
            </div>
          </div>
        </Col>
        <Col>
          <div>
            <div>
              <h3>{productsArr[3].title}</h3>
            </div>
            <div>
              <img src={productsArr[3].imageUrl} />
            </div>
            <div>
              <h5>{`$${productsArr[2].price}`}</h5>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
