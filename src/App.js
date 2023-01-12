import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from '../src/component/Navbar'
import Home from '../src/pages/home'
import Footer from '../src/component/footer'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='solusi'/>
          <Route path='harga' />
          <Route path='blog'/>
          <Route path='login'/>
          <Route path='schedule'/>
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
