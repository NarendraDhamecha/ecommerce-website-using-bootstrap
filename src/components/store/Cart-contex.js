import React from "react";

const CartContext = React.createContext({
    items: [],
    extraImages: [],
    addExtraImage: (Images) => {},
    addItem: (item) => {},
    removeItem: (id) => {},
    updateAfterRefresh: (items) => {}
})

export default CartContext;