import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button is-link"
            className="ml-[155px] mb-12"
            key={index}
            onClick={() => filterItems(category)}
            style={{
              fontWeight: 700,
              fontSize: "18px",
              borderRadius: "5px",
              padding: "4px 4px 4px 4px",
              backgroundColor: "red",
              color: "white",
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
