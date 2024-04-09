import React from "react";
import Header from "./Header";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Shops from "./Shops";
import About from "./About";
import Stockist from "./Stockist";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Cart from "./Cart";

const Main = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/shops" element={<Shops />} />
          <Route path="/about" element={<About />} />
          <Route path="/header" element={<Header />} />
          <Route path="/stockist" element={<Stockist />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Main;
