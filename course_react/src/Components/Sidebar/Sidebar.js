import React from "react";
import { social, links } from "./Data";

const Sidebar = () => {
  return (
    <div>
      <aside className={`sidebar show-sidebar`}>Sidebar</aside>
      {/* <h1 className="is-size-1 ml-12">Logoo</h1> */}

      <button className="mt-[-690px]">
        <i
          class="fa fa-close text-4xl"
          style={{ marginLeft: 1100, color: "red" }}
        ></i>
      </button>

      <ul>
        {links.map((link) => {
          let { id, url, text, icon } = link;
          return (
            <li key={id} style={{ marginLeft: 12 }}>
              <a href={url} style={{ marginLeft: 145 }}>
                {icon}
                <p style={{ marginLeft: 175, marginTop: -25 }}> {text}</p>
              </a>
            </li>
          );
        })}
      </ul>

      {/* <ul>
        {social.map((link) => {
          let { id, url, icon} = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul> */}
    </div>
  );
};

export default Sidebar;
