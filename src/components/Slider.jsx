import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


// import required modules
import { Pagination, Navigation } from "swiper";

export default function Slider({sliderNews}) {
  console.log(sliderNews)
  return (
    <div className="app">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
      {
        sliderNews.map((item,key)=> (
          <SwiperSlide key={key}>
          <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={7}>
          resim
        </Grid>
        <Grid item xs={6} md={5}>
          yazı
        </Grid>
      </Grid>
    </Box>
          </SwiperSlide>
        ))
      }
      </Swiper>
    </div>
  );
}
