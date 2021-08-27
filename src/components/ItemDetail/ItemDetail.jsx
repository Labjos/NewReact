import React from 'react'
import { ItemCount } from '../ItemCount/ItemCount'

export function ItemDetail({ item }) {
      
   
const { category, id, marca, precio, imagen, stock, description } = item
    return ( 
        <div id="card"> 

            <h3>{category}</h3>
            <p>{marca}</p>
            <p id="id">{id}</p>
            <img src={imagen} alt="Producto"/>
            <p>{precio}</p>
            <p>{stock}</p>
            <p>{description}</p>

          <ItemCount stock={5} initial={1} />  
        </div>
    )
}
