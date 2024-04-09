import React, { useEffect, useState } from "react";
import ProductData from "./ProductData";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../Store/CartSlice";
import { Link } from "react-router-dom";
import Pegination from "./Pegination";

const ProductDetail = () => {
  let names = useSelector((state) => state.cart);
  let dispatch = useDispatch();
  let ADD = (items) => {
    let itemss = names.find((cartItems) => cartItems.id === items.id);
    if (!itemss) {
      dispatch(add(items));
    }
  };

  let [buttonnn, setButtonnnn] = useState(ProductData);
  let [searchh, setsearchh] = useState("");
  let [filterPrice, setFilterPrice] = useState("");

  let BUTTTON = (numm) => {
    let update = ProductData.filter((numberr) => numberr.category == numm);
    setButtonnnn(update);
  };

  let SEARCHH = (e) => {
    setsearchh(e.target.value);

    let Numberr = ProductData.filter((itemss) =>
      itemss.category.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setButtonnnn(Numberr);
  };

  let showPerPage = 6;
  let [currentPage, setCurrentPage] = useState(1);
  let lastIndexPage = currentPage * showPerPage;
  let firstIndexPage = lastIndexPage - showPerPage;
  let FinalIndexPage = buttonnn.slice(firstIndexPage, lastIndexPage);
  let peginate = (numm) => setCurrentPage(numm);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(names));
  }, [names]);

  let FILTERPRICE = (e) => {
    setFilterPrice(e.target.value);

    let PriceFilterd = ProductData.filter((item) => {
      if (e.target.value === "") {
        return true;
      } else if (e.target.value === "0-500") {
        return item.price >= 0 && item.price <= 500;
      } else if (e.target.value === "500-1000") {
        return item.price >= 500 && item.price <= 1000;
      } else if (e.target.value === "1000-1500") {
        return item.price >= 1000 && item.price <= 1500;
      } else {
        return false;
      }
    });
    setButtonnnn(PriceFilterd);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: 15,
          justifyContent: "center",
          marginTop: 25,
        }}
      >
        <button
          style={{
            padding: "10px 25px",
            cursor: "pointer",
            backgroundColor: "#FDD1D4",
            color: "black",
            fontSize: 15,
            border: "none",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
          onClick={() => setButtonnnn(ProductData)}
        >
          ALL
        </button>
        <button
          style={{
            padding: "7px 25px",
            cursor: "pointer",
            backgroundColor: "#FDD1D4",
            color: "black",
            fontSize: 15,
            border: "none",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
          onClick={() => BUTTTON("men's clothing")}
        >
          Men's clothing
        </button>
        <button
          style={{
            padding: "7px 25px",
            cursor: "pointer",
            backgroundColor: "#FDD1D4",
            color: "black",
            fontSize: 15,
            border: "none",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
          onClick={() => BUTTTON("jewelery")}
        >
          Jewelery
        </button>
        <button
          style={{
            padding: "7px 25px",
            cursor: "pointer",
            backgroundColor: "#FDD1D4",
            color: "black",
            fontSize: 15,
            border: "none",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
          onClick={() => BUTTTON("electronics")}
        >
          Electronics
        </button>
        <button
          style={{
            padding: "7px 25px",
            cursor: "pointer",
            backgroundColor: "#FDD1D4",
            color: "black",
            fontSize: 15,
            border: "none",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
          onClick={() => BUTTTON("women's clothing")}
        >
          Women's clothing
        </button>
        <button
          style={{
            padding: "7px 25px",
            cursor: "pointer",
            backgroundColor: "#FDD1D4",
            color: "black",
            fontSize: 15,
            border: "none",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
          onClick={() => BUTTTON("men's shoes")}
        >
          Men's shoes
        </button>
        <input
          type="text"
          placeholder="search here.."
          value={searchh}
          onChange={SEARCHH}
          style={{
            backgroundColor: "#FDD1D4",
            color: "black",
            fontSize: 15,
            border: "none",
            fontWeight: 600,
            fontSize: 15,
          }}
        />

        <select value={filterPrice} onChange={FILTERPRICE}>
          <option value="">All Price</option>
          <option value="0-500">0-500</option>
          <option value="500-1000">500-1000</option>
          <option value="1000-1500">1000-1500</option>
        </select>
      </div>

      <div
        style={{
          gridTemplateColumns: "250px 250px 250px 250px",
          display: "grid",
          gap: 40,
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
          marginBottom: 25,
          rowGap: 25,
        }}
      >
        {FinalIndexPage.map((items) => {
          return (
            <>
              <div
                style={{
                  textAlign: "center",
                  border: "2px solid gray",
                  paddingBottom: 15,
                  paddingTop: 10,
                }}
              >
                <Link
                  to={`items/${items.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <h2>{items.id}</h2>
                  <img src={items.image} style={{ height: 140, width: 160 }} />
                  <h3 style={{ height: 20, marginBottom: 40, marginTop: 25 }}>
                    {items.title.slice(0, 25)}
                  </h3>
                  <h2 style={{ marginBottom: 15, color: "blue" }}>
                    {items.price}
                  </h2>
                </Link>
                <button
                  style={{
                    padding: "9px 25px",
                    cursor: "pointer",
                    backgroundColor: "#FDD1D4",
                    color: "black",
                    border: "none",
                    fontWeight: 600,
                    fontSize: 15,
                  }}
                  onClick={() => ADD(items)}
                >
                  AddToCart
                </button>
              </div>
            </>
          );
        })}

        <></>
      </div>
      <Pegination
        showPerPage={showPerPage}
        currentPage={currentPage}
        peginate={peginate}
        totalIndexPage={buttonnn.length}
      />
    </>
  );
};
export default ProductDetail;
