import React, { useState } from "react";

const Memo = () => {
  let [count, setCount] = useState(0);
  let [name, setName] = useState("");

  let cal = (num) => {
    for (let i = 0; i < 1000000000; i++) {}
    return num;
  };

  let calcu = cal(count);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>Count:{count}</h1>

      <input className="input" onChange={(e) => setName(e.target.value)}/>
     
   
      <h1>Name:{name}</h1>
    </div>
  );
};

export default Memo;
