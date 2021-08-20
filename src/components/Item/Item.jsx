import { Link } from 'react-router-dom'
import imagen from '../../imagenes/coca.JPG'

export const Item = ({item}) => {

    const { id, marca, precio, imagen, stock} =item

    return ( 
        <Link to= {`/item/${id}`}>
        
            <article > 
                <h3>{marca}</h3>
                <p id="id">{id}</p>
                <img src={ imagen} alt="Producto"/>
                <p>{precio}</p>
                <p>{stock}</p>
            </article>

        </Link>
 
    )
}


   
