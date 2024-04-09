import React from "react";
import "./Footer.css";

const Footer = () => {
  // const toggleButton = document.getElementById("togglePopup");
  // const popup = document.getElementById("popup");
  // const closePopupButton = document.getElementById("closePopup");

  // toggleButton.addEventListener("click", () => {
  //   console.log("Toggle button clicked");
  //   if (popup.style.display === "block") {
  //     // If the popup is already open, close it
  //     popup.style.display = "none";
  //     toggleButton.innerHTML =
  //       "<i class='fa-brands fa-whatsapp' style='font-size:25px;margin-right: 15px; font-size: 25px'></i>Chat With Us";
  //     toggleButton.style.width = "220px";
  //     toggleButton.style.height = "50px";
  //   } else {
  //     // If the popup is closed, open it
  //     popup.style.display = "block";
  //     toggleButton.innerHTML =
  //       '<i class="fa fa-close" style="font-size:25px"></i>';
  //     toggleButton.style.width = "40px";
  //     toggleButton.style.height = "40px";
  //   }
  // });

  // closePopupButton.addEventListener("click", () => {
  //   console.log("Close button clicked");
  //   popup.style.display = "none";
  //   toggleButton.innerText = "Chat With Us";
  // });

  return (
    <div className="footer">
      <div style={{ marginTop: 15 }}>
        <img
          src="https://www.pintola.in/cdn/shop/files/Pintola_Logo_PNG_e0a75445-bd35-450f-895e-ece13c165b78_200x.png?v=1668503333"
          className="kkk"
        ></img>
        <br />
        <p className="cata">Follow Us:</p>
        <br />
        <div className="iconv">
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-linkedin-in"></i>
        </div>
        <br /> <br />
        <p style={{ marginTop: 55 }}>
          {" "}
          <small>© 2023 Pintola.</small>
        </p>
      </div>

      <div>
        <p className="cata text-2xl ">Shop</p>
        <span className="sppp">
          <br />
          <p>All Products</p>
          <p>Premium Nut Butters</p>
          <p>All Natural & Organic</p>
          <p>Wholegrain Rice Cakes</p>
        </span>
      </div>

      <div>
        <p className="cata text-2xl ">Pintola</p>
        <span className="sppp">
          <br />
          <p>About Us</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>FAQs</p>
          <p>Refund & Cancellation Policy</p>
          <p>Shipping Policy</p>
        </span>
      </div>

      <div>
        <p className="cata text-2xl ">Stay in the loop</p>
        <br />
        <input
          type="email"
          placeholder="Email*"
          style={{
            backgroundColor: "transparent",
            width: 210,
            outline: "none",
          }}
        ></input>
        <br />
        <button className="sign">Sign Up</button>
      </div>

      <div>
        <p className="cata text-2xl ">
          Download Product
          <br /> Catalogue
        </p>
        <br />
        <button className="down">Download</button>
        <br /> <br /> <br /> <br /> <br /> <br />
        <div></div>
        <button id="togglePopup">
          <i
            class="fa-brands fa-whatsapp"
            style={{
              marginRight: 15,
              fontSize: 25,
              backgroundColor: "transparent",
              color: "white",
            }}
          ></i>
          Chat With Us
        </button>
        <div id="popup" class="popup">
          <p className="hi">HI THERE!</p>
          <p className="on">
            We are here to help you! Chat with
            <br />
            us on WhatsApp for any queries.
          </p>
          <a href="https://api.whatsapp.com/send?phone=919909041984&text=Hi">
            <button id="startChat">
              <i
                class="fa-brands fa-whatsapp"
                style={{ marginRight: 10, fontSize: 25 }}
              ></i>
              START CHAT
            </button>
          </a>
          <br />
          <p className="by">Powered by interakt.shop</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
