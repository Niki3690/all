import React, { useContext } from "react";
import { AppState } from "./Most";

const CompC = () => {
  let AppData = useContext(AppState);
  return (
    <div>
      CompC<h1>{AppData.data}</h1>
      CompC<h1>{AppData.feta}</h1>
    </div>
  );
};

export default CompC;
