import React from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'


export function ItemDetail({ item }) {
const { category, id, marca, precio, imagen, stock, description } = item
const [count, setCount] = useState(null)

const onAdd = (valor) => {
    valor > 0 ? setCount(valor) : alert("Agregar Producto")
}
    return ( 
        <div id="card" key={item.id}> 
            <h3>{category}</h3>
            <p>{marca}</p>
            <p id="id">{id}</p>
            <img src={imagen} alt="Producto"/>
            <p>{precio}</p>
            <p>{stock}</p>
            <p>{description}</p>
            <p>{ count === null ? <ItemCount stock={5} initial={1} onAdd={onAdd} /> :
    <Link to='/card'>
        <Button >Realizar Compra</Button>
        </Link>
} </p>

        </div>
    )
}

