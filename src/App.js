import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/homepage/HomePage";
import { ShopContextProvider } from './context/shop-context';
import { CartDetails } from "./pages/cartDetails/CartDetails";

export default function App() {
  return (
    <ShopContextProvider> 
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartDetails />} />
      </Routes>
    </Router>
    </ShopContextProvider> 
  );
}
