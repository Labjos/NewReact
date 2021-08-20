import imagen from '../../imagenes/coca.JPG'


export const ItemDetail = ({itemDetail}) => {

    const { marca, id, imagen, precio, stock} = itemDetail

    return(

    <div>
           <article > 
                <h3>{marca}</h3>
                <p id="id">{id}</p>
                <img src={ imagen } alt="Producto"/>
                <p>{precio}</p>
                <p>{stock}</p>
            </article>
    </div>
    )
}

