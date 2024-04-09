import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div
        className="grid grid-cols-9 p-7 m-7 text-center justify-center"
        style={{ marginLeft: 545 }}
      >
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
        <Link to="/header">HEADER</Link>
      </div>
    </div>
  );
};

export default Navbar;
