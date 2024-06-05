import React from "react";
import Conexion from "./conexion";

function Pregunta(){
    const items = Conexion();

    return(
        <div>
            {items.length > 0 && <p>{items[0].nombre}</p>}
        </div>
    );
}

export default Pregunta;