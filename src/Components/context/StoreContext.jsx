// src/context/StoreContext.jsx
import { createContext, useState } from "react";
import { poultry_products } from "../../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  // Add item to cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
    }));
  };

  // Remove item from cart safely
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId]) return prev; // item not in cart
      if (prev[itemId] === 1) {
        const { [itemId]: _, ...rest } = prev; // remove item entirely
        return rest;
      }
      return { ...prev, [itemId]: prev[itemId] - 1 };
    });
  };

  // Get total cart amount
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      const quantity = cartItems[itemId];
      if (quantity > 0) {
        const itemInfo = poultry_products.find((product) => product._id === itemId);
        if (itemInfo) totalAmount += itemInfo.price * quantity;
      }
    }
    return totalAmount;
  };

  return (
    <StoreContext.Provider
      value={{
        poultry_products,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
