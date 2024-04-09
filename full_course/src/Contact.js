import React from "react";
import { Link, Outlet } from "react-router-dom";
import Insta from "./components/Insta";

const Contact = () => {
  return (
    <div>
      <h1 className="is-size-1 text-left m-4 p-4 font-bold ">CONTACT</h1>
      <hr style={{ border: "2px solid red" }} />

      <div>
        <div className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-2">
                <Link to="insta">
                  <h4 className="is-size-4">Instagram</h4>
                </Link>
              </div>
              <div className="column is-2">
                <Link to="mail">
                  <h4 className="is-size-4">Mail</h4>
                </Link>
              </div>

              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
