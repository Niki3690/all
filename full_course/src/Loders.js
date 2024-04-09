import { useEffect, useState } from "react";
import React from "react";
import { Bars, TailSpin } from "react-loader-spinner";

const Loders = () => {
  let [loading, setLoading] = useState(false);
  let [data, setData] = useState([]);
  useEffect(() => {
    setLoading(true);
    async function getData() {
      let res = await fetch(
        "https://hub.dummyapis.com/employee?noofRecords=1000&idStarts=1001"
      );
      let finalres = await res.json();
      setData(finalres);
      console.log(finalres);
      setLoading(false);
    }
    getData();
  }, []);
  return (
    <div className="ml-10 text-xl font-semibold ">
      <div className="box">
        <div className="grid grid-cols-3 gap-5 bg-green-100 p-7 rounded-2xl mt-10">
          {loading ? (
            <Bars color="black" />
          ) : (
            data.map((e, i) => {
              return (
                <>
                  <p>Name: {e.firstName}</p>
                  <p>Age: {e.age}</p>
                  
                </>
                
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Loders;
