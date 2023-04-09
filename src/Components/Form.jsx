import React from "react";
import { useState } from "react";

const Form = () => {
  const [textoValidacion, setTextoValidacion] = useState("");
  const [nombre, setNombre] = useState("");
  function validacionFormulario(e) {
    e.preventDefault();
    const nombre = e.target[0].value;
    const email = e.target[1].value;
    if (nombre.length < 5 || !email.includes("@")) {
      setTextoValidacion("Por favor verifique su información correctamente");
    } else {
      setTextoValidacion(
        `Gracias ${nombre}, te contactaremos cuando antes vía mail`
      );
      setNombre(nombre);
      console.log(nombre, email);
    }
  }
  return (
    <div>
      <form onSubmit={validacionFormulario}>
        <input type="text" name="nombre" placeholder="Full name" />
        <input type="text" name="email" placeholder="Email" />
        <input type="submit" value="Submit" />
      </form>
      <span>{textoValidacion}</span>
    </div>
  );
};
export default Form;

