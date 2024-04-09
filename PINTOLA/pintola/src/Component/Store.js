import React, { useContext } from "react";
import "./Store.css";
import { ProductDetail } from "./ProductDetail";
import { Pintola } from "./Contact";
import { Link } from "react-router-dom";

const Store = () => {
  let { Add } = useContext(Pintola);
  return (
    (document.title = "All Products-Pintola"),
    (
      <div className="sttore">
        <img
          src="https://www.pintola.in/cdn/shop/collections/4th_Banner_1200x.jpg?v=1670653062"
          className="images"
          style={{ marginLeft: -1 }}
        ></img>
        <br />
        <div
          style={{ display: "flex", fontSize: 11, gap: 14 }}
          className="small"
        >
          <Link to="/">
            <p>HOME</p>
          </Link>
          <p>
            <i className="fa fa-circle" style={{ fontSize: 5 }}></i>
          </p>
          <Link to="/store">
            <p>ALL PRODUCTS</p>
          </Link>
        </div>
        <div>
          <div className="grid grid-cols-5 gap:5" style={{ marginTop: -20 }}>
            {ProductDetail.map((item) => {
              return (
                <>
                  <div className="mapp">
                    <Link to={`/item/${item.id}`}>
                      <img src={item.image} className="iimg" />
                    </Link>

                    <small className="dis">{item.dis}% OFF</small>
                    <p className="title">{item.title}</p>
                    <div className="mappp">
                      <p>from Rs.{item.rs}</p>
                      <p className="rs"> Rs.{item.ors}</p>
                    </div>
                    <p className="brand">{item.brand}</p>

                    <button className="buttonnnn" onClick={() => Add(item)}>
                      Add to Cart
                    </button>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <br /> <br /> <br />
      </div>
    )
  );
};

export default Store;
