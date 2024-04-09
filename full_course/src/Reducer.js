import React, { useReducer } from "react";

let reducer = (state, action) => {
  if (action.type == "INC") {
    return state + 1;
  } else if (action.type == "DEC") {
    return state - 1;
  } else if (action.type == "MUL") {
    return state * 2;
  }else{
    return state
  }
  console.log("state:", state);
  console.log("action:", action);
};

const Reducer = () => {
  let [state, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h1 className="is-size-1" style={{ marginLeft: 150, fontWeight: 700 }}>
        {state}
      </h1>
      <button
        className="button is-dark"
        onClick={() => dispatch({ type: "INC" })}
      >
        Increment
      </button>
      <button
        className="button is-link"
        onClick={() => dispatch({ type: "DEC" })}
      >
        Decrement
      </button>
      <button
        className="button is-primary"
        onClick={() => dispatch({ type: "MUL" })}
      >
        Multiplication
      </button>
    </div>
  );
};

export default Reducer;
