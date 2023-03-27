import React from 'react';
import { Navbar } from '../../components/navbar/navbar';
import { Cart } from '../../components/cart/cart';
import { Footer } from '../../components/footer/footer';
import './CartDetails.css';
export const CartDetails = () => {
  return (
    <div className="cartContainer">
    <Navbar />
    <Cart />
    <Footer/>
    </div>
  )
}
