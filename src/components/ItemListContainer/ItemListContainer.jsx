import React from 'react'
import '../ItemListContainer/ItemListContainer.css'
import { useState, useEffect } from 'react'
import { ItemList} from '../ItemList/ItemList'
import nero from '../../imagenes/nero.JPG'
import myrica from '../../imagenes/Myrica.JPG'
import kraken from '../../imagenes/kraken.JPG'


export const ItemListContainer = () => {

const [catalogo, setCatalogo] = useState([])
const prod = [{

      "nombre":"Fernet",
      "marca": "Nero53",
      "precio": 620,
      "imagen": nero,
      "stock": 10,
      "id": 1
    },
    {
     "nombre":"Gin",
     "marca": "Myrica",
     "precio": 1250,
     "imagen": myrica,
     "stock": 10,
     "id": 2
    },
    {
     "nombre":"Cerveza",
     "marca": "Kraken",
     "precio": 280,
     "imagen": kraken,
     "stock": 10,
     "id": 3
   }
 ]

useEffect(() => {

  const nuevaPromesa = new Promise((res, rej) => {
    setTimeout(() =>{
      res(prod)
    }, 2000)
  }) 
  
  nuevaPromesa.then((res)=> {
    console.log(res)
    setCatalogo(res)
  })

},[])

return(
  <>
      <ItemList item={catalogo} /> 
  </>
)
}
