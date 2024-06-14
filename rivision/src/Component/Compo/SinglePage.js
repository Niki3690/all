import React from "react";
import { useParams } from "react-router-dom";
import DataDetail from "./DataDetail";

const SinglePage = () => {
  let { id } = useParams();

  let item = DataDetail.find((item) => item.id === id);
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          border: "2px solid red",
          paddingBottom: 15,
        }}
      >
        <img src={item.images} style={{ height: 170, width: 246 }} />

        <h3 style={{ height: 40 }}>{item.title}</h3>
        <h2>{item.price}</h2>
      </div>
    </div>
  );
};

export default SinglePage;
