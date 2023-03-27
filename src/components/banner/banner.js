// import React from "react";
// import { Grid, } from "@mui/material";
// import Carousel from "react-material-ui-carousel";
// import image1 from "../../assets/products/banner-2.jpg";
// import image2 from "../../assets/products/banner-3.jpg";

// export const Banner = () => {
//   const slides = [{ url: image1 }, { url: image2 }];
//   return (
//     // <Grid container lg={12} xs={12}>
//     //   <Grid container style={{ padding: "10px" }}>
//     //     <Grid item sm={12} xs={12}>
//           <Carousel animation="slide">
//             {slides.map((item, i) => (
//               <img
//                 src={item.url}
//                 key={i}
//                 style={{ width: "100%", height: "auto" }}
//                 loading='eager'
//               />
//             ))}
//           </Carousel>
//     //     </Grid>
//     //   </Grid>
//     // </Grid>
//   );
// };

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
              />
          ))}
          </Carousel>
         </Grid>
    
     </Grid>
  );
};
