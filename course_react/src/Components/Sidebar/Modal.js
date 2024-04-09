import React from "react";

const Modal = () => {
  return (
    <div>
      <div className={`modal-overlay`}>
        <div className="modal-container">
          <h4 className="is-size-4 font-extrabold">Modal Content</h4>
        </div>

        <button className="mt-[-495px]">
          <i
            class="fa fa-close text-4xl"
            style={{ marginLeft: 400, marginTop: -505, color: "red" }}
          ></i>
        </button>
      </div>
    </div>
  );
};

export default Modal;
