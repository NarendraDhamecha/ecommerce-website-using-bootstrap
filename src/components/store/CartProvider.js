import CartContext from "./Cart-contex";
import React, { useState } from "react";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);

  const addItemHandler = (item) => {
    updateItems((prevItems) => {
        const existingIndex = prevItems.findIndex((prevItem) => {
          return prevItem.id === item.id
        })
        
        const existingItem = prevItems[existingIndex]
        if(existingItem){
          let updatedItems = [...prevItems]
          updatedItems[existingIndex].quantity = Number(updatedItems[existingIndex].quantity) + 1
          return [...updatedItems]
        }
        else{
          return [...prevItems, item]
        }
    })
  };

  const removeItemHandler = (id) => {};

  const cartContex = {
    items: items,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };


  return (
    <CartContext.Provider value={cartContex}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
