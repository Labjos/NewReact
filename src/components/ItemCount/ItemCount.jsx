import React, { useState } from 'react'
import '../ItemCount/ItemCount.css'


export const ItemCount = ({initial, stock, onAdd}) => { 
 
    const [contador, setContador] = useState (initial)
    const [newStock, setNewStock] = useState(stock)
        
    const restar = () => {
        if (contador > 0) {
            setContador (contador -1)
            setNewStock (newStock + 1)
        }
    }
    const sumar = () => {
        if (newStock !== 0) {
            setContador (contador +1)
            setNewStock (newStock - 1)
        }
    }
    const handleAdd = () => {
        console.log(stock, contador)

      if (newStock > 0) {
       this.setState({contador: this.useState.counter + 1})
       setNewStock(newStock - contador)
       handleAdd(contador)
 
       }
    }
    
    return (
           
        <div >
               <p>Counter:${contador}</p>

        <div className="card">
                
            <div id="fondoContador">
                <h3>Cantidad:</h3>
                <p id="contador">{contador}</p>
                <button id="botonMenos" onClick={() => restar()}>-</button>
                <button id="botonCarrito" onClick={() => handleAdd()}>Agregar</button>
                <button id="botonMas" onClick={() => sumar()}>+</button>
        </div></div>
        </div>
    )
}  


