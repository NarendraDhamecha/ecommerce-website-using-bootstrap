import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import classes from "./ProductDet.module.css";

const ProductDetails = () => {
  const params = useParams();

  let image_1 = null;
  let image_2 = null;

  if (params.productId === "p1") {

    image_1 = "https://www.apple.com/newsroom/images/product/iphone/standard/product_red_main_big.jpg.large.jpg";
    image_2 = "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202104/Apple_iPhone_13_12S_6-1_all_si_1200x768.jpeg";
    
  } else if (params.productId === "p2") {

    image_1 = "https://images.indianexpress.com/2022/02/OnePlus.jpg";
    image_2 = "https://5.imimg.com/data5/SELLER/Default/2022/5/BA/TB/WD/152146303/oneplus-nord-ce-2-5g-bahamas-blue-8gb-ram-128gb-storage--1000x1000.jpg";
    
  } else if (params.productId === "p3") {
    image_1 = "https://cdn1.smartprix.com/rx-iNtIVAEE5-w420-h420/samsung-galaxy-s22-u.jpg";
    image_2 = "https://images.samsung.com/in/smartphones/galaxy-s22-ultra/images/galaxy-s22-ultra_highlights_kv_img.jpg";

  } else if (params.productId === "p4") {
    image_1 = "https://m.media-amazon.com/images/I/71T5NVOgbpL._SL1500_.jpg";
    image_2 = "https://www.jiomart.com/images/product/420x420/493177798/apple-iphone-14-pro-max-128-gb-deep-purple-digital-o493177798-p593687919-0-202209091829.jpeg";
  }

  return (
    <>
      <header className={classes.header}>
        <h1>Product Details</h1>
      </header>
      <Container className={classes.details}>
        <Row>
          <Col>
            <img
              src={image_1}
              alt="..."
            />
          </Col>
          <Col>
            <img
              src={image_2}
              alt="..."
            />
          </Col>
        </Row>
        <div className={classes.reviews}>
          <h2>Product Reviews</h2>
          <h5> Name: Nikhil</h5>
          <span>Love it</span>
          <h5>Name: Rahul</h5>
          <span>Nice Product</span>
        </div>
      </Container>
    </>
  );
};

export default ProductDetails;
