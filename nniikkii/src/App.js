import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/PAGES/Home";
import Cart from "./component/PAGES/Cart";
import Shop from "./component/PAGES/Shop";
import Navbar from "./component/COMPO/Navbar";
import { Provider } from "react-redux";
import Store from "./component/STORE/Store";

const App = () => {
  return (
    <div>
      <Provider store={Store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="shop" element={<Shop />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
