import React from 'react'
import '../ItemListContainer/ItemListContainer.css'
import { useState, useEffect } from 'react'


export const ItemListContainer = () => {

const [catalogo, setCatalogo] = useState([])
const prod = [{

      "nombre":"Fernet",
      "marca": "Nero53",
      "precio": 620,
      "imagen": "../imagenes/nero.JPG",
      "stock": 10,
      "id": 1
    },
    {
     "nombre":"Gin",
     "marca": "Myrica",
     "precio": 1250,
     "imagen": "../imagenes/myrica.jpeg",
     "stock": 10,
     "id": 2
    },
    {
     "nombre":"Cerveza",
     "marca": "Kraken",
     "precio": 280,
     "imagen": "../imagenes/cerveza.jpeg",
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
      <itemList item={catalogo}/> 
  </>
)
}
