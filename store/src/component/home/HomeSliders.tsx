import React from "react";
import { useAPI } from "../../context/HomeContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";

import Grid from '@mui/material/Grid';


export default function HomeSliders() {
  const { homeItems } = useAPI();
  let sliders = homeItems.sliders ? homeItems.sliders : [];


  
  console.log('homeItems => HomeSliders');
  console.log(homeItems.sliders);


  return (
    <Grid item xs={12}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="bigSlider"
      >
        {
          sliders.map((slide) => {
            return <SwiperSlide key={slide}>
              <img src={slide} />
            </SwiperSlide>
          })
        }
      </Swiper>
    </Grid>
  );
}
