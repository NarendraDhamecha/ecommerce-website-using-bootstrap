import React, { useContext, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./Products.module.css";
import CartContext from "../store/Cart-contex";
import AuthContext from "../store/auth-contex";
import ItemList from "./ItemList";

const productsArr = [
  {
    path: "store/p1",
    id: "item_1",
    title: "Colors",
    price: 100,
    quantity: "1",
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    path: "store/p2",
    id: "item_2",
    title: "Black and white Colors",
    price: 50,
    quantity: "1",
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    path: "store/p3",
    id: "item_3",
    title: "Yellow and Black Colors",
    price: 70,
    quantity: "1",
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    path: "store/p4",
    id: "item_4",
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
    fetch(`https://crudcrud.com/api/c867fdbee8da42c5b19496246130598b/cart${authCtx.email}`)
    .then(res =>  res.json())
    .then(data => cartCxt.updateAfterRefresh(data))
  },[])

  return (
    <>
      <div className={`container-fluid my-4 4 text-center ${classes.product}`}>
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              {productsArr.map((item) => {
                return (
                  <ItemList
                    key={item.id}
                    img={item.imageUrl}
                    title={item.title}
                    price={item.price}
                    onClick={cartCxt.addItem}
                    id={item.id}
                    quantity={item.quantity}
                    path={item.path}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
