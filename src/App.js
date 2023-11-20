// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Remove BrowserRouter as Router
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Menu from './pages/Menu';
import OrderOnline from './pages/OrderOnline';
import ContactUs from './pages/Contact';
import Survey from './components/Survey';
import Career from './components/Career';

import './App.css';
function App() {
  return (
    <div className="app">
    
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<OrderOnline />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/career" element={<Career />} />
      </Routes>
      <Footer />  
    </div>
  );
}

export default App;
