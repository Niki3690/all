import React from "react";
import Data from "./Data";
import Reminder from "./Reminder";
import { useState } from "react";

const App = () => {
  let [people, SetPeople] = useState(Data);

  return (
    <div>
      <h4 className="is-size-4 text-center mt-6 font-semibold">
        Birthdate Reminder
      </h4>

      <div className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4">
              <div className="box rounded-0">
                <h4 className="is-size-4 font-bold">
                  {Data.length} birthday today
                </h4>
                <br />
                <br />

                <Reminder people={people} />
                <button
                  class="button is-danger mt-7"
                  onClick={() => SetPeople([])}
                  style={{
                    padding: "12px 120px 12px 150px",
                    textAlign: "center",
                  }}
                >
                  Clear All
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
