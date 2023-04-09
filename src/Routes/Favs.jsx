import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { Link } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [favoritos, setFavoritos] = useState([]);
  const getFavoritos = () => {
    const res = localStorage.getItem("favoritos");
    const data = res ? JSON.parse(res) : [];
    setFavoritos(data);
  };
  useEffect(() => {
    getFavoritos();
  }, []);
  return (
    <>
      <div>
        <h1>Dentists Favs</h1>
        <div className="card-grid">
          {/* este componente debe consumir los destacados del localStorage */}
          {/* Deberan renderizar una Card por cada uno de ellos */}
          {favoritos.length &&
            favoritos.map((item) => (
              <Card
                key={item.id}
                name={item.name}
                username={item.username}
                id={item.id}
                url={item.website}
              />
            ))}
        </div>
        <button>
          <Link to="/">Volver</Link>
        </button>
      </div>
    </>
  );
};

export default Favs;

