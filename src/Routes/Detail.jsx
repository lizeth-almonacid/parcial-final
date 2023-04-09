import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [Detalle, setDetalle] = useState([]);
  const { id } = useParams();
  const getDetalle = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();
    console.log("Detalle:", id, data);
    setDetalle(data);
  };
  useEffect(() => {
    getDetalle();
  });

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <div>
        <h1>Detail Dentist id </h1>
        {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
        {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Telefono</th>
              <th>Sitio Web</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{Detalle.name}</td>
              <td>{Detalle.email}</td>
              <td>{Detalle.phone}</td>
              <td>{Detalle.website}</td>
            </tr>
          </tbody>
        </table>
        <button>
          <Link to="/">Volver</Link>
        </button>
      </div>
    </>
  );
};

export default Detail;

