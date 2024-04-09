import React, { useContext } from "react";
import { useState } from "react";
import { Pintola } from "./Contact";
import { ProductDetail } from "./ProductDetail";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  <div>
    <p className="seller" style={{ textAlign: "left", marginLeft: 100 }}>
      Customer Login
    </p>
    <hr style={{ marginLeft: 105 }} />
    <br />
  </div>;
  let { sold, Remove } = useContext(Pintola);
  return (
    <>
      <div>
        <p
          className="seller"
          style={{ textAlign: "left", marginLeft: 50, marginTop: 35 }}
        >
          Shopping Cart
        </p>
        <hr style={{ marginLeft: 50 }} />
        <br />
      </div>
      {sold && sold.length > 0 ? (
        <>
          <div>
            <div className="grid grid-cols-5 gap:5">
              {sold.map((item) => {
                return (
                  <>
                    <div className="mapp">
                      {/* <p className="dis">{item.dis}</p> */}
                      <img src={item.image} className="iimg" />
                      <p className="title">{item.title}</p>
                      <div className="mappp">
                        <p>from Rs.{item.rs}</p>
                        <p className="rs"> Rs.{item.ors}</p>
                      </div>
                      <p className="brand">{item.brand}</p>

                      <button className="btnnn" onClick={() => Remove(item.id)}>
                        Remove
                      </button>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <p
          style={{
            fontSize: 25,
            fontWeight: 700,
            textAlign: "center",
            padding: 45,
          }}
        >
          There are no items in your cart.
          <br />
          <div style={{ marginTop: -7 }}>
            <span style={{ fontSize: 15, fontWeight: 400 }}>
              <Link to="/store" className="signnn">
                Continue Shopping
              </Link>
            </span>
          </div>
        </p>
      )}
    </>
  );
};

export default Cart;
