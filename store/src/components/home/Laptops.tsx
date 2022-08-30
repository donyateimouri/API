import React from "react";
import { useAPI } from "../../context/HomeContext";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import { Link } from "react-router-dom";


export default function Laptops() {
  const { homeItems } = useAPI();
  let laptops = homeItems.laptops ? homeItems.laptops.products : [];

  console.log('homeItems => Laptops');
  console.log(laptops);
  return (
    <>
      Laptops :
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {laptops.map((product) => (

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
