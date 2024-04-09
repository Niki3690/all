import React, { useState } from "react";
import Data from "./Data";

const Question = ({ title, info }) => {
  let [showInfo, steShowInfo] = useState(true);

  return (
    <div>
      <div className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-6">
              <div className="box">
                <h4 className="is-size-4 font-semibold text-xl text-red-400">
                  {title}
                </h4>
                <button
                  className="button is-dark ml-[462px] -mt-8"
                  onClick={() => steShowInfo(!showInfo)}
                >
                  {showInfo ? (
                    <i class="fa-solid fa-minus"></i>
                  ) : (
                    <i class="fa-solid fa-plus"></i>
                  )}
                </button>

                {showInfo && <p>{info}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
