import React from "react";
import Sidebar from "./Sidebar";
import Modal from "./Modal";
import Home from "./Home";

const SidebarApp = () => {
  return (
    <div>
      <Modal />
      <Sidebar />
      <Home />
    </div>
  );
};

export default SidebarApp;
