import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import Mail from "./components/Mail";
import Insta from "./components/Insta";
import About from "./About";
import Header from "./Header";
import Navbar from "./Navbar";
import Error from "./Error";

const Main = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />}>
            <Route path="insta" element={<Insta />} />
            <Route path="mail" element={<Mail />} />
            </Route>
           
          
          <Route path="/header" element={<Header />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;
