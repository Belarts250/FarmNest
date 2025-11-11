import React, { useState, useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom"; // ✅ use react-router-dom (not just 'react-router')
import Home from "./pages/Home/Home";
import Cart from "./pages/cart/Cart";
import Pay from "./pages/pay/pay";
import PoultryDetails from "./Components/poultryDetails/poultryDetails";
import Loader from "./pages/load/load";

function App() {

  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/pay" element={<Pay />} />
      <Route path="/details/:id" element={<PoultryDetails />} />
    </Routes>
  );
}

export default App;
