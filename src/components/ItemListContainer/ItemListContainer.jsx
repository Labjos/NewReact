import React from 'react'
import '../ItemListContainer/ItemListContainer.css'
import { useState, useEffect } from 'react'
import { ItemList} from '../ItemList/ItemList'
import nero from '../../imagenes/nero.JPG'
import myrica from '../../imagenes/Myrica.JPG'
import kraken from '../../imagenes/kraken.JPG'
import { useParams } from 'react-router-dom'


export const ItemListContainer = () => {

const [catalogo, setCatalogo] = useState([])
const {categotyId} = useParams()

useEffect(() => {

  const nuevaPromesa = new Promise((res, rej) => {
    setTimeout(() =>{
      res([{
        "category":"Fernet",
        "marca": "Nero53",
        "precio": 620,
        "imagen": nero,
        "stock": 5,
        "id": 1,
        "description": "Botella de 750cc"

      },
      {
       "category":"Gin",
       "marca": 'Myrica',
       "precio": 1250,
       "imagen": myrica,
       "stock": 10,
       "id": 2,
       "description": "Botella de 500cc"
      },
      {
       "category":"Cerveza",
       "marca": "Kraken",
       "precio": 280,
       "imagen": kraken,
       "stock": 10,
       "id": 3,
       "description": "Lata de 480cc"
     }])
    }, 2000)
  }) 
  
  nuevaPromesa.then((res)=> {
      setCatalogo(res)
  })

},[])

return(
  <>
    <h2>{categotyId}</h2>
    <ItemList item={catalogo} /> 
  </>
)
}
