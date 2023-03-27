import { Box, Container } from "@mui/material";
import React from "react";
import { Navbar } from "../../components/navbar/navbar";
import { Shop } from "../../components/shop/shop";
import { Footer } from "../../components/footer/footer";
import './HomePage.css';
import { Banner } from "../../components/banner/banner";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const HomePage = () => {
  return (
   <div className="homeContainer">
     <Navbar />
     <Banner/>
     <Shop/> 
     <Footer />
     </div>
   
  );
};
