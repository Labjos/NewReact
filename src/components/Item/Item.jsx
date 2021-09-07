import React from "react";
import { Link } from "react-router-dom";

export const Item = ({ item }) => {
  const { category, id, marca, precio, imagen, stock, description } = item;
  return (
    <Link to={`/item/${item.id}`}>
      <div id="card" key={item.id}>
        <h2>{category}</h2>
        <h3>{marca}</h3>
        <p id="id">{id}</p>
        <img src={imagen} alt="Producto" />
        <p>{precio}</p>
        <p>{stock}</p>
        <p>{description}</p>
      </div>
    </Link>
  );
};
