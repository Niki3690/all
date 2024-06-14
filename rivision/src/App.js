import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Pages/Home";
import About from "./Component/Pages/About";
import Cart from "./Component/Pages/Cart";
import Navbar from "./Component/Compo/Navbar";
import { Provider } from "react-redux";
import Store from "./Component/Store/Store";
import SinglePage from "./Component/Compo/SinglePage";


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
            <Route path="/item/:id" element={<SinglePage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
  