// src/Components/PoultryDisplay/PoultryDisplay.jsx
import React, { useContext } from 'react';
import PoultryItem from '../Poultryitem/Poultryitem';
import { StoreContext } from '../context/StoreContext';
import './poultrydisplay.css'
const PoultryDisplay = ({ category }) => {
  const { poultry_products } = useContext(StoreContext);

  return (
    <div className="poultry-display">
      <h2>Top Poultry Products</h2>
      <div className="poultry-list">
        {poultry_products
          .filter(item => category === "All" || category === item.category)
          .map((item, index) => (
            <PoultryItem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
      </div>
    </div>
  );
};

export default PoultryDisplay;
