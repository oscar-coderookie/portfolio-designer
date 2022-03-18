import React from "react";
import "./Sidebar.scss";
import { NavLink } from "react-router-dom";

const MenuElements = [
  {
    link: "/contact",
    name: "Contacto",
    iconSrc: "https://img.icons8.com/ios-filled/344/contacts.png",
  },
  {
    link: "/work",
    name: "Portafolio",
    iconSrc: "https://img.icons8.com/ios/344/flipboard.png",
  },
  {
    link: "/contact",
    name: "Contacto",
    iconSrc: "https://img.icons8.com/ios-filled/344/contacts.png",
  },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar__list">
        {MenuElements.map((element) => {
          return (
            <li className="sidebar__elements" id={element.name}>
              <img
                className="sidebar__icons"
                src={element.iconSrc}
                alt={element.name}
              />
              <NavLink className="sidebar__links" to={element.link}> {element.name} </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
