import React, { useState } from "react";
import { Link } from "react-router-dom";
const Signup = () => {
  let [fname, setFname] = useState("");
  let [lname, setLname] = useState("");
  let [email, setEmail] = useState("");
  let [pass, setPass] = useState("");
  let [error, setError] = useState(false);

  let submit = (e) => {
    e.preventDefault();

    if (
      fname.length === 0 ||
      lname.length === 0 ||
      email.length === 0 ||
      pass.length === 0
    )
      setError(true);
  };
  return (
    <div>
      <div>
        <p
          className="seller"
          style={{ textAlign: "left", marginLeft: 50, paddingTop: 25 }}
        >
          Create Account
        </p>
        <hr style={{ marginLeft: 50 }} />
        <br />
      </div>

      <form onSubmit={submit}>
        <div style={{ textAlign: "left", marginLeft: 50, marginTop: 15 }}>
          First name
        </div>
        <div>
          <input
            type="text"
            placeholder="First name"
            style={{
              width: "600px",
              marginLeft: 50,
              marginTop: 5,
              backgroundColor: "white",
              border: "1px solid #f5e8d3",
            }}
            onChange={(e) => setFname(e.target.value)}
          ></input>
          {error && fname.length <= 0 ? (
            <p style={{ paddingLeft: 55, color: "red", fontWeight: 600 }}>
              Plz add Fname!
            </p>
          ) : (
            " "
          )}
        </div>

        <div style={{ textAlign: "left", marginLeft: 50, marginTop: 2 }}>
          Last name
        </div>
        <div>
          <input
            type="text"
            placeholder="Last name"
            style={{
              width: "600px",
              marginLeft: 50,
              marginTop: 5,
              backgroundColor: "white",
              border: "1px solid #f5e8d3",
            }}
            onChange={(e) => setLname(e.target.value)}
          ></input>
          {error && lname.length <= 0 ? (
            <p style={{ paddingLeft: 55, color: "red", fontWeight: 600 }}>
              Plz add Lname!
            </p>
          ) : (
            " "
          )}
        </div>

        <div style={{ textAlign: "left", marginLeft: 50, marginTop: 2 }}>
          Email address*
        </div>
        <div>
          <input
            type="email"
            placeholder="Email address"
            style={{
              width: "600px",
              marginLeft: 50,
              marginTop: 5,
              backgroundColor: "white",
              border: "1px solid #f5e8d3",
            }}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          {error && email.length <= 0 ? (
            <p style={{ paddingLeft: 55, color: "red", fontWeight: 600 }}>
              Plz add Email!
            </p>
          ) : (
            " "
          )}
        </div>

        <div style={{ textAlign: "left", marginLeft: 50, marginTop: 2 }}>
          Password*
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            style={{
              width: "600px",
              marginLeft: 50,
              marginTop: 5,
              backgroundColor: "white",
              border: "1px solid #f5e8d3",
            }}
            onChange={(e) => setPass(e.target.value)}
          ></input>
          {error && pass.length <= 0 ? (
            <p style={{ paddingLeft: 55, color: "red", fontWeight: 600 }}>
              Plz add Pass!
            </p>
          ) : (
            " "
          )}
        </div>

        <div>
          <button
            style={{
              border: "1px solid black",
              padding: "5px 18px",
              marginLeft: 50,
              marginTop: 15,
              borderRadius: 7,
              backgroundColor: "white",
            }}
            className="colooor"
          >
            Sign Up
          </button>
        </div>
      </form>

      <div>
        <p style={{ marginLeft: 422, marginTop: -34 }} className="nnnn">
          * Indicates a required field
        </p>
      </div>

      <div>
        <p style={{ marginLeft: 50, marginTop: 35 }} className="neww">
          Returning Customer?
          <Link to="/signin" className="signnn">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
