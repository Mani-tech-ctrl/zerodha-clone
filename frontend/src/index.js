import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import Signup from './landing_page/signup/SignUp';
import AboutPage from './landing_page/about/AboutPage';
import ProductPage from "./landing_page/products/ProductPage";
import PricingPage from './landing_page/pricing/PricePage';
import SupportPage from './landing_page/support/SupportPage.js';
import NotFound from './landing_page/NotFound.js';
import Navbar from './landing_page/Navbar.js';
import Footer from './landing_page/Footer.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>

  {/* create links */}
   <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/about" element={<AboutPage/>}/>
    <Route path="/products" element={<ProductPage/>}/>
    <Route path="/pricing" element={<PricingPage/>}/>
    <Route path="/support" element={<SupportPage/>}/>
    <Route path="*" element={<NotFound/>}/>

   </Routes>
   <Footer/>
  </BrowserRouter>
);


