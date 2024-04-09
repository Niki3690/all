import React from "react";
import { RecipesData } from "./RecipesData";
import { useParams } from "react-router-dom";
const RecipesDetails = () => {
  let { id } = useParams();

  let itemmm = RecipesData.find((p) => p.id == id);
  return (
    <div>
      <div style={{ display: "flex", gap: 25 }}>
        <div>
          <div>
            <p style={{ paddingLeft: 50, fontSize: 30, fontWeight: 600 }}>
              {itemmm.title}
            </p>
          </div>

          <hr style={{ marginLeft: 55 }} />
          <img
            src={itemmm.image}
            style={{
              height: 850,
              paddingLeft: 50,
              marginTop: 65,
              width: 945,
            }}
          ></img>
          <p style={{ paddingLeft: 50, marginTop: 10 }}>{itemmm.review}</p>

          <p
            style={{
              paddingLeft: 50,
              marginTop: 10,
              fontWeight: 700,
              fontSize: 20,
            }}
          >
            Ingredients:
          </p>

          <div>
            <li style={{ listStyle: "inside", paddingLeft: 70, marginTop: 20 }}>
              {itemmm.ing1}
            </li>
            <li style={{ listStyle: "inside", paddingLeft: 70, marginTop: 10 }}>
              {itemmm.ing2}
            </li>
            <li style={{ listStyle: "inside", paddingLeft: 70, marginTop: 10 }}>
              {itemmm.ing3}
            </li>
            <li style={{ listStyle: "inside", paddingLeft: 70, marginTop: 10 }}>
              {itemmm.ing4}
            </li>
            <li style={{ listStyle: "inside", paddingLeft: 70, marginTop: 10 }}>
              {itemmm.ing5}
            </li>
            <li style={{ listStyle: "inside", paddingLeft: 70, marginTop: 10 }}>
              {itemmm.ing6}
            </li>
            <li style={{ listStyle: "inside", paddingLeft: 70, marginTop: 10 }}>
              {itemmm.ing7}
            </li>
            <li style={{ listStyle: "inside", paddingLeft: 70, marginTop: 10 }}>
              {itemmm.ing8}
            </li>
            <li style={{ listStyle: "inside", paddingLeft: 70, marginTop: 10 }}>
              {itemmm.ing9}
            </li>
          </div>

          <p
            style={{
              paddingLeft: 50,
              marginTop: 10,
              fontWeight: 700,
              fontSize: 20,
            }}
          >
            Instructions:
          </p>

          <li style={{ listStyle: "inside", paddingLeft: 70, marginTop: 20 }}>
            {itemmm.ins1}
          </li>
          <li style={{ listStyle: "inside", paddingLeft: 70, marginTop: 10 }}>
            {itemmm.ins2}
          </li>
          <li style={{ listStyle: "inside", paddingLeft: 70, marginTop: 10 }}>
            {itemmm.ins3}
          </li>
          <li style={{ listStyle: "inside", paddingLeft: 70, marginTop: 10 }}>
            {itemmm.ins4}
          </li>
          <li style={{ listStyle: "inside", paddingLeft: 70, marginTop: 10 }}>
            {itemmm.ins5}
          </li>
          <li style={{ listStyle: "inside", paddingLeft: 70, marginTop: 10 }}>
            {itemmm.ins6}
          </li>
          <li style={{ listStyle: "inside", paddingLeft: 70, marginTop: 10 }}>
            {itemmm.ins7}
          </li>
          <li style={{ listStyle: "inside", paddingLeft: 70, marginTop: 10 }}>
            {itemmm.ins8}
          </li>
          <li style={{ listStyle: "inside", paddingLeft: 70, marginTop: 10 }}>
            {itemmm.ins9}
          </li>
        </div>

        <div>
          <p style={{ fontSize: 25, fontWeight: 600, marginTop: 25 }}>
            Other Yummy Recipes{" "}
          </p>

          <div style={{ width: 290 }}>
            <p style={{ marginTop: 13 }}>{itemmm.other1}</p>
            <p style={{ marginTop: 7 }}>{itemmm.other2}</p>
            <p style={{ marginTop: 7 }}>{itemmm.other3}</p>
            <p style={{ marginTop: 7 }}>{itemmm.other4}</p>
            <p style={{ marginTop: 7 }}>{itemmm.other5}</p>
            <p style={{ marginTop: 7 }}>{itemmm.other6}</p>
            <p style={{ marginTop: 7 }}>{itemmm.other7}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipesDetails;
  