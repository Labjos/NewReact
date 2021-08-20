import React from "react"
import { CartWidget } from "../CartWidget/CartWidget"
import'./navBar.css'

export const NavBar =() => {

  return (

   
    <div className="navBar">

<CartWidget />

      <div id="logoBlack"></div>
            <nav id="menuPrincipal">
                    <ul>
                        <li>Barra</li>
                        <li>Productos</li>
                        <li>Categorías</li>
                        <li>Ofertas</li>
                        <li>Lo + Vendido</li>
                        <li>Contacto</li>
                    </ul>
            </nav>
    </div>
  )
} 
    