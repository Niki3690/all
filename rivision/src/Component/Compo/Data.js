import React, { useState } from "react";
import DataDetail from "./DataDetail";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Store/CartSlice";
import { Link } from "react-router-dom";

const Data = () => {
  let names = useSelector((state) => state.cart);
  let dispatch = useDispatch();

  let [buttonn, setButtonn] = useState(DataDetail);
  let [searchh, setSearchh] = useState("");
  let [optionn, setOptionn] = useState("");

  let ADD = (demo) => {
    let update = names.find((dems, demmooo) => dems.id == demo.id);
    if (!update) {
      dispatch(add(demo));
    } else {
      alert("successfully Added One Time...🤩");
    }
  };

  let FUNN = (nn) => {
    let updateValue = DataDetail.filter((itemm) => itemm.category.name === nn);
    setButtonn(updateValue);
  };

  let CHNAGES = (e) => {
    setSearchh(e.target.value);

    let updateSearch = DataDetail.filter((itemsss) =>
      itemsss.category.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setButtonn(updateSearch);
  };

  let FUNNNN = (e) => {
    setOptionn(e.target.value);

    let nummmmm = DataDetail.filter((itemss) => {
      if (e.target.value === "") {
        return true;
      } else if (e.target.value === "0-20") {
        return itemss.price >= 0 && itemss.price <= 20;
      } else if (e.target.value === "20-40") {
        return itemss.price >= 20 && itemss.price <= 40;
      } else if (e.target.value === "40-60") {
        return itemss.price >= 40 && itemss.price <= 60;
      } else if (e.target.value === "60-80") {
        return itemss.price >= 60 && itemss.price <= 80;
      } else if (e.target.value === "80-100") {
        return itemss.price >= 80 && itemss.price <= 100;
      } else {
        return false;
      }
    });
    setButtonn(nummmmm);
  };

  return (
    <>
      <div
        style={{
          marginTop: 15,
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          gap: 25,
        }}
      >
        <button
          onClick={() => setButtonn(DataDetail)}
          style={{
            padding: "5px 15px",
            cursor: "pointer",
            border: "2px solid red",
          }}
        >
          ALL
        </button>
        <button
          onClick={() => FUNN("Clothes")}
          style={{
            padding: "5px 15px",
            cursor: "pointer",
            border: "2px solid red",
          }}
        >
          Clothes
        </button>
        <button
          onClick={() => FUNN("Electronics")}
          style={{
            padding: "5px 15px",
            cursor: "pointer",
            border: "2px solid red",
          }}
        >
          Electronics
        </button>
        <button
          onClick={() => FUNN("Furniture")}
          style={{
            padding: "5px 15px",
            cursor: "pointer",
            border: "2px solid red",
          }}
        >
          Furniture
        </button>
        <button
          onClick={() => FUNN("Shoes")}
          style={{
            padding: "5px 15px",
            cursor: "pointer",
            border: "2px solid red",
          }}
        >
          Shoes
        </button>
        <button
          onClick={() => FUNN("Miscellaneous")}
          style={{
            padding: "5px 15px",
            cursor: "pointer",
            border: "2px solid red",
          }}
        >
          Miscellaneous
        </button>

        <input
          type="text"
          placeholder="search here.."
          style={{ padding: "5px 15px", border: "2px solid red" }}
          onChange={CHNAGES}
          value={searchh}
        />

        <select
          value={optionn}
          onChange={FUNNNN}
          style={{ border: "2px solid red", cursor: "pointer" }}
        >
          <option value="">ALL PRICE</option>

          <option disabled></option>
          <option value="0-20">0-20</option>
          <option disabled></option>
          <option value="20-40">20-40</option>
          <option disabled></option>
          <option value="40-60">40-60</option>
          <option disabled></option>
          <option value="60-80">60-80</option>
          <option disabled></option>
          <option value="80-100">80-100</option>
        </select>
      </div>
      <div
        className="nnn"
        style={{
          display: "grid",
          gridTemplateColumns: "250px 250px 250px 250px",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          gap: 25,
          marginTop: 45,
        }}
      >
        {buttonn.length === 0 ? (
          <h1 style={{ gridColumn: "1/-1", fontSize: 45, marginTop: 145 }}>
            No Any Items Match....😕
          </h1>
        ) : (
          ""
        )}
        {buttonn.map((item) => {
          return (
            <div
              style={{
                textAlign: "center",
                border: "2px solid red",
                paddingBottom: 15,
              }}
            >
              {/* <Link to={`/item/${item.id}`}> */}
              <img src={item.images} style={{ height: 250, width: 246 }} />
              {/* </Link> */}
              <h3 style={{ height: 40 }}>{item.title}</h3>
              <h2>{item.price}</h2>
              <button
                onClick={() => ADD(item)}
                style={{ padding: "5px 15px", cursor: "pointer" }}
              >
                Add To Cart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Data;
