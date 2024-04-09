import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const Navbar = () => {
  return (
    <div>
      <Header />
      <div className="columns is-centered mt-5" style={{ height: 25 }}>
        <div className="column is-1" style={{ marginLeft: 310 }}>
          <Link to="/shops" className="text-black" style={{ fontSize: 14 }}>
            SHOP
          </Link>
        </div>

        <div className="column is-1">
          <Link
            to="/about"
            className="text-black"
            style={{ marginLeft: -18, fontSize: 14 }}
          >
            ABOUT US
          </Link>
        </div>

        <div className="column is-1">
          <Link to="/stockist" className="text-black" style={{ fontSize: 14 }}>
            STOCKIST
          </Link>
        </div>

        <div className="column is-1">
          <Link to="/contact" className="text-black" style={{ fontSize: 14 }}>
            CONTACT US
          </Link>
        </div>
        <div className="column is-1">
          <Link to="/cart" className="text-black" style={{ fontSize: 14 }}>
            CART
          </Link>
        </div>

        <i
          class="fas fa-search text-2xl"
          style={{ marginLeft: 245, marginTop: 12 }}
        ></i>

        <i
          class="fa-solid fa-bag-shopping  text-2xl"
          style={{ marginLeft: 40, marginTop: 8 }}
        ></i>

        <i
          class="fa-solid fa-user text-2xl"
          style={{ marginLeft: 40, marginTop: 8 }}
        ></i>
      </div>
    </div>
  );
};

export default Navbar;
