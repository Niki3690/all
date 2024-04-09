import React from "react";
import AboutBanner from "./AboutBanner";

const About = () => {
  return (
    <div>
      <img
        src="https://somoorish.com.au/image/Aboutusmin.webp"
        style={{ marginTop: 30 }}
      />
      <br />

      <div className="columns is-centered" style={{ marginTop: -420 }}>
        <div className="column is-9">
          <div
            className="box leading-6"
            style={{
              backgroundColor: "#AD0941",
              borderRadius: 0,
              opacity: 0.9,
              paddingLeft: 40,
              paddingRight: 40,
            }}
          >
            <p
              className="text-center text-4xl text-white"
              style={{ fontWeight: 700, fontFamily: "Lato, sans-serif" }}
            >
              So Moorish Foods
            </p>

            <h6 className="is-size-6 text-center text-white">
              Manufactured in Melbourne, From Local and Quality Ingredients
            </h6>
            <br />

            <h6 className="is-size-6 text-center text-white">
              At So Moorish Foods we simply love gorgeous luxury chocolate. We
              cater to the premium chocolate lover, yet our chocolates are
              affordable for everyone. Our owners are two brothers, both chefs
              with a passion for chocolate who acquired So Moorish Foods in
              2018. Their existing business, Choconuts, already supplies many
              major retailers, meaning that we source premium ingredients at
              volume rates, making So Moorish exceptional value for a premium
              quality brand.
            </h6>

            <h6 className="is-size-6 text-center text-white">
              Since 2012 So Moorish Foods has been delivering premium quality
              chocolates to specialty retailers and direct to consumers. So
              Moorish Foods now features over 100 products across 14 ranges of
              premium chocolate. Ingredients are mainly sourced from Australian
              growers, (blueberries and raspberries come from Canada) and all
              manufacturing is on site in Melbourne, Australia.
            </h6>

            <h6 className="is-size-6 text-center text-white">
              So Moorish chocolate selections include something for every
              occasion and most ranges come in white, dark and milk chocolate,
              often with a sensationally unique colour or coating.
            </h6>
          </div>
        </div>
      </div>
      <AboutBanner />
    </div>        
  );
};

export default About;
