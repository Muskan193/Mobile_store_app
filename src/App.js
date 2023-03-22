
import React  from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import Contact from './components/Contact';
import Product from './components/Product';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Checkout from './components/Checkout';
import Cart from './components/Cart';

function App() {
  return (
   <>
   <Header />
   <Routes>
   <Route exact path="/" element={<Home/>}/>
    <Route exact path="/product" element={<Product/>}/>
    <Route exact path="/product/:id" element={<ProductDetails/>}/>
    <Route exact path="/cart" element={<Cart />}/>
    <Route exact path="/checkout" element={<Checkout />}/>
    <Route exact path="/about" element={<About />}/>
    <Route  exact path="/contact" element={<Contact/>}/>
   </Routes>
  
   </>
  );
}

export default App;
