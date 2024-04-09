import React from "react";
import { Link } from "react-router-dom";

const FordetPass = () => {
  return (
    <div>
      <div>
        <p
          className="seller"
          style={{ textAlign: "left", marginLeft: 100, marginTop: 35 }}
        >
          Customer Login
        </p>
        <hr style={{ marginLeft: 105 }} />
        <br />
      </div>


      <p
        className="seller"
        style={{
          textAlign: "left",
          marginLeft: 100,
          fontSize: 25,
          marginTop: 10,
        }}
      >
        Reset Password
      </p>
      <div style={{ textAlign: "left", marginLeft: 100, marginTop: 25 }}>
        Email address
      </div>
      <div>
        <input
          type="email"
          placeholder="Email address"
          style={{
            width: "500px",
            marginLeft: 100,
            marginTop: 5,
            backgroundColor: "white",
            border: "1px solid #f5e8d3",
          }}
        />
      </div>

      <p style={{ marginLeft: 100, marginTop: 25 }}>
        <i>We will send you an email to reset your password.</i>
      </p>

      <div style={{ display: "flex", gap: 345 }}>
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
            Submit
          </button>
        </div>

        <Link to="/signin">
          <div>
            <p>Cancel</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FordetPass;
