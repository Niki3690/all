import React from "react";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#AD0047", height: 375, marginTop: 25 }}>
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-3">
              <img
                src="https://somoorish.com.au/image/footlogo.png"
                style={{ marginTop: -20, height: 55 }}
              />

              <p style={{ color: "white", marginTop: 17 }}>
                If your order has been received in an unacceptable condition,
                please contact customer service so that we can, at our
                discretion, arrange either a refund or a replacement. All we
                need is a photograph sent via email of any damaged goods.
              </p>
            </div>

            <div className="column is-3">
              <h5
                className="is-size-5"
                style={{ color: "white", marginTop: -20, fontWeight: 700 }}
              >
                | Contact Us
              </h5>
              <br />

              <i
                class="fa-solid fa-location-dot"
                style={{ color: "white" }}
              ></i>
              <p
                style={{
                  marginLeft: 22,
                  marginTop: -25,
                  color: "white",
                  fontSize: 14,
                }}
              >
                34B Glenbarry Rd, Campbellfield VIC 3061, Australia
              </p>

              <i
                class="fa-solid fa-clock"
                style={{ color: "white", marginTop: 12 }}
              ></i>
              <p
                style={{
                  marginLeft: 22,
                  marginTop: -25,
                  color: "white",
                  fontSize: 14,
                }}
              >
                Monday – Friday 9:00 AM – 5:00 PM AEST
              </p>

              <i
                class="fa-solid fa-phone"
                style={{ color: "white", marginTop: 12 }}
              ></i>
              <p
                style={{
                  marginLeft: 22,
                  marginTop: -25,
                  color: "white",
                  fontSize: 14,
                }}
              >
                +61 430 391 091
              </p>

              <i
                class="fa-solid fa-envelope"
                style={{ color: "white", marginTop: 12 }}
              ></i>
              <p
                style={{
                  marginLeft: 22,
                  marginTop: -25,
                  color: "white",
                  fontSize: 14,
                }}
              >
                info@somoorish.com.au
              </p>
            </div>

            <div className="column is-3">
              <h5
                className="is-size-5"
                style={{ color: "white", fontWeight: 700, marginTop: -20 }}
              >
                | Help & Support
              </h5>
              <br />

              <p style={{ marginLeft: 22, color: "white", marginBottom: 12 }}>
                About Us
              </p>

              <p style={{ marginLeft: 22, color: "white", marginBottom: 12 }}>
                Shop
              </p>

              <p style={{ marginLeft: 22, color: "white", marginBottom: 12 }}>
                Categories
              </p>

              <p style={{ marginLeft: 22, color: "white", marginBottom: 12 }}>
                Contact
              </p>
            </div>

            <div className="column is-3">
              <h5
                className="is-size-5"
                style={{ color: "white", fontWeight: 700, marginTop: -20 }}
              >
                | News Letter
              </h5>
              <br />

              <input
                class="input"
                placeholder="Enter eail address"
                style={{ borderRadius: 0, width: 210 }}
              ></input>
              <button
                className="button"
                style={{
                  borderRadius: 0,
                  marginLeft: 215,
                  marginTop: -40,
                  color: "#AD0047",
                  width: 100,
                  border: "none",
                }}
              >
                <p>Subscribe</p>
              </button>

              <p style={{ fontSize: 12, color: "white", marginTop: -11 }}>
                By signing up, you agree to our{" "}
                <span style={{ textDecoration: "underline" }}>
                  Terms & Conditions
                </span>{" "}
                and{" "}
                <span style={{ textDecoration: "underline" }}>
                  Privacy Policy
                </span>
              </p>
              <br />

              <h5
                className="is-size-5"
                style={{ color: "white", fontWeight: 700 }}
              >
                | Socials
              </h5>

              <i
                class="fa-brands fa-facebook-f"
                style={{
                  marginTop: 15,
                  marginLeft: 12,
                  fontSize: 25,
                  color: "white",
                }}
              ></i>

              <i
                class="fa-brands fa-instagram"
                style={{
                  marginTop: 15,
                  marginLeft: 12,
                  fontSize: 25,
                  color: "white",
                }}
              ></i>
            </div>
          </div>

          <hr style={{ marginLeft: -20 }} />

          <p style={{ fontSize: 13, color: "white" }}>
            copyright © So Moorish Chocolates 2023
          </p>

          <p
            style={{
              fontSize: 13,
              color: "white",
              marginLeft: 925,
              marginTop: -25,
            }}
          >
            Privacy Policy
            <span style={{ fontWeight: 700, marginLeft: 15, marginRight: 15 }}>
              |
            </span>
            Terms & Conditions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
