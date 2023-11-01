import { useContext } from "react";
import CartContext from "../components/store/Cart-contex";
import "./ProductDet.css";

const ProductDetails = () => {
  const cartCtx = useContext(CartContext);

  let image_1 = cartCtx.extraImages;
  let image_2 = cartCtx.extraImages;

  return (
    <>
      <header className="productDetailsheader">
        <h1>Product Details</h1>
      </header>
      <div className="container-fluid details">
            <img
              src={image_1}
              alt="..."
            />
            <img
              src={image_2}
              alt="..."
            />
        </div>
        <div className="reviews">
          <h2>Product Reviews</h2>
          <div>
          <h5> Name: Nikhil</h5>
          <p>Love it</p>
          </div>
          <div>
          <h5>Name: Rahul</h5>
          <p>Nice Product</p>
          </div>
        </div>
    </>
  );
};

export default ProductDetails;
