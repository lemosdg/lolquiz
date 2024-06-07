import React, { useEffect, useState } from 'react';
import Conexion from './conexion';

function Niveles() {
    const items = Conexion();
    const [nivelActual, setNivelActual] = useState(0);

    function cambiarNivel(event){
        const nivel = event.target.value;
        setNivelActual(nivel);
        console.log(nivelActual);
    }

  return (
    <div>
        <button value={1} onClick={cambiarNivel}>Nivel 1</button>
        <button value={2} onClick={cambiarNivel}>Nivel 2</button>
    </div>
  );
}

export default Niveles;