import React from "react";
import { CartWidget } from "../CartWidget/CartWidget";
import "./navBar.css";
import { NavLink, Link } from "react-router-dom";
import { Cartel } from '../Cartel/Cartel'

export const NavBar = () => {
  return (
    
    <div className="navBar">
      <Cartel />
      <CartWidget />
      <Link to='/'><div id="logoBlack"></div></Link>
      <nav id="menuPrincipal">
        <ul>
          <NavLink className="Link" to="/About">
            <li>Black#53Red</li>
          </NavLink>
          <NavLink className="Link" to="/Productos">
            <li>Productos</li>
          </NavLink>
          <NavLink className="Link" to="/category/categoryId">
            <li>Categorias</li>
          </NavLink>
          <NavLink className="Link" to="/Contacto">
            <li>Contacto</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};
