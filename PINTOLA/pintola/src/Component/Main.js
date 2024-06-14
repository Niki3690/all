import React from "react";
import Header from "./../Component/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Store from "./../Component/Store";
import WhyPintola from "./../Component/WhyPintola";
import Recipes from "./../Component/Recipes";
import AboutUs from "./../Component/AboutUs";
import ContactUs from "./../Component/ContactUs";
import Footer from "./Footer";
import Home from "./Home";
import Cart from "./../Component/Cart";
import { useState } from "react";
import { Pintola } from "./Contact";
import SignIn from "./SignIn";
import Signup from "./Signup";
import Search from "./Search";
import ForgetPass from "./ForgetPass";
import Single from "./Single";
import TrackOrder from "./TrackOrder";
import RecipesDetails from "./RecipesDetails";
import LoginSignupPage from "./LoginSignupPage";
import LoginRegisterPage from "./LoginRegisterPage";
import BreadCrumbPath from "./BreadCrumbPath";

const Main = () => {
  let [sold, setSold] = useState([]);
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  let Add = (value) => {
    setSold([...sold, value]);
    localStorage.setItem("cartData", JSON.stringify([...sold, value]));
  };

  let Remove = (value) => {
    let del = sold.filter((item) => item.id !== value);
    setSold(del);
    localStorage.setItem("cartData", JSON.stringify(del));
  };

  return (
    <div>
      <Pintola.Provider
        value={{ sold: sold, setSold: setSold, Add: Add, Remove: Remove }}
      >
        
        <BrowserRouter>
          <BreadCrumbPath />
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/whypintola" element={<WhyPintola />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="itemmm/:id" element={<RecipesDetails />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgetPass" element={<ForgetPass />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/search" element={<Search />} />
            <Route path="item/:id" element={<Single />} />
            <Route path="trackorder" element={<TrackOrder />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </Pintola.Provider>

      {/* <LoginRegisterPage /> */}
      {/* <div className="App">
        {currentForm === "login" ? (
          <LoginSignupPage onFormSwitch={toggleForm} />
        ) : (
          <LoginRegisterPage onFormSwitch={toggleForm} />
        )}
      </div> */}
    </div>
  );
};

export default Main;
