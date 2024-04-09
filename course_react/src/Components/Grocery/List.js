import React from "react";

const List = ({ items }) => {
  return (
    <div>
      List Component
      {items.map((item) => {
        const { id, title } = item;
        return (
          <div key={id}>
            <p>{title}</p>
            <button className="button is-link is-small">
              <i className="fas fa-edit"></i>
            </button>
            <button className="button is-link is-small">
              <i className="fa-solid fa-trash"></i>
            </button>

            <button className="buton is-primary">NIKI</button>
          </div>
        );
      })}
    </div>
  );
};

export default List;

