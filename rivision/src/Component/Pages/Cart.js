import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, remove } from "../Store/CartSlice";

const Cart = () => {
  let names = useSelector((state) => state.cart);
  let dispatch = useDispatch();

  let REMOVE = (demoID) => {
    dispatch(remove(demoID));
  };

  let INCR = (demoID) => {
    dispatch(increment(demoID));
  };

  let DECR = (demoID) => {
    dispatch(decrement(demoID));
  };
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "250px 250px 250px 250px",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          gap: 25,
          marginTop: 45,
        }}
      >
        {names.length === 0 ? (
          <h1 style={{ gridColumn: "1/-1", fontSize: 45, marginTop: 145 }}>
            Your cart is empty....😕
          </h1>
        ) : (
          ""
        )}
        {names.map((demo) => {
          let updatePrice = demo.price * demo.quantity;
          return (
            <div
              style={{
                textAlign: "center",
                border: "2px solid red",
                paddingBottom: 15,
              }}
            >
              <img src={demo.images} style={{ height: 170, width: 246 }} />
              <h3 style={{ height: 40 }}>{demo.title}</h3>
              <h2>{updatePrice}</h2>
              <h2>{demo.quantity}</h2>
              <div
                style={{ display: "flex", justifyContent: "center", gap: 15 }}
              >
                <button
                  style={{ padding: "5px 15px" }}
                  onClick={() => INCR(demo.id)}
                >
                  +
                </button>
                <button
                  style={{ padding: "5px 15px" }}
                  onClick={() => DECR(demo.id)}
                >
                  -
                </button>
              </div>
              <br />
              <button
                onClick={() => REMOVE(demo.id)}
                style={{ padding: "5px 15px" }}
              >
                Remove To Cart{" "}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
