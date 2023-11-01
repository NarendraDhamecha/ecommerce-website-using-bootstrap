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
    fetch(`https://fakestoreapi.com/products`)
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
    fetch(`https://ecommerce-website-8dfa0-default-rtdb.firebaseio.com/cart${authCtx.email}.json`)
    .then(res =>  res.json())
    .then(data => {
      let temp = [];
      for(let key in data){
        temp.push({_id: key, ...data[key]});;
      }
      cartCxt.updateAfterRefresh(temp)
    })
  },[])

  return (
    <>
      <div className="container-fluid products">
        <ul>
        {productsArr.map((item) => {
                return (
                  <ItemList
                    key={item.id}
                    img={item.image}
                    title={item.title}
                    price={item.price}
                    onClick={cartCxt.addItem}
                    id={item.id}
                    quantity={item.quantity}
                    path={item.path}
                    image={item.image}
                  />
                );
              })}
        </ul>
      </div>
    </>
  );
};

export default Products;
