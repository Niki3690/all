import React, { useState } from "react";
import List from "./List";
import Alert from "./Alert";

const GroceryApp = () => {
  let [name, setName] = useState("");
  let [list, setList] = useState([]);
  let [isEditing, setIsEditing] = useState(false);
  let [editID, setEditID] = useState(null);
  let [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  let Submit = (e) => {
    e.preventDefault();
    if (!name) {
    } else if (name && isEditing) {
    } else {
      let newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  return (
    <div>
      <div className="columns is-centered pt-24">
        <div className="column is-5">
          <div className="box">
            <h4 className="is-size-4 has-text-centered has-text-weight-semibold">
              Grocery List
            </h4>
            <form onSubmit={Submit}>
              {alert.show && <Alert />}
              <div className="field has-addons ml-4">
                <div className="control">
                  <input
                    className="input is-link mt-2 is-small is-rounded"
                    placeholder="Add Your items"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      width: "245px",
                      marginLeft: "85px",
                      height: "45px",
                    }}
                  ></input>
                </div>

                <div className="control">
                  <button
                    className="button is-link mt-2 is-small has-text-weight-bold is-rounded"
                    style={{ height: "45px" }}
                  >
                    {isEditing ? "edit" : "submit"}
                  </button>
                </div>
              </div>
            </form>

            {list.length > 0}

            <List items={list} />

            <button className="button is-link">clear items</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroceryApp;
