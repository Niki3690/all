import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Signup from "./Signup";
import { useState, useEffect } from "react";

const Header = () => {
  const crt = JSON.parse(localStorage.getItem("cartData"));

  return (
    <>
      <div className="header">
        <Link to="/">
          <img src="https://www.pintola.in/cdn/shop/files/Pintola_Logo_PNG_200x.png?v=1655118347"></img>
        </Link>

        <div>
          <ul>
            <Link to="/"></Link>
            <Link to="/store" activeClassName="active-link">
              <li className="store">Store</li>

              <div className="storeHover">
                <div className="nn">
                  <img src="https://www.pintola.in/cdn/shop/files/Best_seller_400x.png?v=1693990787"></img>
                  <p>Best Seller</p>
                </div>

                <div>
                  <img src="https://www.pintola.in/cdn/shop/files/All_Natural_Butter_1b7063be-d81b-4942-9771-492fdfcefd87_400x.png?v=1692623236"></img>
                  <p>Peanut Butter</p>
                </div>
                <div>
                  <img src="https://www.pintola.in/cdn/shop/files/All_Natural_Butter_1b7063be-d81b-4942-9771-492fdfcefd87_400x.png?v=1692623236"></img>
                  <p>Peanut Butter</p>
                </div>

                <div>
                  <img src="https://www.pintola.in/cdn/shop/files/Organic_PB_400x.png?v=1692623252"></img>
                  <p>All Natural & Organic</p>
                </div>

                <div>
                  
                  <img src="https://www.pintola.in/cdn/shop/files/High_Protein_PB_400x.png?v=1692623200"></img>
                  <p>High Protein Peanut Butter</p>
                </div>

                <div>
                  <img src="https://www.pintola.in/cdn/shop/files/Rice_cakes_400x.png?v=1694430856"></img>
                  <p>Brown Rice Cakes</p>
                </div>
                <div>
                  <img src="https://www.pintola.in/cdn/shop/files/Chikki_400x.png?v=1692623274"></img>
                  <p>Our Chikki Range</p>
                </div>

                <div>
                  <img src="https://www.pintola.in/cdn/shop/files/PERFORMANCE_1_400x.png?v=1674901093"></img>
                  <p>Performance Series</p>
                </div>

                <div>
                  <img src="https://www.pintola.in/cdn/shop/files/Thumbnail_Oil_800x.png?v=1684562720"></img>
                  <p>Wood Pressed Oil</p>
                </div>

                <div>
                  <img src="https://www.pintola.in/cdn/shop/files/1-2_400x.png?v=1692340312"></img>
                  <p>Breakfast Cereals</p>
                </div>
              </div>
            </Link>

            <Link to="/whypintola" activeClassName="active-link">
              <li className="pp">Why Pintola?</li>
            </Link>
            <Link to="/recipes" activeClassName="active-link">
              <li className="pp">Recipes</li>
            </Link>
            <Link to="/aboutus" nactiveClassName="active-link">
              <li className="pp">About Us</li>
            </Link>
            <Link to="/contactus" activeClassName="active-link">
              <li className="pp">Contact Us</li>
            </Link>

            <Link to="/trackorder" activeClassName="active-link">
              <li className="pp">
                <button className="btn">Track Your Order</button>
              </li>
            </Link>

            <Link to="/signin">
              <li style={{ marginLeft: 45 }} className="ii">
                <i className="faa  fa-solid fa-circle-user"></i>
                <p className="hello">HELLO, SIGN IN</p>
              </li>
            </Link>
            <Link to="/search">
              <li style={{ marginLeft: -25 }} className="ii">
                <i className="sea fas fa-search"></i>
                <p className="hello">SEARCH</p>
              </li>
            </Link>

            <div style={{ marginTop: -15 }}>
              <Link to="/cart">
                <li style={{ marginLeft: -25 }}>
                  <div
                    style={{
                      marginLeft: 7,
                    }}
                  >
                    {crt?.length}
                  </div>
                  <div>
                    <i className="cart fa-solid fa-cart-shopping"></i>
                    <p className="hello">CART</p>
                  </div>
                </li>
              </Link>
            </div>

            <Link to="/contactus">
              <li style={{ marginLeft: -25 }} className="ii">
                <i
                  className="fas fa-phone-volume"
                  style={{ marginLeft: 12 }}
                ></i>
                <p className="hello">CONTACT</p>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
