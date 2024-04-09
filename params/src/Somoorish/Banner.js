import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="set">
        <img
          src="https://somoorish.com.au/admin/sliderzimage/SomoorishSlider.jpg"
          className="main"
        />  
      </div>
      <br />
      <br />

      <div className="columns" style={{ marginTop: -520, paddingLeft: 25 }}>
        <div className="column is-6" style={{ marginLeft: 30 }}>
          <h2
            className="is-size-2 text-white"
            style={{ fontSize: 45, fontWeight: 630, position: "absolute" }}
          >
            So Moorish
          </h2>
          <h5
            className="is-size-5 text-white"
            style={{ position: "absolute", marginTop: 75 }}
          >
            Manufactured in Melbourne, From Local and Quality Ingredients. At So
            <br /> Moorish Foods we simply love gorgeous luxury chocolate. We
            cater to
            <br /> the premium chocolate lover, yet our chocolates are
            affordable for
            <br /> everyone.{" "}
          </h5>
          <br />
          <br />
          <button
            className="shop"
            style={{
              borderRadius: 0,
              color: "#AD0047",
              fontWeight: 700,
              position: "absolute",
              marginTop: 196,
            }}
          >
            SHOP NOW
          </button>
        </div>
      </div>

      <div
        className="flex"
        style={{
          paddingLeft: "150px",
          paddingRight: "150px",
          marginTop: "-30px",
          backgroundColor: "#FAF0F5",
          paddingBottom: 17,
          gap: 45,
        }}
      >
        <div>
          <i
            class="fa-solid fa-truck   nik"
            style={{ marginTop: 445, color: "#AD0047", fontSize: 38 }}
          ></i>
          <h5
            style={{ marginLeft: "60px", marginTop: "-49px", color: "black" }}
          >
            FREE SHIPPING
            <br />
            On orders over $100
          </h5>
        </div>

        <div>
          <i
            class="fa-solid fa-clock    nik"
            style={{ marginTop: 445, color: "#AD0047", fontSize: 38 }}
          ></i>
          <h5
            style={{ marginLeft: "55px", marginTop: "-49px", color: "black" }}
          >
            EXPRESS DELIVERY
            <br />
            Available for Metro Areas*
          </h5>
        </div>
        <div>
          <i
            class="fa-solid fa-store    nik"
            style={{ marginTop: 445, color: "#AD0047", fontSize: 38 }}
          ></i>
          <h5
            style={{ marginLeft: "60px", marginTop: "-49px", color: "black" }}
          >
            PICKUP FROM STORE
            <br />
            For your comfort
          </h5>
        </div>
        <div>
          <i
            class="fa-solid fa-lock   nik"
            style={{ marginTop: 445, color: "#AD0047", fontSize: 38 }}
          ></i>
          <h5
            style={{ marginLeft: "50px", marginTop: "-49px", color: "black" }}
          >
            SECURED
            <br />
            Shopping Site
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Banner;
