import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { ItemDetail} from '../ItemDetail/ItemDetail'
import { Link } from 'react-router-dom'


export const ItemDetailContainer = (data) => {
    const [item, setItem] = useState ()
    const param = useParams


    useEffect(() => {
      setTimeout(() => {
      fetch(`https://swapi.dev/api/people/:id/`)
      .them((resp) => {
        console.log(resp)
        return resp.json()
      })
      .then((data) => {
        setItem(data)
      })
    }, 2000)  

    },[])

        return (

          <Link to={`/category/:categoryId/${item.id}`}><div>
          <h3>{JSON.stringify(param)}</h3>
          <ItemDetail item={item}  />
        </div></Link>
       )
       }



