import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import nero from "../../imagenes/nero.JPG";
import myrica from "../../imagenes/Myrica.JPG";
import kraken from "../../imagenes/kraken.JPG";

const nuevaPromesa = new Promise((res, rej) => {
  setTimeout(() => {
    res([
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
    ]);
  }, 2000);
});

export const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    nuevaPromesa.then((items) => {
      const filteredItem = items.filter((item) => {
        return item.id === Number(id);
      });
      setItem(filteredItem[0]);
    });
  }, [id]);

  useEffect(() => {
    console.log(item);
  }, [item]);

  return (
    <div>
      <ItemDetail item={item} />
    </div>
  );
};
