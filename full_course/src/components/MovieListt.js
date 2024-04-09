import React from "react";
import { Movie } from "./Movie";
const MovieListt = () => {
  return (
    <div className="grid grid-cols-3 gap-10 m-5 p- 5">
      {Movie.map((value, index, array) => {
        return (
          <div key={index}>
            <img
              src={value.image}
              style={{ height: "250px", width: "250px" }}
            />
            <h4 className="is-size-4 text-black font-bold">{value.movie}</h4>
            <h5 className="is-size-5 text-black font-semibold">
              {value.rating}
            </h5>
            <a
              href={value.imdb_url}
              style={{ textDecoration: "underline", marginLeft: "165px" }}
            >
              Read More..
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default MovieListt;
