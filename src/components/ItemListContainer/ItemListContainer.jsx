import React from "react";
import "../ItemListContainer/ItemListContainer.css";
import { useState, useEffect, useContext } from "react";
import { ItemList } from "../ItemList/ItemList";
import nero from "../../imagenes/nero.JPG";
import myrica from "../../imagenes/Myrica.JPG";
import kraken from "../../imagenes/kraken.JPG";
import { useParams } from "react-router-dom";
import { CartContext } from '../CartContext/CartContext'


export const ItemListContainer = () => {
  const [catalogo, setCatalogo] = useState([]);
  const { categoryId } = useParams();

  const vista = useContext(CartContext)
  console.log(vista)

  const productosBar = [
    {
      category: "Fernet",
      marca: "Nero53-Fernet",
      precio: 620,
      imagen: nero,
      stock: 5,
      id: 10,
      description: "Botella de 750cc",
    },
    {
      category: "Gin",
      marca: "Myrica",
      precio: 1250,
      imagen: myrica,
      stock: 10,
      id: 20,
      description: "Botella de 500cc",
    },
    {
      category: "Cerveza",
      marca: "Kraken",
      precio: 280,
      imagen: kraken,
      stock: 10,
      id: 30,
      description: "Lata de 480cc",
    },
  ];

  useEffect(() => {
    const nuevaPromesa = new Promise((res, rej) => {
      setTimeout(() => {
        categoryId
          ? res(productosBar.filter((e) => e.category === categoryId))
          : res(productosBar);
      }, 1000);
    });

    nuevaPromesa.then((productosBar) => {
      setCatalogo(productosBar);
    });
  }, [categoryId]);

  return (
    <>
      <h2>{JSON.stringify(categoryId)}</h2>
      <ItemList item={catalogo} />
    </>
  );
};
