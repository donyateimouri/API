import React from "react";
import { useAPI } from "../../context/HomeContext";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import { Link } from "react-router-dom";



export default function SmartPhones() {
  const { homeItems } = useAPI();
  let smartphones = homeItems.smartphones ? homeItems.smartphones.products : [];

  console.log('homeItems => Smartphones');
  console.log(smartphones);
  return (
    <>
      Smartphones :
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {smartphones.map((product) => (

          <SwiperSlide key={product.id}>
            <img src={product.thumbnail} className="img-fluid" />
            <h4>{product.title}</h4>
            <p>${product.price}</p>
            <Link to={'/product/' + product.id} >Show</Link>

          </SwiperSlide>

        ))}
      </Swiper>
    </>
  );
}
