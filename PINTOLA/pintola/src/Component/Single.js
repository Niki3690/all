import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ProductDetail } from "./ProductDetail";
import { Pintola } from "./Contact";
import { useContext } from "react";
import "./Single.css";

const Single = () => {
  let { Add, Remove } = useContext(Pintola);
  let { id } = useParams();

  let item = ProductDetail.find((p) => p.id == id);
  return (
    <div>
       <div style={{ padding: 15 }}>
            <p style={{ fontSize: 23, fontWeight: 600, paddingLeft: 20 }}>
              {item.title}
            </p>
            <p style={{ paddingLeft: 20, marginTop: 10, paddingBottom: 35 }}>
              {item.small}
            </p>
          </div>
    </div>
  );
};

export default Single;
