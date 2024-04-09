import React from "react";

const Home = () => {
  return (
    <div>
      <button className="sidebar-toggle">
        <i class="fa-solid fa-bars"></i>
      </button>

      {/* <button className="button is-dark is-medium  ml-[525px] mt-[300px]"> */}
      <button
        className="button is-dark"
        style={{ marginLeft: 545, marginTop: 345, padding: 30 }}
      >
        Show Modal Box
      </button>
    </div>
  );
};

export default Home;
