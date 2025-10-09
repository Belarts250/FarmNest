// src/components/Cart/Cart.jsx
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import './Cart.css';
import { StoreContext } from "../../Components/context/StoreContext";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Cart = () => {
  const { cartItems, poultry_products, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <>
    {/* <Navbar /> */}
          <div className="cart">
      <div className="cart-items">
        <div className="cart-items-header">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />

        {poultry_products.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id} className="cart-items-row">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <p>{item.name}</p>
                <p>{item.price} RWF</p>
                <p>{cartItems[item._id]}</p>
                <p>{item.price * cartItems[item._id]}RWF</p>
                <p
                  onClick={() => removeFromCart(item._id)}
                  className="cart-remove"
                >
                  ×
                </p>
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart totals</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>{getTotalCartAmount()} RWF</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery fee</p>
            <p>{getTotalCartAmount() === 0 ? 0 : 2}RWF</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Total</p>
            <p>
              {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2} RWF
            </p>
          </div>
          <button onClick={() => navigate("/pay")}>
            CONTINUE TO PAYMENT
          </button>
        </div>

        {/* <div className="cart-promocode">
          <p>Thank you for making Us Grow</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder="Promo code" />
            <button>See you next Time 👋</button>
          </div>
        </div> */}
      </div>
    </div>
    {/* <Footer /> */}
    </>
  
  );
};

export default Cart;
