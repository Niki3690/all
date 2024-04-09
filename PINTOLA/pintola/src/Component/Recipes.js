import React from "react";
import { RecipesData } from "./RecipesData";
import { Link } from "react-router-dom";

const Recipes = () => {
  return (
    (document.title = "Healthy & Dilicious Recipes - Pintola"),
    (
      <div>
        <p
          style={{
            fontSize: 25,
            textAlign: "center",
            marginTop: 25,
            fontWeight: 700,
          }}
        >
          Healthy & Delicious Recipes
        </p>
        <hr />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "600px 570px",
            margin: 40,
            gap: 20,
            rowGap: 35,
          }}
        >
          {RecipesData.map((itemmm) => (
            <div style={{ border: "2px solid #f5e8d3" }}>
              <div>
                <Link to={`/itemmm/${itemmm.id}`}>
                  <img
                    src={itemmm.image}
                    style={{
                      width: "100%",
                      height: 230,
                      objectFit: "cover",
                      objectPosition: "0% 4%",
                    }}
                  ></img>
                </Link>
              </div>
              <div style={{ padding: 15 }}>
                <p style={{ fontSize: 23, fontWeight: 600, paddingLeft: 20 }}>
                  {itemmm.title}
                </p>
                <p
                  style={{ paddingLeft: 20, marginTop: 10, paddingBottom: 35 }}
                >
                  {itemmm.small}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default Recipes;
