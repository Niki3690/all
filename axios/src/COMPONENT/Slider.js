import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Data from "./Data";

const Slider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div
      style={{
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={2000}
        infinite={true}
        keyBoardControl={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {Data.map((item) => {
          return (
            <>
              <h1>{item.id}</h1>
              <img src={item.thumbnail} style={{ height: 150, width: 300 }} />
              <h3>{item.title}</h3>
              <h5>{item.price}</h5>
              <h5>{item.brand}</h5>
              <h5>{item.category}</h5>
            </>
          );
        })}
      </Carousel>
      ;
    </div>
  );
};

export default Slider;
