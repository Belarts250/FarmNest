import React from "react";
import "./load.css";
import { assets } from "../../assets/assets"; // 🖼️ replace with your actual logo path

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-animation">
        <img src={assets.Logo} alt="Loading..." className="loader-logo" />
      </div>
      <p className="loader-text">FarmNest</p>
    </div>
  );
};

export default Loader;
