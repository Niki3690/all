import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    (document.title = "About Us - Pintola"),
    (
      <div>
        <div className="medi">
          <h1
            className="text-3xl text-center font-medium pt-4 "
            style={{ backgroundColor: " #F5E8D3" }}
          >
            Our Mission & Vision
          </h1>
          <p className="pt-6">
            To serve more than 100 million people with the healthy, delicious
            and ready-to-eat food products.
          </p>

          <p className="pt-4">
            To achieve continuous business growth together with our stakeholders
            including farmers, exporters and distributors.
          </p>

          <p className="pt-4">
            We strive to be the best company in India for peanut butter and
            related products. We endeavor to achieve this goal by providing
            competitive products in all means.
            <br />
            <br />
          </p>
        </div>

        <div className="imgg">
          <img src="https://www.pintola.in/cdn/shop/files/desktop_size_1400x.jpg?v=1620836643"></img>
        </div>

        <div className="imggg">
          <img src="https://www.pintola.in/cdn/shop/files/Asset_7_150x-100_1400x.jpg?v=1678087744"></img>
        </div>
      </div>
    )
  );
};

export default AboutUs;
