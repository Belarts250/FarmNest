import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
import "./PoultryDetails.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const PoultryDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { poultry_products, addToCart } = useContext(StoreContext);
  const product = poultry_products.find((item) => item._id === id);
  const [quantity, setQuantity] = useState(1);

  if (!product) return <h2>Product not found!</h2>;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) addToCart(product._id);
    navigate("/cart"); // redirect to cart
  };
  

  return (
   <><Navbar />
    <div className="detail-wrapper">
      {/* Left side - image */}
      <div className="detail-image-section">
        <img src={product.image} alt={product.name} className="detail-image" />
      </div>

      {/* Right side - info panel */}
      <div className="detail-info-section">
        <div className="detail-content">
          <h4 className="detail-category">{product.category}</h4>
          <h2 className="detail-title">{product.name}</h2>
          <p className="detail-desc">{product.description}</p>

          <div className="detail-price">{product.price} RWF</div>

          <div className="detail-controls">
            <span>Quantity</span>
            <div className="detail-quantity">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                −
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                style={{ backgroundColor: "#13e313" }}
              >
                +
              </button>
            </div>
          </div>

          <div className="detail-buttons">
            <button className="wishlist-btn">ADD TO WISHLIST</button>
            <button className="cart-btn" onClick={handleAddToCart}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default PoultryDetails;
