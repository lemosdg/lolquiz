import React, { useEffect, useState, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { AppContext } from './AppContext'

function Pregunta() {
  const location = useLocation()
  const { lista } = location.state || { lista: [] }
  const [precioIngresado, setPrecioIngresado] = useState('')
  const [num, setNum] = useState(0)
  const { puntuacion, setPuntuacion } = useContext(AppContext)

  const comparacion = () => {
    const precioIngresadoNumero = parseFloat(precioIngresado)

    if (!isNaN(precioIngresadoNumero) && lista.length > 0) {
      const precioItem = parseFloat(lista[num].gold.total)

      if (precioIngresadoNumero === precioItem) {
        alert('¡Correcto!')
        setPuntuacion((prevPuntuacion) => prevPuntuacion + 1)
      } else {
        alert('Incorrecto. Inténtalo de nuevo.')
      }
    }
  }

  const handleInputChange = (event) => {
    setPrecioIngresado(event.target.value)
  }

  const cambiar = () => {
    const nuevoNum = Math.floor(Math.random() * lista.length)
    setNum(nuevoNum)
  }

  const imageUrlBase = 'http://ddragon.leagueoflegends.com/cdn/10.6.1/img/item/'

  return (
    <div>
      <img src={`${imageUrlBase}${lista[num].image.full}`} alt={lista.name} />
      <p>{lista[num].name}</p>
      <p>Cuanto cuesta este objeto?</p>
      <input type="text" value={precioIngresado} onChange={handleInputChange} />
      <button onClick={comparacion}>Comprobar Precio</button>
      <button onClick={cambiar}>Cambiar objeto</button>
    </div>
  )
}

export default Pregunta
