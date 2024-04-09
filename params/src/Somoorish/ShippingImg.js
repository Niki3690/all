import React from "react";

const ShippingImg = () => {
  return (
    <div>
      <div className="shopy">
        <img
          src="https://somoorish.com.au/image/delivery2-min.jpg"
          style={{ height: "30vh", objectFit: "cover" }}
        ></img>
      </div>

      <h1
        className="text-center"
        style={{
          fontSize: 35,
          marginTop: -250,
          color: "white",
          position: "absolute",
          marginLeft: 510,
        }}
      >
        FREE SHIPPING
      </h1>
      <p
        className="text-center"
        style={{
          marginTop: -200,
          color: "white",
          fontSize: 18,
          marginLeft: 560,
          position: "absolute",
        }}
      >
        On orders over $100
      </p>
      <br />

      <center>
        <button
          className="button"
          style={{
            backgroundColor: "white",
            color: "#AD0047",
            borderRadius: 0,
            fontWeight: 600,
            marginTop: -175,
          }}
        >
          {" "}
          SHOP NOW
        </button>
      </center>
    </div>
  );
};

export default ShippingImg;
