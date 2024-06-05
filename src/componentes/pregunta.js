import React, {useState} from "react";
import Conexion from "./conexion";

function Pregunta(){
    const items = Conexion();
    const [precioIngresado, setPrecioIngresado] = useState("");
    const [num, setNum] = useState(0)

    const comparacion = (event) => {
        setPrecioIngresado(event.target.value);
        const precioIngresadoNumero = parseFloat(precioIngresado);

        if (!isNaN(precioIngresadoNumero) && items.length > 0) {
            const precioItem = parseFloat(items[num].precio);

            if (precioIngresadoNumero === precioItem) {
                alert("¡Correcto!");
            } else {
                alert("Incorrecto. Inténtalo de nuevo.");
            }
        }
    }

    const handleInputChange = (event) => {
        setPrecioIngresado(event.target.value);
    };

    const cambiar = () => {
        const nuevoNum = Math.floor(Math.random() * items.length);
        setNum(nuevoNum); 
    };

    return(
        <div>
            {items.length > 0 && <img src={items[num].img} />}
            <p>Cuanto cuesta este objeto?</p>
            <input type="text" value={precioIngresado} onChange={handleInputChange} />
            <button onClick={comparacion}>Comprobar Precio</button>
            <button onClick={cambiar}>Cambiar objeto</button>
        </div>
    );
}

export default Pregunta;