import React from "react";
import { Link, useLocation } from "react-router-dom";

const BreadCrumbPath = () => {
  let { pathname } = useLocation();

  let path = pathname.split("/").filter((x) => x);

  let BreadCrumbPath = "";
  return (
    <div>
      <Link to="/">Home</Link>

      {path.map((name, index) => {
        BreadCrumbPath += `/${name}`;

        let isLast = index === path.length - 1;

        return isLast ? (
          <span>/{name}</span>
        ) : (
          <span>
            /<Link to={BreadCrumbPath}>{name}</Link>
          </span>
        );
      })}
    </div>
  );
};

export default BreadCrumbPath;
