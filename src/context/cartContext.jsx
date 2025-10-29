import { createContext, useState } from "react";

export const CartContext = createContext("default value");

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addItem(newItem, quantity = 1) {
    const newCart = structuredClone(cartItems);
    const index = newCart.findIndex((item) => item.id === newItem.id);

    if (index >= 0) {
      newCart[index].quantity += quantity;
    } else {
      newCart.push({ ...newItem, quantity });
    }

    setCartItems(newCart);
  }

  function cartCountItems() {
    let count = 0;
    cartItems.forEach((item) => {
      count += item.quantity;
    });
    return count;
  }

  function removeItem(idToRemove) {
    const newCart = cartItems.filter((item) => item.id !== idToRemove);
    setCartItems(newCart);
  }

  function clearCart() {
    setCartItems([]);
  }

  function totalPrice() {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  return (
    <CartContext.Provider value={{ cartItems, addItem, cartCountItems, removeItem, clearCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}
