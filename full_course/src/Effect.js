import React, { useEffect, useState } from "react";

const Effect = () => {
  let [state, setState] = useState(2);
  let [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      let fet = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`
      );
      let res = await fet.json();

      setData(res);
      console.log(res);
    }
    getData();
  }, [state]);
  return (
    <div>
      <p className="text-4xl font-bold text-center">{state}</p>
      <br />
      <center>
        <button
          onClick={() => setState(state + 1)}
          className="button is-primary"
        >
          CLICK ME!
        </button>
      </center>

      <div className="grid grid-cols-3 gap-5 m-5 p-5">
        {data.map((element, index) => {
          return (
            <>
              <div className="box">
                <h5 className="is-size-5">
                  <b>Id:</b>
                  {element.id}
                </h5>
                <h5 className="is-size-5">
                  <b>firstName:</b>
                  {element.firstName}
                </h5>
                <h5 className="is-size-5">
                  <b>lastName:</b>
                  {element.lastName}
                </h5>
                <h5 className="is-size-5">
                  <b>email:</b>
                  {element.email}
                </h5>
                <h5 className="is-size-5">
                  <b>contactNumber:</b>
                  {element.contactNumber}
                </h5>
                <h5 className="is-size-5">
                  <b>age:</b>
                  {element.age}
                </h5>
                <h5 className="is-size-5">
                  <b>dob:</b>
                  {element.dob}
                </h5>
                <br />
                <br />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Effect;
