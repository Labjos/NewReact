import { useEffect, useState } from "react"
//import { useParams } from "react-router"
import { ItemDetail} from '../ItemDetail/ItemDetail'
import { Link } from 'react-router-dom'
import axios from 'axios'


export const ItemDetailContainer = (data) => {
    let prodId = data.params.id
    const [item, setItem] = useState ()
   

    useEffect(() => {
      setTimeout(() => {
        axios(`http://localhost:3000/item/${prodId}`).then((resp) => 
            setItem(resp.data)
        )
    }, 2000)  

    },[prodId])

        return (

          <Link to={`/item/: id/${item.id}`}><div>
          <h3>{JSON.stringify(prodId)}</h3>
          <ItemDetail item={ item }  />
         
        </div></Link>
       )
       }



