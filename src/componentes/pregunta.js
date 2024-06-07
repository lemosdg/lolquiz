import React, { useEffect, useState} from "react";

function Pregunta({ lista }){
    const [precioIngresado, setPrecioIngresado] = useState("");
    const [num, setNum] = useState(0)

    const comparacion = (event) => {
        setPrecioIngresado(event.target.value);
        const precioIngresadoNumero = parseFloat(precioIngresado);

        if (!isNaN(precioIngresadoNumero) && lista.length > 0) {
            const precioItem = parseFloat(lista[num].precio);

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
        const nuevoNum = Math.floor(Math.random() * lista.length);
        setNum(nuevoNum); 
    };

    useEffect(() => {
        console.log(lista);
    }, [lista]); 

    return(
        <div>
            {lista.length > 0 && <img src={lista[num].img} alt="Objeto" />}
            <p>Cuanto cuesta este objeto?</p>
            <input type="text" value={precioIngresado} onChange={handleInputChange} />
            <button onClick={comparacion}>Comprobar Precio</button>
            <button onClick={cambiar}>Cambiar objeto</button>
        </div>
    );
}

export default Pregunta;