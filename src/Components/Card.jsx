import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ModoDarkContext } from "./oscuroContexto";

const favoritos = [];
const Card = ({ name, username, id, url }) => {
  const { isModoOscuro } = useContext(ModoDarkContext);
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    const index = favoritos.findIndex((item) => item.id === id);
    if (index === -1) {
      favoritos.push({ id, name, username, url });
    }
    console.log("Agregar Fav: ", favoritos);
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  };

  return (
    <div className={isModoOscuro ? "dark" : "app"}>
      <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <Link to={{ pathname: `/detail/${id}` }} key={id}>
          <img src="images/doctor.jpg" alt="Imagen Doctor" width="200px" />
          <h3>{name}</h3>
        </Link>
        <h4>
          {id} - {username}
        </h4>
        <button onClick={addFav} className="favButton">
          Add fav
        </button>
      </div>
    </div>
  );
};

export default Card;

