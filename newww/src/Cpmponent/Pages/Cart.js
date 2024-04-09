import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, remove } from "../Store/CartSlice";

const Cart = () => {
  let names = useSelector((state) => state.cart);
  let dispatch = useDispatch();

  let REMOVE = (itemssID) => {
    dispatch(remove(itemssID));
  };

  let INCR = (itemssID) => {
    dispatch(increment(itemssID));
  };
  let DECR = (itemssID) => {
    dispatch(decrement(itemssID));
  };
  return (
    <div>
      <div>
        {names.length === 0 ? (
          <img
            src="https://cdn-icons-png.freepik.com/512/11329/11329060.png"
            style={{
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 290,
              height: 300,
              marginTop: 100,
              marginLeft: 500,
            }}
          />
        ) : (
          ""
        )}
        {names.map((items) => {
          let update = items.price * items.quantity;
          update = update.toFixed(2);
          return (
            <div
              style={{
                textAlign: "center",
                paddingBottom: 15,
                display: "flex",
                gap: 25,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 25,
              }}
            >
              <h2>{items.id}</h2>
              <img src={items.image} style={{ height: 75, width: 75 }} />
              <h3 style={{ height: 20, width: 200 }}>
                {items.title.slice(0, 25)}
              </h3>

              <h2 style={{ width: 100, color: "blue" }}>{update}</h2>

              <button
                style={{
                  padding: "7px 15px",
                  cursor: "pointer",
                  backgroundColor: "#FDD1D4",
                  color: "black",
                  border: "none",
                  fontWeight: 600,
                  fontSize: 15,
                }}
                onClick={() => INCR(items.id)}
              >
                +
              </button>
              <h2 style={{ width: 30 }}>{items.quantity}</h2>

              <button
                style={{
                  padding: "7px 15px",
                  cursor: "pointer",
                  backgroundColor: "#FDD1D4",
                  color: "black",
                  border: "none",
                  fontWeight: 600,
                  fontSize: 15,
                }}
                onClick={() => DECR(items.id)}
              >
                -
              </button>
              <br />
              <button
                style={{
                  padding: "9px 25px",
                  cursor: "pointer",
                  backgroundColor: "#FDD1D4",
                  color: "black",
                  border: "none",
                  fontWeight: 600,
                  fontSize: 15,
                }}
                onClick={() => REMOVE(items.id)}
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
