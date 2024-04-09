import React, { useState, createContext } from "react";
import CompA from "./CompA";

let AppState = createContext();

const Most = () => {
  let [data, setData] = useState("webMantra");
  let [feta, setFeta] = useState("MantraWeb");
  return (
    <div>
      <AppState.Provider value={{data,feta}}>
      <CompA  />
      </AppState.Provider>
    </div>
  );
};

export default Most;
export {AppState}
