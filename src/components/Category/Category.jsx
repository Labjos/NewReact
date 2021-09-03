import React from "react";
import "./category.css";

export const Category = ({ categoria }) => {
  return <div className="categorias">{categoria.nombre}</div>;
};
