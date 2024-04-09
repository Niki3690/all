import React from "react";

const TrackOrder = () => {
  return (
    (document.title = "Das Foodtech Pvt  Ltd - Track your Order"),
    (
      <>
        <div style={{ backgroundColor: "#EDEDED" }}>
          <br />
          <div
            style={{
              height: 410,
              width: 1100,
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: 20,
              paddingTop: 15,
              backgroundColor: "white",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 10,
                marginTop: 40,
                marginLeft: 30,
                backgroundColor: "white",
              }}
            >
              <div style={{ backgroundColor: "white" }}>
                <img src="https://pintola.shiprocket.co/post_order/img/track_icon.png"></img>
              </div>

              <div style={{ backgroundColor: "white" }}>
                <p
                  style={{
                    marginTop: -5,
                    fontWeight: 600,
                    fontSize: 18,
                    backgroundColor: "white",
                  }}
                >
                  Track status of your shipment
                </p>
              </div>
            </div>

            <div
              style={{
                borderBottom: "2px solid gray",
                marginTop: 25,
                marginLeft: 25,
                width: 1040,
              }}
            ></div>

            <div style={{ backgroundColor: "white" }}>
              <p
                style={{
                  marginLeft: 30,
                  marginTop: 45,
                  fontWeight: 700,
                  backgroundColor: "white",
                }}
              >
                Search By:
                <input
                  type="radio"
                  id="name"
                  name="radio"
                  style={{ marginLeft: 15, cursor: "pointer" }}
                ></input>
                <label
                  for="name"
                  style={{
                    marginLeft: 20,
                    backgroundColor: "white",
                    cursor: "pointer",
                  }}
                >
                  Order ID
                </label>
                <input
                  type="radio"
                  id="name1"
                  name="radio"
                  style={{ marginLeft: 15, cursor: "pointer" }}
                ></input>
                <label
                  for="name1"
                  style={{
                    marginLeft: 20,
                    backgroundColor: "white",
                    cursor: "pointer",
                  }}
                >
                  AWB
                </label>
              </p>
            </div>
            <form>
              <div style={{ backgroundColor: "white" }}>
                <input
                  type="text"
                  placeholder="Enter Order ID to search"
                  style={{
                    marginTop: 30,
                    marginLeft: 35,
                    width: 495,
                    padding: "9px 25px",
                    borderRadius: 6,
                    border: "2px solid #6CC9E9",
                    boxShadow: "0px 0px 4px #6CC9E9",
                    backgroundColor: "white",
                  }}
                  required
                ></input>
              </div>

              <div style={{ backgroundColor: "white" }}>
                <button
                  style={{
                    backgroundColor: "#39B754",
                    padding: "11px 90px",
                    marginTop: 32,
                    marginLeft: 35,
                    borderRadius: 6,
                    color: "white",
                    fontWeight: 700,
                    fontSize: 18,
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <p
            style={{
              marginTop: 260,
              textAlign: "center",
              fontFamily: "SFProRegular",
              fontSize: 22,
              backgroundColor: "#EDEDED",
            }}
          >
            Unleash Your Inner Champion with Surykumar Yadav's Pintola: Rise
            Above Limits!
          </p>
          <div
            style={{
              width: 560,
              marginTop: 15,
              height: 330,
              backgroundColor: "white",
              marginLeft: 335,
              borderRadius: 15,
            }}
          >
            <iframe
              width="530"
              height="320"
              src="https://www.youtube.com/embed/0Y1DuDx528Y"
              title="SKY High Performance | NEW Pintola Performance Series | For the Performer in You"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              style={{
                marginLeft: 15,
                paddingTop: 15,
                backgroundColor: "white",
              }}
            ></iframe>
          </div>
          <br /> <br />
        </div>

        <footer style={{ height: 20 }}>
          <br />
          <div style={{}}>
            <p style={{ paddingLeft: 75 }}>
              Email us at: support@pintola.in{" "}
              <span style={{ marginLeft: 9, marginRight: 9 }}>|</span> Call us
              at: 7808058080{" "}
              <span style={{ marginLeft: 9, marginRight: 9 }}>|</span> Follow us
              at
              <div
                style={{
                  display: "flex",
                  gap: 10,
                  marginTop: -20,
                }}
              >
                <p
                  style={{
                    width: 25,

                    borderRadius: 15,
                    border: "2px solid black",
                    height: 25,
                    marginLeft: 550,
                  }}
                >
                  <i
                    class="fa-brands fa-facebook-f"
                    style={{ marginLeft: 6, fontSize: 12, marginTop: -25 }}
                  ></i>
                </p>
                <p
                  style={{
                    width: 25,

                    borderRadius: 15,
                    border: "2px solid black",
                    height: 25,
                  }}
                >
                  <i
                    class="fa-brands fa-instagram"
                    style={{
                      marginLeft: 5,
                      fontSize: 12,
                      marginTop: -25,
                      marginTop: "auto",
                      marginBottom: "auto",
                    }}
                  ></i>
                </p>
                <p
                  style={{
                    width: 25,
                    borderRadius: 15,
                    border: "2px solid black",
                    height: 25,
                  }}
                >
                  <i
                    class="fa-brands fa-twitter"
                    style={{ marginLeft: 6, fontSize: 12, marginTop: -25 }}
                  ></i>
                </p>
                <p
                  style={{
                    width: 25,

                    borderRadius: 15,
                    border: "2px solid black",
                    height: 25,
                  }}
                >
                  <i
                    class="fa-brands fa-youtube"
                    style={{ marginLeft: 3, fontSize: 12, marginTop: -25 }}
                  ></i>
                </p>
                <span>|</span> Privacy Policy
                <span style={{ marginLeft: 125 }}>
                  Powered By{" "}
                  <img
                    src="https://pintola.shiprocket.co/post_order/img/logo-v1-2.png"
                    style={{ height: 25, marginLeft: 85 }}
                  ></img>
                </span>
              </div>
            </p>
          </div>
        </footer>
      </>
    )
  );
};

export default TrackOrder;
