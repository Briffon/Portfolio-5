import React from "react";
import { NavLink } from "react-router-dom";
const TableOfContents = props => {
  return (
    <div className="table-of-contents-container">
      {props.sections
        ? props.sections.map((section, index) => {
            console.log(section);
            return (
              <ul className="desktop-table" key={index}>
                <h3>{section.name}</h3>
                {section.indexs.map((li, index) => {
                  return (
                    <li key={index}>
                      <NavLink to={"/" + li}>{li}</NavLink>
                    </li>
                  );
                })}
              </ul>
            );
          })
        : null}
      <select className="mobile-table">
        {props.mobileSections
          ? props.mobileSections.map((section, index) => {
              return <option key={index}>{section}</option>;
            })
          : null}
      </select>
    </div>
  );
};

export default TableOfContents;
