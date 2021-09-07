import React from "react";
import "./submenu.css";
import { NavLink } from "react-router-dom";

export const SubMenu = () => {
  return (
    <div className="subMenu">
      <nav id="">
        <ul>
          <NavLink className="Link" to="/category/licores">
            <li>Licores</li>
          </NavLink>
          <NavLink className="Link" to="/category/destilados">
            <li>Destilados</li>
          </NavLink>
          <NavLink className="Link" to="/category/cervezas">
            <li>Cervezas</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};
