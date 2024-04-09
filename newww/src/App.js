import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Cpmponent/Pages/Home";
import About from "./Cpmponent/Pages/About";
import Cart from "./Cpmponent/Pages/Cart";
import Navbar from "./Cpmponent/Compo/Navbar";
import { Provider } from "react-redux";
import Store from "./Cpmponent/Store/Store";
import SinglePage from "./Cpmponent/Compo/SinglePage";
import Footer from "./Cpmponent/Compo/Footer";

const App = () => {
  return (
    <div>
      <Provider store={Store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="cart" element={<Cart />} />
            <Route path="items/:id" element={<SinglePage />} />
          </Routes>
        </BrowserRouter>
        {/* <Footer/> */}
      </Provider>
    </div>
  );
};

export default App;
