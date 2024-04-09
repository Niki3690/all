import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { useState, useEffect } from "react";
import { Bars } from "react-loader-spinner";
import "react-toastify/dist/ReactToastify.css";

const Tostify = () => {
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
      toast.success("Successfully data");
    }
    getData();
  }, []);
  return (
    <div className="ml-10 text-xl font-semibold ">
      <div className="box">
        <div className="grid grid-cols-3 gap-5 bg-green-100 p-7 rounded-2xl mt-10">
          <ToastContainer />
          {loading ? (
            <Bars />
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

export default Tostify;
