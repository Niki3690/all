import React from "react";
import Data from "./Data";

const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2000"
        style={{
          margin: "auto",
          textAlign: "center",
        }}
      >
        <div className="carousel-inner">
          {Data.map((item, index) => (
            <div
              key={item.id}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={item.thumbnail}
                style={{ height: 450, width: 450 }}
                alt={item.title}
              />
              <h3>{item.title}</h3>
              <h5>{item.price}</h5>
              <h5>{item.brand}</h5>
              <h5>{item.category}</h5>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
          style={{ marginLeft: 360 }}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
          style={{ marginRight: 360 }}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
