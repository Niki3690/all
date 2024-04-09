import React, { useState } from "react";
import Data from "./Data";

const Review = () => {
  let [index, setIndex] = useState(0);
  let { name, job, image, text } = Data[index];

  let checkNum = (number) => {
    if (number > Data.length - 1) {
      return 0;
    }
    if (number < 0) {
      return Data.length - 1;
    }
    return number;
  };

  let Right = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNum(newIndex);
    });
  };

  let Left = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNum(newIndex);
    });
  };

  let Random = () => {
    let random = Math.floor(Math.random() * Data.length);
    setIndex(random);
  };
  return (
    <>
      <div className="columns is-centered">
        <div className="column is-4">
          <div className="box">
            <div className="text-amber-400 ml-[565px]"></div>
            <center>
              <img
                src={image}
                className="h-28 w-28 rounded-full border-r-8 border-amber-600"
                style={{ position: "sticky" }}
              />
              <p className="font-bold text-xl" style={{ position: "sticky" }}>
                {name}
              </p>
              <p
                className="text-amber-600 -mt-1 font-bold"
                style={{ position: "sticky" }}
              >
                {job}
              </p>
              <p className="mt-2 font-normal text-base">{text}</p>

              <button>
                <i
                  className="fas fa-chevron-left mt-4 text-amber-600 font-extrabold"
                  onClick={Left}
                  style={{ position: "sticky" }}
                ></i>
              </button>

              <button>
                <i
                  className="fas fa-chevron-right mt-4 ml-4 text-amber-600 font-extrabold"
                  onClick={Right}
                  style={{ position: "sticky" }}
                ></i>
              </button>
              <br />

              <button
                className="bg-amber-600 pl-2 pr-2 pt-1 pb-1 mt-2 rounded text-white font-semibold"
                onClick={Random}
                style={{ position: "sticky" }}
              >
                Random
              </button>
            </center>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
