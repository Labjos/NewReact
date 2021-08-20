import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './cartWidget.css'



export const CartWidget = () => {


    return (
        <div className ="cartWidget">
             <div id="comanda"><FontAwesomeIcon icon={faShoppingCart}/></div>
            <div id="textoVentas">Hola! estas en tu zona de compra</div>
            <div id="contadorCarrito">Tienes: Productos!</div>
           
        </div>        
        )
}

    
    
