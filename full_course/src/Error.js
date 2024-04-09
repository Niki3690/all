import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <p
        style={{
          textAlign: "center",
          fontSize: 50,
          color: "red",
          fontFamily: "patra",
          fontWeight: 800,
        }}
      >
        Page is not found
      </p>

      <Link to="/about">
        <center>
          <button
            className="button is-primary"
            style={{
              padding: 30,
              paddingLeft: 65,
              paddingRight: 65,
              marginTop: 145,
              fontSize: 25,
              border: "2px groove  red",
            }}
          >
            Go Back
          </button>
        </center>
      </Link>
    </div>
  );
};

export default Error;
