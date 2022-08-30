import React from "react";

// Use API
import { APIContextProvider } from "./context/HomeContext";
import SmarthPhones from "./components/home/SmarthPhones";
import Laptops from "./components/home/Laptops";
import HomeSliders from "./components/home/HomeSliders";
// Page Styles
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
// Page Components
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './assets/css/Home.css';








export default function Home() {
  return (
    <APIContextProvider>
      <div className="App">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <HomeSliders />
            <Grid item xs={4}>
              <Item>
                <SmarthPhones />
              </Item>
            </Grid>
            <Grid item xs={8}>
              <Item>
                <Laptops />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </APIContextProvider>
  );
}


















// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import { Link } from "react-router-dom";
// import * as React from 'react';

// import Header from './components/layouts/Header';

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";


// // import required modules
// import { Pagination } from "swiper";


// let smartphones = { "products": [{ "id": 1, "title": "iPhone 9", "description": "An apple mobile which is nothing like apple", "price": 549, "discountPercentage": 12.96, "rating": 4.69, "stock": 94, "brand": "Apple", "category": "smartphones", "thumbnail": "https://dummyjson.com/image/i/products/1/thumbnail.jpg", "images": ["https://dummyjson.com/image/i/products/1/1.jpg", "https://dummyjson.com/image/i/products/1/2.jpg", "https://dummyjson.com/image/i/products/1/3.jpg", "https://dummyjson.com/image/i/products/1/4.jpg", "https://dummyjson.com/image/i/products/1/thumbnail.jpg"] }, { "id": 2, "title": "iPhone X", "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...", "price": 899, "discountPercentage": 17.94, "rating": 4.44, "stock": 34, "brand": "Apple", "category": "smartphones", "thumbnail": "https://dummyjson.com/image/i/products/2/thumbnail.jpg", "images": ["https://dummyjson.com/image/i/products/2/1.jpg", "https://dummyjson.com/image/i/products/2/2.jpg", "https://dummyjson.com/image/i/products/2/3.jpg", "https://dummyjson.com/image/i/products/2/thumbnail.jpg"] }, { "id": 3, "title": "Samsung Universe 9", "description": "Samsung's new variant which goes beyond Galaxy to the Universe", "price": 1249, "discountPercentage": 15.46, "rating": 4.09, "stock": 36, "brand": "Samsung", "category": "smartphones", "thumbnail": "https://dummyjson.com/image/i/products/3/thumbnail.jpg", "images": ["https://dummyjson.com/image/i/products/3/1.jpg"] }, { "id": 4, "title": "OPPOF19", "description": "OPPO F19 is officially announced on April 2021.", "price": 280, "discountPercentage": 17.91, "rating": 4.3, "stock": 123, "brand": "OPPO", "category": "smartphones", "thumbnail": "https://dummyjson.com/image/i/products/4/thumbnail.jpg", "images": ["https://dummyjson.com/image/i/products/4/1.jpg", "https://dummyjson.com/image/i/products/4/2.jpg", "https://dummyjson.com/image/i/products/4/3.jpg", "https://dummyjson.com/image/i/products/4/4.jpg", "https://dummyjson.com/image/i/products/4/thumbnail.jpg"] }], "total": 5, "skip": 0, "limit": 4 };

// let laptops = { "products": [{ "id": 6, "title": "MacBook Pro", "description": "MacBook Pro 2021 with mini-LED display may launch between September, November", "price": 1749, "discountPercentage": 11.02, "rating": 4.57, "stock": 83, "brand": "APPle", "category": "laptops", "thumbnail": "https://dummyjson.com/image/i/products/6/thumbnail.png", "images": ["https://dummyjson.com/image/i/products/6/1.png", "https://dummyjson.com/image/i/products/6/2.jpg", "https://dummyjson.com/image/i/products/6/3.png", "https://dummyjson.com/image/i/products/6/4.jpg"] }, { "id": 7, "title": "Samsung Galaxy Book", "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched", "price": 1499, "discountPercentage": 4.15, "rating": 4.25, "stock": 50, "brand": "Samsung", "category": "laptops", "thumbnail": "https://dummyjson.com/image/i/products/7/thumbnail.jpg", "images": ["https://dummyjson.com/image/i/products/7/1.jpg", "https://dummyjson.com/image/i/products/7/2.jpg", "https://dummyjson.com/image/i/products/7/3.jpg", "https://dummyjson.com/image/i/products/7/thumbnail.jpg"] }, { "id": 8, "title": "Microsoft Surface Laptop 4", "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.", "price": 1499, "discountPercentage": 10.23, "rating": 4.43, "stock": 68, "brand": "Microsoft Surface", "category": "laptops", "thumbnail": "https://dummyjson.com/image/i/products/8/thumbnail.jpg", "images": ["https://dummyjson.com/image/i/products/8/1.jpg", "https://dummyjson.com/image/i/products/8/2.jpg", "https://dummyjson.com/image/i/products/8/3.jpg", "https://dummyjson.com/image/i/products/8/4.jpg", "https://dummyjson.com/image/i/products/8/thumbnail.jpg"] }, { "id": 9, "title": "Infinix INBOOK", "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty", "price": 1099, "discountPercentage": 11.83, "rating": 4.54, "stock": 96, "brand": "Infinix", "category": "laptops", "thumbnail": "https://dummyjson.com/image/i/products/9/thumbnail.jpg", "images": ["https://dummyjson.com/image/i/products/9/1.jpg", "https://dummyjson.com/image/i/products/9/2.png", "https://dummyjson.com/image/i/products/9/3.png", "https://dummyjson.com/image/i/products/9/4.jpg", "https://dummyjson.com/image/i/products/9/thumbnail.jpg"] }, { "id": 10, "title": "HP Pavilion 15-DK1056WM", "description": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10", "price": 1099, "discountPercentage": 6.18, "rating": 4.43, "stock": 89, "brand": "HP Pavilion", "category": "laptops", "thumbnail": "https://dummyjson.com/image/i/products/10/thumbnail.jpeg", "images": ["https://dummyjson.com/image/i/products/10/1.jpg", "https://dummyjson.com/image/i/products/10/2.jpg", "https://dummyjson.com/image/i/products/10/3.jpg", "https://dummyjson.com/image/i/products/10/thumbnail.jpeg"] }], "total": 5, "skip": 0, "limit": 5 };


// export default function Home() {
//   return (
//     <APIContextProvider>
//     <div className="App">
//       <h1>Hello Stack Overflow</h1>
//       <Users />
//     </div>
//   </APIContextProvider>
//   );
// }









/*
function App() {
  const { data } = useAPI();
  console.log(data)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header />
      <Grid container spacing={2}>
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

            <SwiperSlide>
              <img src="./assets/image/banner1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./assets/image/banner2.jpg" />
            </SwiperSlide>

          </Swiper>
        </Grid>
        <Grid item xs={4}>
          <Item>
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
              {smartphones.products.map((product) => (

                <SwiperSlide>
                  <img src={product.thumbnail} className="img-fluid" />
                  <h4>{product.title}</h4>
                  <p>${product.price}</p>
                </SwiperSlide>

              ))}
            </Swiper>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
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
              {laptops.products.map((product) => (

                <SwiperSlide>
                  <img src={product.thumbnail} className="img-fluid" />
                  <h4>{product.title}</h4>
                  <p>${product.price}</p>
                </SwiperSlide>

              ))}
            </Swiper>
          </Item>
        </Grid>
      </Grid>
      <footer>
        @2022 All Rigths Reserved.
      </footer>
    </Box>
  )
}
*/
// export default App
