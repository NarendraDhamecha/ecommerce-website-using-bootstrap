import React from "react";

const CartContext = React.createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {},
    updateAfterRefresh: (items) => {}
})

export default CartContext;