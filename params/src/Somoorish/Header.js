import React from "react";

const Header = () => {
  return (
    <div>
      <p className="text-center bg-[#AD0047] text-white font-semibold p-1.5" style={{fontSize:14}}>
        FREE SHIPPING ABOVE $50 ON ALL OVER MELBOURNE | FREE SHIPPING ON ALL
        ORDERS OVER $100 | GET 10% OFF ON FIRST ORDER
      </p>

      <div>
        <img
          src="https://somoorish.com.au/image/logo.png"
          ali="image"
          style={{
            height: 45,
            marginTop: 30,
            position: "absolute",
            marginLeft: 95,
          }}
        />
      </div>
    </div>
  );
};

export default Header;
