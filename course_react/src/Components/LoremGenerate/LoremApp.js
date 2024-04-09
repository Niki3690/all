import React, { useState } from "react";
import Data from "./Data";

const LoremApp = () => {
  let [count, setCount] = useState(0);
  let [text, setText] = useState([]);

  let Submit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    setText(Data.slice(0, amount));
  };

  return (
    <div>
      <div className="section mt-6">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-6">
              <div className="box" style={{ border: "2px solid #7F1D1D" }}>
                <form className="" onSubmit={Submit}>
                  <label className="font-semibold">Paragraphs:</label>
                  <input
                    className="input ml-2"
                    type="number"
                    name="amount"
                    id="amount"
                    value={count}
                    onChange={(e) => setCount(e.target.value)}
                    style={{ width: "80px", border: "2px solid #7F1D1D" }}
                  ></input>
                  <button
                    className="button ml-2 pl-2 pr-2"
                    style={{
                      backgroundColor: "#7F1D1D",
                      color: "white",
                      fontWeight: 600,
                    }}
                  >
                    Click Me!
                  </button>
                </form>
                <hr style={{ backgroundColor: "#7F1D1D" }} />

                {text.map((item, index) => {
                  return (
                    <>
                      <p className="text-xs" key={index}>
                        {item}
                      </p>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoremApp;
