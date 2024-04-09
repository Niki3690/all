import React from "react";

const Arrival = () => {
  return (
    <div>
      <p
        className=""
        style={{
          fontSize: 50,
          fontWeight: 700,
          textAlign: "center",
          color: "black",
          marginTop: 35,
        }}
      >
        New Arrival
      </p>

      <div>
        <div className="section">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-4">
                <div className="box">
                  <div className="sweet">
                    <img src="https://www.somoorish.com.au/admin/product_image/1_130g_cocoa_%20dusted_dark%20_chocolate%20_almond_min.webp" />
                  </div>

                  <h4
                    className="is-size-5 mt-4 font-semibold"
                    style={{ color: "black" }}
                  >
                    Cocoa Almond - Dark Chocolate
                  </h4>
                  <br />

                  <p style={{ color: "#AD0047" }}>No ratings yet</p>

                  <p
                    style={{
                      color: "#AD0047",
                      marginTop: 9,
                      fontSize: 24,
                      fontWeight: 600,
                    }}
                  >
                    $9.24
                  </p>

                  <button
                    className="button"
                    style={{
                      backgroundColor: "#AD0047",
                      color: "white",
                      borderRadius: 0,
                      marginLeft: 195,
                      marginTop: -35,
                    }}
                  >
                    {" "}
                    <i
                      class="fa-solid fa-bag-shopping"
                      style={{ marginRight: 6 }}
                    ></i>
                    Add to Cart
                  </button>
                </div>
              </div>

              <div className="column is-4">
                <div className="box">
                  <div className="sweet">
                    <img src="https://www.somoorish.com.au/admin/product_image/7_130g_dark%20_chocolate%20_MACADAMIA_min.webp" />
                  </div>

                  <h4
                    className="is-size-5 mt-4 font-semibold"
                    style={{ color: "black" }}
                  >
                    Macadamia - Dark Chocolate
                  </h4>
                  <br />

                  <p style={{ color: "#AD0047" }}>No ratings yet</p>

                  <p
                    style={{
                      color: "#AD0047",
                      marginTop: 9,
                      fontSize: 24,
                      fontWeight: 600,
                    }}
                  >
                    $9.24
                  </p>

                  <button
                    className="button"
                    style={{
                      backgroundColor: "#AD0047",
                      color: "white",
                      borderRadius: 0,
                      marginLeft: 195,
                      marginTop: -35,
                    }}
                  >
                    {" "}
                    <i
                      class="fa-solid fa-bag-shopping"
                      style={{ marginRight: 6 }}
                    ></i>
                    Add to Cart
                  </button>
                </div>
              </div>

              <div className="column is-4">
                <div className="box">
                  <div className="sweet">
                    <img src="https://www.somoorish.com.au/admin/product_image/130g_milk%20_chocolate%20MACADAMIA.webp" />
                  </div>
                  <h4
                    className="is-size-5 mt-4 font-semibold"
                    style={{ color: "black" }}
                  >
                    Macadamia - Milk Chocolate
                  </h4>
                  <br />

                  <p style={{ color: "#AD0047" }}>No ratings yet</p>

                  <p
                    style={{
                      color: "#AD0047",
                      marginTop: 9,
                      fontSize: 24,
                      fontWeight: 600,
                    }}
                  >
                    $9.24
                  </p>

                  <button
                    className="button"
                    style={{
                      backgroundColor: "#AD0047",
                      color: "white",
                      borderRadius: 0,
                      marginLeft: 195,
                      marginTop: -35,
                    }}
                  >
                    {" "}
                    <i
                      class="fa-solid fa-bag-shopping"
                      style={{ marginRight: 6 }}
                    ></i>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arrival;
