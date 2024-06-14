import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  let names = useSelector((state) => state.cart);
  let dispatch = useDispatch();

  let totalllll = names.reduce(
    (namess, item) => namess + item.price * item.quantity,
    0
  );
  return (
    <div
      style={{
        textAlign: "center",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        gap: 25,
        backgroundColor: "lightsalmon",
        padding: 25,
      }}
    >
      <Link to="/">HOME</Link>
      <Link to="about">ABOUT</Link>
      <Link to="cart" style={{ position: "relative" }}>
        CART
        <span
          style={{ position: "absolute", top: -15, left: 50, fontSize: 25 }}
        >
          {names.length}
        </span>
      </Link>
      {/* <Link style={{ marginLeft: 20 }}>Sub Total: {totalllll}</Link> */}
      <Link to="" style={{ position: "relative" }}>
        Sub Total
        <span
          style={{ position: "absolute", top: -15, left: 95, fontSize: 25 }}
        >
          {totalllll}
        </span>
      </Link>
    </div>
  );
};

export default Navbar;
