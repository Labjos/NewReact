import React, { useState } from 'react'
import '../ItemCount/ItemCount.css'
import productos from '../../imagenes/nero.JPG'


export const ItemCount = ({initial = 0 , stock, onAdd}) => { 
 
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
           <div>
               <p>Counter:${contador}</p>
            
              
        <div className="card">
                <h3>Nero 53</h3>
                <p id="id">ID:002</p>
                <img id="imagenCard" src={productos} alt="Imagen del Producto" />         
                <p id ="precio">Precio $620</p>
                <p id ="descripcion">Botella de 750cc</p>
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


