import React from "react";
import "./styles.css";
import { useState } from "react";

const Contador = () => {
  const [cuenta, setCuenta] = useState(1);

  function agregar() {
    setCuenta(cuenta + 1);
  }

  function descontar() {
    if (cuenta > 0) {
      setCuenta(cuenta - 1);
    }
  }

  return (
    <div>
      <button onClick={agregar}> Agregar </button>
      <h1> Contador: {cuenta} </h1>
      <button onClick={descontar}> Descontar </button>
    </div>
  );
};

export default Contador;