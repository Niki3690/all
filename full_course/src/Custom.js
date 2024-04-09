import React, { useEffect, useState } from "react";

const Custom = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      let call = await fetch(
        "https://hub.dummyapis.com/employee?noofRecords=5&idStarts=1001"
      );

      let res = await call.json();
      console.log(res);
      setData(res);
    }

    getData();
  }, []);
  return (
    <div>
      {data.map((e, i) => {
        return (
          <>
            {e.age}
            <br />
            {e.firstName}
          </>
        );
      })}
    </div>
  );
};

export default Custom;
