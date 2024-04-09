import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <center>
        <img src={image} alt={name} className="h-96 w-96" />
      </center>
      <footer>
        <div className="tour-info">
          <h4 className="is-size-4 font-bold ml-4">{name}</h4>
          <h5 className="is-size-5 tour-price font-semibold ml-4 text-red-700">
            ${price}
          </h5>
          <p className="ml-4 text-base">{info}</p>
        </div>

        <center>
          <button
            className="button is-link delete-btn mt-3"
            onClick={() => removeTour(id)}
          >
            Not Interested
          </button>
        </center>
      </footer>
      <br />
      <br />
    </article>
  );
};

export default Tour;
