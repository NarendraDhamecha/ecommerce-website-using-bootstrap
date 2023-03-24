import React, { useContext, useEffect, useState } from "react";
import CartContext from "../store/Cart-contex";
import AuthContext from "../store/auth-contex";
import ItemList from "./ItemList";
import "./Products.css";


const Products = () => {
  const cartCxt = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  const [productsArr, setProductsArr] = useState([])

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products`)
    .then(res => res.json())
    .then(data => {
      let temp = [];
      for(let i = 0; i < 12; i++){
        temp.push({
          ...data[i],
          quantity: "1"
        });
      }
      setProductsArr(temp);
    })
  },[])

  useEffect(() => {
    fetch(`https://crudcrud.com/api/69738477188d47eb803abc4e0fae3686/cart${authCtx.email}`)
    .then(res =>  res.json())
    .then(data => cartCxt.updateAfterRefresh(data))
  },[])

  return (
    <>
      <div className="container-fluid products">
        <ul>
        {productsArr.map((item) => {
                return (
                  <ItemList
                    key={item.id}
                    img={item.images[0]}
                    title={item.title}
                    price={item.price}
                    onClick={cartCxt.addItem}
                    id={item.id}
                    quantity={item.quantity}
                    path={item.path}
                    images={item.images}
                  />
                );
              })}
        </ul>
      </div>
    </>
  );
};

export default Products;
