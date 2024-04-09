import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const Ref = () => {
  let [input, setInput] = useState("");
  let count = useRef();

  let Handler = (e) => {
    setInput(e.target.value);
  };

  let Submit = () => {
    count.current.focus();
  };
  return (
    <center>
      <div>
        <input
          class="input is-link"
          type="text"
          value={input}
          onChange={Handler}
          style={{ width: 250, marginTop: 215 }}
          ref={count}
        />

        <button className="button is-danger" onClick={Submit}>
          Submit
        </button>
      </div>
    </center>
  );
};

export default Ref;
