import React, {useState} from "react";

function Pregunta({ itemsFiltrados }){
    const [precioIngresado, setPrecioIngresado] = useState("");
    const [num, setNum] = useState(0)

    const comparacion = (event) => {
        setPrecioIngresado(event.target.value);
        const precioIngresadoNumero = parseFloat(precioIngresado);

        if (!isNaN(precioIngresadoNumero) && itemsFiltrados.length > 0) {
            const precioItem = parseFloat(itemsFiltrados[num].precio);

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
        const nuevoNum = Math.floor(Math.random() * itemsFiltrados.length);
        setNum(nuevoNum); 
    };

    

    return(
        <div>
            {itemsFiltrados.length > 0 && itemsFiltrados[num].level === 1 && <img src={itemsFiltrados[num].img} alt="Objeto" />}
            <p>Cuanto cuesta este objeto?</p>
            <input type="text" value={precioIngresado} onChange={handleInputChange} />
            <button onClick={comparacion}>Comprobar Precio</button>
            <button onClick={cambiar}>Cambiar objeto</button>
        </div>
    );
}

export default Pregunta;