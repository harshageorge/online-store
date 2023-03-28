import React from 'react';
import { Grid, } from "@mui/material";

 import image1 from "../../assets/products/banner-2.jpg";
import image2 from "../../assets/products/banner-3.jpg";
import { Carousel } from 'react-responsive-carousel';

export const Banner = () => {

  const slides = [{ url: image1 }, { url: image2 }];
  return (
     <Grid container  style={{ padding: "10px" }}>
    <Grid item={true} sm={12} xs={12}>
         <Carousel showArrows={true} autoPlay showThumbs={false} infiniteLoop={true} showStatus={false}>
          
         {slides.map((item, i) => (
        <img
                src={item.url}
                key={i}
                style={{ width: "100%", maxHeight: "250px",borderRadius:'5px' }}
                alt='banner img'
              />
          ))}
          </Carousel>
         </Grid>
    
     </Grid>
  );
};
