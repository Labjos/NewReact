import { useEffect, useState } from "react"
import { ItemDetail} from '../ItemDetail/ItemDetail'
import { Link } from 'react-router-dom'
import axios from 'axios'


export const ItemDetailContainer = (id) => {
    const [item, setItem] = useState ()
   

    useEffect(() => {
      setTimeout(() => {
        axios(`http://localhost:3000/item/${id}`).then((resp) => 
            setItem(resp.data)
        )
    }, 2000)  

    },[])

        return (

          <Link to={`/item/: id/${item.id}`}><div>
          <h3>{JSON.stringify(item.id)}</h3>
          <ItemDetail item={ item }  />
         
        </div></Link>
       )
       }



