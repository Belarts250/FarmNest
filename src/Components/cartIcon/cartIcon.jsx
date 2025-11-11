import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import { ShoppingCart } from "lucide-react"; // 🛒 clean modern icon
import "./CartIcon.css";

const CartIcon = () => {
  const { cartItems, poultry_products } = useContext(StoreContext);
  const [totalCount, setTotalCount] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Calculate total quantity in cart
    const count = poultry_products.reduce((acc, item) => {
      return acc + (cartItems[item._id] || 0);
    }, 0);
    setTotalCount(count);

    // Trigger animation when item is added
    if (count > 0) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 600);
      return () => clearTimeout(timer);
    }
  }, [cartItems, poultry_products]);

  return (
    <div className={`cart-icon-container ${animate ? "magic" : ""}`}>
      <ShoppingCart className="cart-icon" />
      {totalCount > 0 && <span className="cart-badge">{totalCount}</span>}
    </div>
  );
};

export default CartIcon;
