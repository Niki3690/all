import React, { useState } from "react";

const State = () => {
  let [num, setNum] = useState(1);

  let incr = () => {
    setNum(num + 1);
  };

  let decr = () => {
    setNum(num - 1);
  };

  let reset = () => {
    setNum("");
  };

  return (
    <div>
      <div className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4">
              <div
                className="box"
                style={{
                  backgroundColor: "palegoldenrod",
                  border: "6px solid black",
                }}
              >
                <h3 className="is-size-3 text-center font-bold">{num}</h3>
                <center>
                  <button
                    className="button p-5 m-2"
                    onClick={incr}
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      fontSize: 22,
                      border: "none",
                      fontWeight: 600,
                    }}
                  >
                    Incr
                  </button>
                  <button
                    className="button p-5 m-2"
                    onClick={decr}
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      fontSize: 22,
                      border: "none",
                      fontWeight: 600,
                    }}
                  >
                    Decr
                  </button>

                  <button
                    className="button p-5 m-2"
                    onClick={reset}
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      fontSize: 22,
                      border: "none",
                      fontWeight: 600,
                    }}
                  >
                    Reset
                  </button>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default State;
