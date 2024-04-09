import React, { useState } from "react";

const RecordKeep = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [data, setData] = useState([]);

  let save = () => {
    setData([...data, { name, email }]);
    setName("");
    setEmail("");
  };
  let remove = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  };
  return (
    <div>
      <div className="section">
        <div className="container">
          <div className="box">
            <div className="form">
              <div className="columns is-centered">
                <div className="column is-3">
                  <input
                    className="input is-danger"
                    placeholder="Enter Name"
                    type="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="column is-3">
                  <input
                    className="input is-danger"
                    placeholder="Enter Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <center>
                <button className="button is-danger" onClick={save}>
                  ADD
                </button>
              </center>
            </div>
          </div>

          <div className="data">
            <h4 className="is-size-4" style={{ marginLeft: 145 }}>
              Name
            </h4>
            <h4
              className="is-size-4"
              style={{ marginLeft: 345, marginTop: -35 }}
            >
              Email
            </h4>
            <h4
              className="is-size-4"
              style={{ marginLeft: 545, marginTop: -35 }}
            >
              Remove
            </h4>

            {data.map((value, index) => {
              return (
                <>
                  <div key={index} className="box">
                    <p style={{ marginLeft: 140, fontSize: 20 }}>
                      {value.name}
                    </p>
                    <p
                      style={{ marginLeft: 325, marginTop: -30, fontSize: 20 }}
                    >
                      {value.email}
                      {
                        <button
                          className="button is-danger"
                          onClick={() => remove(index)}
                          style={{ marginLeft: 165, fontWeight: 600 }}
                        >
                          DELETE
                        </button>
                      }
                    </p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordKeep;
