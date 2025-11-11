// src/Components/PoultryItem/PoultryItem.jsx
import React, { useContext } from 'react';
import './Poultryitem.css';
import { StoreContext } from '../context/StoreContext';

const PoultryItem = ({ id, name, description, price, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="poultry-card">
      <div className="poultry-img-container">
        <img src={image} alt={name} className="poultry-image" />
        {!cartItems[id] ? (
          <button className="add-btn" onClick={() => addToCart(id)}>+</button>
        ) : (
          <div className="counter">
            <button onClick={() => removeFromCart(id)}>-</button>
            <span>{cartItems[id]}</span>
            <button style={{backgroundColor : "#13e313ff"}} onClick={() => addToCart(id)}>+</button>
          </div>
        )}
      </div>
      <div className="poultry-info">
        <h3>{name}</h3>
        <p className="poultry-desc">{description}</p>
        <p className="poultry-price">{price} RWF</p>

      </div>
    </div>
  );
};

export default PoultryItem;
