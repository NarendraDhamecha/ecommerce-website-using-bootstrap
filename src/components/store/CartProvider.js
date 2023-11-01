import CartContext from "./Cart-contex";
import React, { useState } from "react";
import { useContext } from "react";
import AuthContext from "./auth-contex";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);
  const [extraImages, setExtraImages] = useState();
  const authCtx = useContext(AuthContext);

  const updateItemsOnRefresh = (items) => {
    updateItems([...items]);
  };

  const addItemHandler = async (item) => {
    const existingIndex = items.findIndex((prevItem) => {
      return prevItem.id === item.id;
    });
    
    if (existingIndex !== -1) {
      let updatedItems = [...items];

      updatedItems[existingIndex].quantity =
        Number(updatedItems[existingIndex].quantity) + 1;

      const updatedItem = {
        ...updatedItems[existingIndex],
      };

      const existingId = updatedItems[existingIndex]._id;
      

       await fetch(
        `https://ecommerce-website-8dfa0-default-rtdb.firebaseio.com/cart${authCtx.email}/${existingId}.json`,
        {
          headers: { "Content-Type": "application/json" },
          method: "PUT",
          body: JSON.stringify({
            id: updatedItem.id,
            title: updatedItem.title,
            price: updatedItem.price,
            quantity: updatedItem.quantity,
            imageUrl: updatedItem.imageUrl,
          }),
        }
      );
      updateItems([...updatedItems]);
    } else {
     
      const details = {
        id : item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
        imageUrl: item.img
      }

      const res = await fetch(
        `https://ecommerce-website-8dfa0-default-rtdb.firebaseio.com/cart${authCtx.email}.json`,
        {
          headers: { "Content-Type": "application/json" },
          method: "POST",
          body: JSON.stringify(details),
        }
      );

      const data = await res.json();

      const cartItem = {
        _id: data.name,
        ...details
      }
      
      if(res.ok){
        updateItems([...items, cartItem]);
      }
      
    }
  };

  const removeItemHandler = async (id) => {
    await fetch(
      `https://ecommerce-website-8dfa0-default-rtdb.firebaseio.com/cart${authCtx.email}/${id}.json`,
      { method: "DELETE" }
    );
    updateItems((prevItems) => {
      const removedItemList = prevItems.filter((item) => {
        return item._id !== id;
      });

      return [...removedItemList];
    });
  };

  const addExtraImages = (extraImagesArray) => {
     setExtraImages(extraImagesArray);
  }

  const cartContex = {
    items: items,
    extraImages: extraImages,
    addExtraImage: addExtraImages,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    updateAfterRefresh: updateItemsOnRefresh,
  };

  return (
    <CartContext.Provider value={cartContex}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
