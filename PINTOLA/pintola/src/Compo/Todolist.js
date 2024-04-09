import React, { useState } from "react";
import "./TodoList.css";

const Todolist = () => {
  let [activity, setActivity] = useState("");
  let [data, setData] = useState([]);

  let addMe = () => {
    setData([...data, activity]);
    setActivity("");
  };

  let RemoveMe = (id) => {
    let updatedData = data.filter((_, index) => index !== id);
    setData(updatedData);
  };

  const removeAll = () => {
    setData([]);
  };
  return (
    <>
      <div
        style={{
          textAlign: "center",
          border: "5px double green",
          width: 325,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 25,
          padding: 45,
        }}
      >
        <input
          className="input"
          type="text"
          placeholder="Add Something.."
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          style={{ padding: "7px 15px", border: "3px double green" }}
        ></input>

        <div style={{ display: "flex", gap: 15, justifyContent: "center" }}>
          <button
            className="buttonAdd"
            onClick={addMe}
            style={{
              marginTop: 20,
              border: "3px double green",
              padding: "7px 15px",
            }}
          >
            ADDME
          </button>

          <button
            className="buttonRemoveAll"
            onClick={() => removeAll()}
            style={{
              marginTop: 20,
              border: "3px double green",
              padding: "7px 15px",
            }}
          >
            Remove All
          </button>
        </div>
      </div>

      <div>
        <ol>
          {data.map((item, id) => (
            <div key={id}>
              <li>{item}</li>

              <button
                className="buttonRemove"
                onClick={() => RemoveMe(id)}
                style={{
                  marginTop: 20,
                  border: "3px double green",
                  padding: "7px 15px",
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </ol>
      </div>
    </>
  );
};

export default Todolist;
