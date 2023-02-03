import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slider({ sliderNews }) {

  return (
    <div className="app">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {sliderNews.map((item, key) => (
          <SwiperSlide key={key}>
            <Paper
              sx={{
                position: "relative",
                backgroundColor: "grey.800",
                color: "#fff",
                mb: 4,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundImage: `url(${item.urlToImage})`,
              }}
            >
              {/* Increase the priority of the hero background image */}
              {
                <img
                  style={{ display: "none" }}
                  src={item.urlToImage}
                  alt='sliderimage'
                />
              }
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  right: 0,
                  left: 0,
                  backgroundColor: "rgba(0,0,0,.3)",
                }}
              />
              <Grid container>
                <Grid item md={6}>
                  <Box
                    sx={{
                      position: "relative",
                      p: { xs: 3, md: 6 },
                      pr: { md: 0 },
                    }}
                  >
                    <Typography
                      component="h1"
                      variant="h3"
                      color="inherit"
                      gutterBottom
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="h5" color="inherit" paragraph>
                      {item.description}
                    </Typography>
                    <Link variant="subtitle1" href={item.url} color='#fff'>
                      Devamı
                    </Link>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
