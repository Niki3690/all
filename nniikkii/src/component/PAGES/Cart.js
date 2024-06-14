import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../STORE/CatSlice";

const Cart = () => {
  let names = useSelector((state) => state.cart);
  let dispatch = useDispatch();

  let REMOVE = (itemId) => {
    dispatch(remove(itemId));
  };
  return (
    <div>
      <br /> <br />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "250px 250px 250px 250px",
          justifyContent: "center",
          gap: 25,
          textAlign: "center",
        }}
      >
        {names.length === 0 ? (
          <h1
            style={{
              gridColumn: "1/-1",
              textAlign: "center",
              marginTop: 100,
              fontSize: 45,
            }}
          >
            No items
            <br /> in your
            <br />
            <span style={{ color: "red" }}>
              Cart
              <br /> <span style={{ fontSize: 35 }}>😕</span>
            </span>
          </h1>
        ) : (
          ""
        )}
        {names.map((item) => {
          return (
            <div
              className="card"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                padding: 25,
              }}
            >
              <h3>{item.id} </h3>
              <img
                src={item.images}
                style={{ height: 150, width: 200, margin: "0 auto" }}
              />
              <h4 style={{ height: 70, marginTop: 5 }}>{item.name} </h4>
              <div
                style={{ display: "flex", gap: 15, justifyContent: "center" }}
              >
                <h5 style={{ fontWeight: 900 }}>{item.price} </h5>
                <h5>
                  <del style={{ fontWeight: 100, color: "black" }}>
                    {item.old_price}
                  </del>
                </h5>
              </div>
              <button
                style={{ padding: 5, marginTop: 10 }}
                onClick={() => REMOVE(item.id)}
              >
                RemoveToCart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
