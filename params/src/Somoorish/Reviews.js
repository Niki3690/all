import React from "react";

const Reviews = () => {
  return (
    <div>
      <br />
      <br />

      <div style={{ marginLeft: 45 }}>
        <div className="section">
          <div className="container">
            <h3 className="is-size-3 font-semibold text-black">
              Customer Reviews
            </h3>
            <hr style={{ backgroundColor: "#AD0047" }} />

            <h2 className="is-size-2 font-semibold text-black"
            >4.9</h2>
            <div style={{ marginTop: "-45px", marginLeft: 3 }}>
              <i
                class="fa-sharp fa-solid fa-star"
                style={{ color: "#AD0047", fontSize: 35, marginLeft: 75 }}
              ></i>
              <i
                class="fa-sharp fa-solid fa-star"
                style={{ color: "#AD0047", fontSize: 35 }}
              ></i>
              <i
                class="fa-sharp fa-solid fa-star"
                style={{ color: "#AD0047", fontSize: 35 }}
              ></i>
              <i
                class="fa-sharp fa-solid fa-star"
                style={{ color: "#AD0047", fontSize: 35 }}
              ></i>
              <i
                class="fa-sharp fa-solid fa-star"
                style={{ color: "#AD0047", fontSize: 35 }}
              ></i>
            </div>

            <h4
              className="is-size-4 text-black"
              style={{ marginLeft: 290, marginTop: -35 }}
            >
              7 Reviews
            </h4>

            <h6
              className="is-size-6 mt-4 text-black"
              style={{ textDecoration: "underline" }}
            >
              Sort & Filters
            </h6>
            <div
              style={{
                border: "3px solid #000000",
                width: 150,
                marginTop: 15,
                marginLeft: 22,
              }}
              className="pl-2"
            >
              <p>Sort by</p>
              <p class="text-black">
                <b>
                  Most Recent
                  <i class="fa fa-angle-down" style={{ marginLeft: 15 }}></i>
                </b>
              </p>
            </div>

            <div
              style={{
                border: "3px solid #000000",
                width: 150,
                marginTop: -52,
                marginLeft: 185,
              }}
              className="pl-2"
            >
              <p>Sort by</p>
              <p class="text-black">
                <b>
                  All<i class="fa fa-angle-down" style={{ marginLeft: 85 }}></i>
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
