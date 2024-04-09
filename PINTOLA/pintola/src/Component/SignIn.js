import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  let [email, setEmail] = useState("");
  let [pass, setPass] = useState("");
  let [error, setError] = useState(false);

  let submit = (e) => {
    e.preventDefault();

    if (email.length === 0 || pass.length === 0) setError(true);
  };
  return (
    (document.title = "Account - Pintola"),
    <>
      <div style={{ display: "flex", paddingLeft: 40, paddingRight: 40 }}>
        <div>
          <Link to="/signin" className="signnn">
            <button
              className="button is-primary"
              style={{
                width: 600,
                backgroundColor: "#F06E27",
                padding: "9px 5px",
                border: "1px solid #F06E27",
                color: "white",
                fontSize: 16,
              }}
            >
              Login
            </button>
          </Link>
        </div>
        <div>
          <Link to="/signup" className="signnn">
            <button
              className="button"
              style={{
                width: 600,
                backgroundColor: "#FFF2DD",
                border: "1px solid #F06E27",
                padding: "9px 5px",
                fontSize: 16,
              }}
            >
              Sign Up
            </button>{" "}
          </Link>
        </div>
      </div>
      <br /> <br />
      <div>
        <p className="seller" style={{ textAlign: "left", marginLeft: 100 }}>
          Customer Login
        </p>
        <hr style={{ marginLeft: 105 }} />
        <br />
      </div>
      <form onSubmit={submit}>
        <div style={{ textAlign: "left", marginLeft: 100 }}>Email address*</div>
        <div>
          <input
            type="email"
            placeholder="Email address"
            style={{
              width: "1100px",
              marginLeft: 100,
              marginTop: 5,
              backgroundColor: "white",
              border: "1px solid #f5e8d3",
            }}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          {error && email.length <= 0 ? (
            <p style={{ paddingLeft: 100, color: "red", fontWeight: 600 }}>
              plz fill this email!
            </p>
          ) : (
            ""
          )}
        </div>
        <div style={{ textAlign: "left", marginLeft: 100, marginTop: 5 }}>
          Password*
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            style={{
              width: "1100px",
              marginLeft: 100,
              marginTop: 5,
              backgroundColor: "white",
            }}
            onChange={(e) => setPass(e.target.value)}
          ></input>

          {error && pass.length <= 0 ? (
            <p style={{ paddingLeft: 100, color: "red", fontWeight: 600 }}>
              plz fill this password!
            </p>
          ) : (
            ""
          )}
        </div>
        <div>
          <button
            style={{
              border: "1px solid black",
              padding: "5px 20px",
              marginLeft: 100,
              marginTop: 15,
              borderRadius: 7,
              backgroundColor: "white",
            }}
            className="colooor"
          >
            login
          </button>
        </div>
      </form>
      <div style={{ marginTop: -35 }}>
        <Link to="/ForgetPass">
          <div
            style={{
              textAlign: "right",
              marginRight: "85px",
              letterSpacing: 0.5,
            }}
          >
            <small className="hover:text-orange-500">
              Forgot your password?
            </small>
          </div>
        </Link>
      </div>
      <div>
        <p style={{ marginLeft: 100, marginTop: 35 }} className="neww">
          New Customer?
          {/* <span className="signnn">Sign up</span> */}
          <Link to="/signup" className="signnn">
            Sign up
          </Link>
        </p>
      </div>
      <br /> <br />
    </>
  );
};

export default SignIn;
