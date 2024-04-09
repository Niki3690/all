import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  let names = useSelector((state) => state.cart);
  let dispatch = useDispatch();

  let updatePrice = names.reduce(
    (def, item) => def + item.price * item.quantity,
    0
  );
  updatePrice = updatePrice.toFixed(2);

  return (
    <div
      style={{
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        gap: 18,
        display: "flex",
        backgroundColor: "#FDD1D4",
        padding: 15,
        color: "black",
        borderBottom: "3px solid black",
      }}
    >
      <Link to="/">HOME</Link>
      <Link to="about">ABOUT</Link>
      <Link to="cart" style={{ marginTop: 8 }}>
        CART
        <span style={{ fontSize: 26, marginLeft: 5, color: "blue" }}>
          {names.length}
        </span>
      </Link>
      <Link to="#" style={{ marginTop: 8 }}>
        TOTAL ITEM PRICE:
        <span style={{ fontSize: 26, marginLeft: 5, color: "blue" }}>
          {updatePrice}
        </span>
      </Link>
    </div>
  );
};

export default Navbar;
