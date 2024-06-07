import React, { useEffect, useState } from 'react';
import Conexion from './conexion';
import Pregunta from './pregunta';

function Niveles() {
    const items = Conexion();
    const [nivelActual, setNivelActual] = useState(0);
    const [itemsFiltrados, setItemsFiltrados] = useState([]);

    function cambiarNivel(event){
        const nivel = parseInt(event.target.value);
        setNivelActual(nivel);
    }

    useEffect(() => {
        const filtrados = items.filter(item => item.level === nivelActual);
        setItemsFiltrados(filtrados)
    }, [nivelActual]); 

  return (
    <div>
        <button value={1} onClick={cambiarNivel}>Nivel 1</button>
        <button value={2} onClick={cambiarNivel}>Nivel 2</button>
        <Pregunta lista={itemsFiltrados}/>
    </div>
  );
}

export default Niveles;