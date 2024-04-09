import React, { useState,createContext } from "react";
import Num1 from "./Num1";



let Net=createContext()

const Mostt = () => {
  let [date, setDate] = useState("i am engineer");
  return (
    <div>
      <Net.Provider value={date}>
      <Num1 />
      </Net.Provider>
    </div>
  );
};
export {Net}
export default Mostt;

