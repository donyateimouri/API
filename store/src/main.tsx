import React from 'react'
//Layouts
import Header from './components/layouts/Header';
//Pages
import Home from './Home'
import Product from './Product'
import Login from './Login';
import ReactDOM from "react-dom/client";
import './assets/css/general.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/product/:id" element={<Product id="2" />}></Route>
      <Route path="/login" element={<Login />}></Route>


    </Routes>
    <Header />
  </BrowserRouter>
)
