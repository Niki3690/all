import React, { useState } from "react";
import Data from "./Data";

const SliderApp = () => {
  let [people, setPeople] = useState(Data);
  let [index, setIndex] = useState(0);

  const prevPerson = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? Data.length - 1 : prevIndex - 1
    );
  };

  const nextPerson = () => {
    setIndex((prevIndex) =>
      prevIndex === Data.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      {people.map((person, personIndex) => {
        let { id, image, name, title, quote } = person;

        return (
          <>
            <div className="section">
              <div className="container">
                <div className="columns is-centered">
                  <div className="column is-6">
                    <div className="box border-4 border-[#00593C]">
                      <div className="alll">
                        <center className="{position}">
                          <img
                            src={image}
                            alt={name}
                            className="w-[120px] h-[120px] rounded-full border-r-8 border-[#00593C] "
                          />
                        </center>
                      </div>
                      <p className="text-[#00593C] font-bold text-center text-xl">
                        {name}
                      </p>
                      <p className="text-xs text-center font-bold">{title}</p>
                      <p className="text-sm text-center mt-2">{quote}</p>
                      <center>
                        <i class="fa-solid fa-quote-right text-4xl text-[#00593C] mt-3 "></i>
                      </center>
                    </div>
                  </div>
                </div>
                <button
                  className="button -mt-48 ml-[125px]"
                  onClick={prevPerson}
                  style={{ backgroundColor: "#00593C", color: "white" }}
                >
                  <i class="fas fa-angle-left"></i>
                </button>

                <button
                  className="button ml-[425px] -mt-48"
                  onClick={nextPerson}
                  style={{ backgroundColor: "#00593C", color: "white" }}
                >
                  <i class="fas fa-angle-right"></i>
                </button>
              </div>
            </div>
          </>
        );
      })}

      <button
        className="button font-semibold"
        style={{ backgroundColor: "#00593C", color: "white" }}
      >
        miki
      </button>
      {/* <i class="fas fa-angle-left"></i>
      <i class="fas fa-angle-right"></i> */}
    </div>
  );
};

export default SliderApp;
