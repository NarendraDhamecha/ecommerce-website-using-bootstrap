import CartContext from "./Cart-contex";
import React, { useState } from "react";
import { useContext } from "react";
import AuthContext from "./auth-contex";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);
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

      const res = await fetch(
        `https://crudcrud.com/api/ab967692f4a1476e81e773c0e49cab63/cart${authCtx.email}/${existingId}`,
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
      const res = await fetch(
        `https://crudcrud.com/api/ab967692f4a1476e81e773c0e49cab63/cart${authCtx.email}`,
        {
          headers: { "Content-Type": "application/json" },
          method: "POST",
          body: JSON.stringify(item),
        }
      );

      const data = await res.json();
      updateItems([...items, data]);
    }
  };

  const removeItemHandler = async (id) => {
    const res = await fetch(
      `https://crudcrud.com/api/ab967692f4a1476e81e773c0e49cab63/cart${authCtx.email}/${id}`,
      { method: "DELETE" }
    );
    updateItems((prevItems) => {
      const removedItemList = prevItems.filter((item) => {
        return item._id !== id;
      });

      return [...removedItemList];
    });
  };

  const cartContex = {
    items: items,
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
