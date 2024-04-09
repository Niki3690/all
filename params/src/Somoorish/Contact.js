import React from "react";

const Contact = () => {
  return (
    <div style={{ marginTop: 9 }}>
      <hr />
      <h2
        className="is-size-2 has-text-centered font-Lato, sans-serif; text-[#000000]"
        style={{ fontWeight: 400 }}
      >
        Contact Us
      </h2>

      <h5 className="is-size-5 text-center" style={{ marginTop: -6 }}>
        Any question or remark ? Just write us a message !
      </h5>
      <br />

      <div className="section">
        <div className="container">
          <div className="columns" style={{ marginLeft: 85 }}>
            <div
              className="column is-4 bg-[#AD0047]"
              style={{ borderTopLeftRadius: 9, borderBottomLeftRadius: 9 }}
            >
              <div>
                <h2
                  className="is-size-2 text-white"
                  style={{
                    fontWeight: 600,
                    lineHeight: 1.1,
                    paddingLeft: 55,
                    paddingTop: 56,
                  }}
                >
                  Contact
                  <br />
                  Information
                </h2>
                <br />

                <h5 className="is-size-5 pl-[55px] text-white">
                  Fill up the form and our team will get back with you within 24
                  hours.
                </h5>
                <br />

                <i
                  class="fa-solid fa-location-dot pl-[55px] text-xl text-white
                "
                ></i>
                <h6 className="is-size-6 pl-[86px] mt-[-25px] text-white">
                  34B Glenbarry Rd, Campbellfield VIC{" "}
                  <span style={{ marginLeft: -27 }}>3061,Australia</span>
                </h6>

                <i class="fa fa-phone pl-[55px] text-xl text-white mt-4" />

                <h6 className="is-size-6 ml-[85px] mt-[-26px] text-white">
                  {" "}
                  +61 430 391 091
                </h6>

                <i class="fa-solid fa-envelope pl-[55px] text-xl text-white mt-4" />

                <h6 className="is-size-6 ml-[85px] mt-[-26px] text-white">
                  {" "}
                  info@somoorish.com.au
                </h6>
                <br />
                <br />

                <i class="fa-brands fa-facebook-f ml-[65px] text-xl text-white"></i>

                <i class="fa-brands fa-instagram ml-[35px] text-xl text-white"></i>
              </div>
              <br />
              <br />
            </div>

            <div
              className="column is-7 shadow-2xl"
              style={{ borderTopRightRadius: 9, borderBottomRightRadius: 9 }}
            >
              <div className="columns">
                <div className="column is-5 p-6">
                  <h6 className="is-size-6 text-[#AD0047] pl-4 font-bold">
                    First Name
                  </h6>

                  <input
                    placeholder="First Name"
                    type="text"
                    className="mt-[25px] ml-[19px]"
                  />
                  <br />
                  <br />
                  <br />

                  <h6 className="is-size-6 text-[#AD0047] pl-4 font-bold">
                    Email address
                  </h6>

                  <input
                    placeholder="Your Email"
                    type="text"
                    className="mt-[25px] ml-[19px]"
                  />
                </div>

                <div className="column is-6 p-6">
                  <h6 className="is-size-6 text-[#AD0047] pl-7  font-bold">
                    Last Name
                  </h6>

                  <input
                    placeholder="Last Name"
                    type="text"
                    className="mt-[25px] ml-[19px]"
                    style={{ paddingright: -45 }}
                  />

                  <br />
                  <br />
                  <br />

                  <h6 className="is-size-6 text-[#AD0047] pl-7 font-bold">
                    Phone
                  </h6>

                  <input
                    placeholder="Phone No"
                    type="text"
                    className="mt-[25px] ml-[19px]"
                  />
                </div>
              </div>
              <h6 className="is-size-6 text-[#AD0047] ml-[40px] pl-7 font-bold">
                Message
              </h6>
              <textarea class=" ml-[70px]" placeholder="Message"></textarea>
              <button
                className="button ml-[520px] mt-4"
                style={{
                  backgroundColor: "#AD0047",
                  color: "white",
                  fontSize: 20,
                  borderRadius: 0,
                }}
              >
                Submit
              </button>
              <br /> <br /> <br /> <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
      <br />
  
    </div>
  );
};

export default Contact;
