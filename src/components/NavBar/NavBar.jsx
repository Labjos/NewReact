import React from "react"
import { CartWidget } from "../CartWidget/CartWidget"
import'./navBar.css'
import { NavLink } from 'react-router-dom'


export const NavBar =() => {

  return (

   
    <div className="navBar">
      <CartWidget />
      <div id="logoBlack"></div>
            <nav id="menuPrincipal">
                    <ul>
                  <NavLink className="Link" to='/About'><li>Black#53Red</li></NavLink>
                  <NavLink className="Link" to='/Productos'><li>Productos</li></NavLink>
                  <NavLink className="Link" to='/Productos'><li>Ofertas</li></NavLink>
                  <NavLink className="Link" to='/Contacto'><li>Contacto</li></NavLink>
                    </ul>
            </nav>
    </div>
  )
}

