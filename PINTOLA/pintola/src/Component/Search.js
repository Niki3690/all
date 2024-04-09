import React from "react";

const Search = () => {
  return (
    (document.title = "Account - Pintola"),
    (
      <div>
        <div>
          <p className="seller" style={{ textAlign: "center", marginTop: 45 }}>
            Search
          </p>

          <div style={{ marginTop: 0 }}>
            <input
              type="text"
              placeholder="What are you looking for?"
              style={{
                width: "90%",
                marginLeft: 60,
                marginRight: 60,
                backgroundColor: "white",
                outline: "none",
                marginTop: 35,
                position: "relative",
              }}
            ></input>
          </div>

          <p style={{ textAlign: "center", marginTop: 15 }}>
            Commonly searched: Best Seller All Natural & Organic High Protein
            Peanut Butter Peanut Butter <br />
            Performance Series
          </p>

          <br />
        </div>
      </div>
    )
  );
};

export default Search;
