import logo from "./logo.svg";
import "./App.css";
import Main from "./Component/Main";
import { createContext } from "react";
import Ceresole from "./Component/Ceresole";
import Todo from "./Compo/Todo";
import Todolist from "./Compo/Todolist";
import Stories from "./Compo/Stories";

// let Data = createContext();
// let Data1 = createContext();
// let Data2 = createContext();
// let Data3 = createContext();
function App() {
  // let name = "Niki";
  // let surname = "Patel";
  // let salary = 25000;
  // let age = 23;
  return (
    <>
      {/* <Stories/> */}
      {/* <Data.Provider value={name}>
        <Data1.Provider value={surname}>
          <Data2.Provider value={salary}>
            <Data3.Provider value={age}>
              <A />
            </Data3.Provider>
          </Data2.Provider>
        </Data1.Provider>`
      </Data.Provider> */}
      <Main />
      {/* <Todo/> */}
      {/* <Todolist/> */}

      {/* <Ceresole /> */}
    </>
  );
}

export default App;
// export { Data };
// export { Data1 };
// export { Data2 };
// export { Data3 };
