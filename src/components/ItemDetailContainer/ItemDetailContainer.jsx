import { useEffect, useState } from "react"
//import { useParams } from "react-router"
import { ItemDetail} from '../itemDetail/itemDetail'


export const ItemDetailContainer = () => {

    const [item, setItem] = useState ()


    useEffect(() => {

      const getItem = () => {
          return 
      }  

      const item =  getItem()
      setItem(item)
        
        }, [])

        return (

        <div>
          <ItemDetail item={item}  />
        </div>
       )
       }



