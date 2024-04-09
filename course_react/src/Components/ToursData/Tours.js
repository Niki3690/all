import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2 className="is-size-2 text-center mt-4 font-semibold underline underline-offset-8 decoration-red-600">
          Our Tours
        </h2>
      </div>
      <div>
        <div className="section">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-5">
                <div className="box">
                  {tours.map((tour) => {
                    return (
                      <Tour key={tour.id} {...tour} removeTour={removeTour} />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tours;
