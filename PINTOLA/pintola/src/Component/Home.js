import React from "react";
import "./Home.css";
import { Bestseller } from "./Bestseller";
import { Newlylaunched } from "./Newlylaunched";
import { AllProductDetail } from "./AllProductDetail";
import { Insta } from "./AllProductDetail";

const Home = () => {
  return (
    (document.title =
      "Pintola | Buy Peanut Butter Products  Online at best Prices"),
    (
      <div className="Home">
        <img
          src="https://www.pintola.in/cdn/shop/collections/Category_Banner_1200x.jpg?v=1691841783"
          className="imj"
        ></img>
        <div>
          <br />
          <p className="seller">Best Seller</p>
          <hr />
          <div className="best">
            <div className="grid grid-cols-4 ">
              {Bestseller.map((item) => {
                return (
                  <>
                    <div className="ma">
                      <img src={item.image} className="iimy" />
                      <p className="title">{item.title}</p>
                      <div className="mappp">
                        <p>from Rs.{item.rs}</p>
                        <p className="rs"> Rs.{item.ors}</p>
                      </div>
                      <p className="brand">{item.brand}</p>
                      <button className="buttonnn">Add to Cart</button>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>

        <br />
        <br />
        <div>
          <p className="seller">Newly Launched</p>
          <hr />

          <div className="Newly">
            <div className="grid grid-cols-4 ">
              {Newlylaunched.map((item) => {
                return (
                  <>
                    <div className="man">
                      <img src={item.image} className="iimgg" />
                      <p className="titlee">{item.title}</p>
                      <div className="mappps">
                        <p>from Rs.{item.rs}</p>
                        <p className="rs"> Rs.{item.ors}</p>
                      </div>
                      <p className="brand">{item.brand}</p>
                      <button className="bu">Add to Cart</button>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>

        <br />
        <br />
        <div>
          <p className="seller">Why Pintola?</p>
          <hr />
          <br />
          <br />

          <div className="fex">
            <div>
              <img src="https://www.pintola.in/cdn/shop/files/Artboard_203_200x.webp?v=1652159470"></img>
              <p>High Quality Product</p>
            </div>

            <div>
              <img src="https://www.pintola.in/cdn/shop/files/Artboard_201_ecac2b27-0613-4c7e-aa42-8ac4e81a9b57_200x.webp?v=1652159490"></img>
              <p>
                High Protein - High
                <br /> Fiber
              </p>
            </div>

            <div>
              <img src="https://www.pintola.in/cdn/shop/files/Artboard_205_200x.webp?v=1652159593"></img>
              <p>
                10 Lakh+ Happy
                <br /> Customer
              </p>
            </div>

            <div>
              <img src="https://www.pintola.in/cdn/shop/files/Artboard_204_200x.webp?v=1652159574"></img>
              <p>
                Top Quality
                <br /> Certifications
              </p>
            </div>

            <div>
              <img src="https://www.pintola.in/cdn/shop/files/Artboard_202_200x.webp?v=1652159534"></img>
              <p>100% Freshly Made</p>
            </div>

            <div>
              <img src="https://www.pintola.in/cdn/shop/files/Artboard_206_200x.webp?v=1652159555"></img>
              <p>
                More than 5 Lakh+
                <br /> Reviews
              </p>
            </div>
          </div>

          <div className="button">
            <button className="button">Learn More</button>
          </div>
          <br />
          <br />

          <div>
            <p className="seller">Happy Customers</p>
            <hr />
            <br />
          </div>

          <div className="images">
            <div>
              <img src="https://www.pintola.in/cdn/shop/files/Client_Review_on_All_Natural_400x.webp?v=1651864674w"></img>
            </div>

            <div>
              <img src="https://www.pintola.in/cdn/shop/files/Client_Review_on_Cashew_Butter_400x.webp?v=1651864727"></img>
            </div>

            <div>
              <img src="https://www.pintola.in/cdn/shop/files/Client_Review_on_Cashew_Butter_400x.webp?v=1651864727"></img>
            </div>
          </div>
        </div>

        <div style={{ marginTop: -115 }}>
          <p className="seller">All Products</p>
          <hr />

          <div>
            <div>
              <div className="nnnn grid grid-cols-4 gap:5">
                {AllProductDetail.map((item) => {
                  return (
                    <>
                      <>
                        <div className="ma">
                          <img src={item.image} className="iimy" />
                          <p className="title">{item.title}</p>
                          <div className="mappp">
                            <p>from Rs.{item.rs}</p>
                            <p className="rs"> Rs.{item.ors}</p>
                          </div>
                          <p className="brand">{item.brand}</p>
                          <button className="buttonnn">Add to Cart</button>
                        </div>
                      </>
                    </>
                  );
                })}
              </div>
              <br />
              <br />
            </div>
          </div>
        </div>

        <div>
          <p className="seller">Follow Us On Instagram @Pintola.in</p>
          <div
            className="nnnn"
            style={{
              display: "grid",
              gridTemplateColumns: "210px 210px 210px 210px 210px",

              gap: 12,
              rowGap: 25,

              marginTop: 45,
              justifyContent: "center",
            }}
          >
            {Insta.map((item) => (
              <>
                <img
                  src={item.images}
                  style={{
                    width: 350,
                    height: 190,
                  }}
                />
              </>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default Home;
