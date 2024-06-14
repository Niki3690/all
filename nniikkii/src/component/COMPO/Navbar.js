import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  let names = useSelector((state) => state.cart);
  let dispatch = useDispatch();
  return (
    <div style={{ backgroundColor: "#C7CDD4", padding: 10 }}>
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "0 65px 0 65px",
            alignItems: "center",
          }}
        >
          <div>
            <h4 style={{ color: "blue", fontWeight: 900 }}>
              ViDHi<span style={{ color: "red" }}>NiKi</span>
            </h4>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: 20 }}>
            <Link to="/">HOME</Link>
            <Link to="shop">SHOP</Link>
            <Link to="cart">CART</Link>
            <Link to="#" style={{ textTransform: "uppercase" }}>
              Cart items:{names.length}
            </Link>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 20,
              fontSize: 25,
            }}
          >
            <div
              style={{
                height: 38,
                width: 43,
                backgroundColor: "black",
                color: "white",
                textAlign: "center",
                borderRadius: 5,
                marginTop: 2,
                cursor: "pointer",
              }}
            >
              <i class="fa-solid fa-user" style={{ fontSize: 25 }}></i>
            </div>
            <div>
              <button
                class="btn btn-primary"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
                style={{
                  backgroundColor: "black",
                  border: "none",
                  height: 38,
                  width: 44,
                }}
              >
                {" "}
                <i
                  class="fa-solid fa-house"
                  style={{ fontSize: 25, marginLeft: -3 }}
                ></i>
              </button>

              <div
                class="offcanvas offcanvas-end"
                tabindex="-1"
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
              >
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="offcanvasRightLabel">
                    TOTAL
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="offcanvas-body">
                  <h2 style={{ marginTop: 50 }}>
                    CART ITEMS:
                    <span style={{ fontSize: 45 }}>{names.length}</span>
                  </h2>

                  <h2 style={{ marginTop: 50 }}>
                    CART ITEMS:
                    <span style={{ fontSize: 45 }}>{names.length}</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
