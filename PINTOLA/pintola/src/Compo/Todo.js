import React, { useState } from "react";

const Todo = () => {
  let [value, setValue] = useState();
  let [todo, setTodo] = useState([]);

  let handleClick = () => {
    if (value !== "") {
      setTodo([...todo, value]);
      setValue("");
    }
  };
  return (
    <>
      <div
        style={{
          border: "12px double  black",
          width: 545,
          padding: 25,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 45,
          textAlign: "center",
        }}
      >
        <input
          type="text"
          placeholder="write here.."
          onChange={(e) => setValue(e.target.value)}
          value={value}
          style={{
            backgroundColor: "#FBE0C9",
            border: "4px solid black",
            fontWeight: 600,
          }}
        />
        <button
          className="button"
          onClick={handleClick}
          style={{
            border: "4px solid #FBE0C9",
            padding: "9px 15px",
            textAlign: "center",
            margin: "auto",
            marginTop: 25,
            backgroundColor: "black",
            color: "wheat",
            fontWeight: 700,
          }}
        >
          Add Todo
        </button>
      </div>

      <div>
        <ol>
          {todo.map((item) => (
            <li>{item}</li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default Todo;
