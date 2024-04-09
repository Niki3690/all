import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [city, setCity] = useState("");
  let [country, setCountry] = useState("");
  let [message, setMessage] = useState("");
  let [error, setError] = useState(false);

  let handleSubmit = (e) => {
    e.preventDefault();
    if (
      name.length === 0 ||
      email.length === 0 ||
      phone.length === 0 ||
      city.length === 0 ||
      country.length === 0 ||
      message.length === 0
    )
      setError(true);
  };
  return (
    (document.title = "Contact Pintola | Best Nut Butter | Official Website"),
    (
      <div>
        <div className="uss">
          <img src="https://www.pintola.in/cdn/shop/files/Contact_us_1200x.png?v=1691834837"></img>
        </div>
        <div className="fass">
          <div className="can">
            <>
              <p
                style={{
                  color: "#FF6F0F",
                  fontSize: 28,
                  fontWeight: 700,
                  marginTop: 89,
                  paddingBottom: 20,
                }}
                className="mmmm"
              >
                SAY HELLO!
              </p>
              <p style={{ fontWeight: 700, paddingBottom: 20 }}>
                Company -
                <span style={{ fontWeight: 400 }}>Das Foodtech Pvt Ltd</span>{" "}
              </p>
              <p style={{ fontWeight: 700, paddingBottom: 20 }}>
                Email -
                <span style={{ fontWeight: 400 }}>support@pintola.in</span>{" "}
              </p>
              <p style={{ fontWeight: 700, paddingBottom: 20 }}>
                Phone -<span style={{ fontWeight: 400 }}>91 78080 58080‬</span>{" "}
              </p>
              <p style={{ fontWeight: 700, paddingBottom: 20 }}>
                Corporate Office -
                <span style={{ fontWeight: 400 }}>
                  304-305 Ganesh Glory, Jagatpur,
                  <br /> SG Highway Ahmedabad- 382481
                </span>{" "}
              </p>

              <p style={{ fontWeight: 700, paddingBottom: 20 }}>
                Manufacturing Unit -
                <span style={{ fontWeight: 400 }}>
                  {" "}
                  Block No. 1234, Salal-Sonasan Road, At. Sonasan, Ta. Prantij,
                  Dist,
                  <br /> Himatnagar, Gujarat 383210
                </span>{" "}
              </p>
              <p style={{ fontWeight: 700, paddingBottom: 20 }}>
                Working Days -
                <span style={{ fontWeight: 400 }}>Monday to Saturday</span>{" "}
              </p>

              <p style={{ fontWeight: 700, paddingBottom: 20 }}>
                Timing -<span style={{ fontWeight: 400 }}> 9am to 6pm</span>{" "}
              </p>

              <p style={{ color: "#FF6F0F", fontWeight: 700 }}>Follow Us</p>

              <span className="fff">
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-linkedin-in"></i>
              </span>
            </>
          </div>

          <div className="lll">
            <p>
              {" "}
              We'd love to hear from you! Fill out our contact form to get in
              touch
              <br />
              with our team.
            </p>

            <form onSubmit={handleSubmit}>
              <select
                style={{
                  border: "2px solid #FBE0C9",
                  width: 470,
                  marginTop: 20,
                  padding: 5,
                  backgroundColor: "white",
                  paddingLeft: 15,
                }}
                required
              >
                <option>What can we help with/*</option>
                <option>For Delarship inquiries</option>
                <option>For Export inquiries</option>
                <option>Feedback</option>
              </select>

              <input
                type="text"
                placeholder="Name*"
                style={{
                  width: 470,
                  marginTop: 20,
                  padding: 5,
                  backgroundColor: "white",
                  paddingLeft: 15,
                }}
                onChange={(e) => setName(e.target.value)}
              ></input>
              {error && name.length <= 0 ? (
                <p style={{ paddingLeft: 100, color: "red", fontWeight: 600 }}>
                  plz fill this name!
                </p>
              ) : (
                ""
              )}
              <input
                type="email"
                placeholder="Email*"
                style={{
                  width: 470,
                  marginTop: 20,
                  padding: 5,
                  backgroundColor: "white",
                  paddingLeft: 15,
                }}
                onChange={(e) => setEmail(e.target.value)}
              ></input>

              {error && email.length <= 0 ? (
                <p style={{ paddingLeft: 100, color: "red", fontWeight: 600 }}>
                  plz fill this email!
                </p>
              ) : (
                ""
              )}
              <input
                type="number"
                placeholder="Phone Number*"
                style={{
                  width: 470,
                  marginTop: 20,
                  padding: 5,
                  backgroundColor: "white",
                  paddingLeft: 15,
                }}
                onChange={(e) => setPhone(e.target.value)}
              ></input>
              {error && phone.length <= 0 ? (
                <p style={{ paddingLeft: 100, color: "red", fontWeight: 600 }}>
                  plz fill this phone!
                </p>
              ) : (
                ""
              )}

              <input
                type="text"
                placeholder="Area/city*"
                style={{
                  width: 470,
                  marginTop: 20,
                  padding: 5,
                  backgroundColor: "white",
                  paddingLeft: 15,
                }}
                onChange={(e) => setCity(e.target.value)}
              ></input>

              {error && city.length <= 0 ? (
                <p style={{ paddingLeft: 100, color: "red", fontWeight: 600 }}>
                  plz fill this city!
                </p>
              ) : (
                ""
              )}

              <input
                type="text"
                placeholder="Country(for export)"
                style={{
                  width: 470,
                  marginTop: 20,
                  padding: 5,
                  backgroundColor: "white",
                  paddingLeft: 15,
                }}
                onChange={(e) => setCountry(e.target.value)}
              ></input>
              {error && country.length <= 0 ? (
                <p style={{ paddingLeft: 100, color: "red", fontWeight: 600 }}>
                  plz fill this country!
                </p>
              ) : (
                ""
              )}
              <textarea
                placeholder="Message*"
                style={{
                  width: 470,
                  marginTop: 20,
                  padding: 5,
                  backgroundColor: "white",
                  paddingLeft: 15,
                  height: 125,
                  border: "2px solid #FBE0C9",
                }}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>

              <button
                className="bun"
                style={{
                  backgroundColor: "black",
                  padding: "5px 15px",
                  color: "white",
                  marginTop: 10,
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <br />
        <br />
        <br />

        {/* <img
        src="mapp.PNG"
        style={{
          width: "100%",
          height: 380,
          paddingLeft: 40,
          paddingRight: 40,
        }}
      ></img> */}

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.260508285095!2d72.91258877587586!3d23.4871244988317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395dc66cd0000001%3A0xabd344b9cbc5a45!2sDAS%20FOODTECH%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1695202048218!5m2!1sen!2sin"
          style={{
            width: "100%",
            height: 380,
            paddingLeft: 40,
            paddingRight: 40,
          }}
        ></iframe>
        <br />
        <br />

        <img
          src="https://www.pintola.in/cdn/shop/files/Asset_7_150x-100_1400x.jpg?v=1678087744"
          style={{ width: "100%", height: 450 }}
        ></img>
      </div>
    )
  );
};

export default ContactUs;
