import React from 'react'

export const Item = ({item}) => {

    
    const { id, marca, precio, imagen, stock } =item

    return ( 
            <article > 
                <h3>{marca}</h3>
                <p id="id">{id}</p>
                <img src={ imagen} alt="Producto"/>
                <p>{precio}</p>
                <p>{stock}</p>
            </article>

    )
}


   
