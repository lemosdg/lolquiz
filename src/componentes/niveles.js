import React, { useEffect, useState, useContext } from 'react'
import Conexion from './conexion'
import Pregunta from './pregunta'
import { AppContext } from './AppContext'

function Niveles() {
  const items = Conexion()
  const [nivelActual, setNivelActual] = useState(0)
  const [itemsFiltrados, setItemsFiltrados] = useState([])
  const { puntuacion, setPuntuacion } = useContext(AppContext)

  function cambiarNivel(event) {
    const nivel = parseInt(event.target.value)
    setNivelActual(nivel)
  }

  useEffect(() => {
    const filtrados = items.filter((item) => item.level === nivelActual)
    setItemsFiltrados(filtrados)
    console.log('puntuacion = ' + puntuacion)
  }, [nivelActual])

  return (
    <div>
      <button value={1} onClick={cambiarNivel}>
        Nivel 1
      </button>
      <button value={2} onClick={cambiarNivel}>
        Nivel 2
      </button>
      <Pregunta lista={itemsFiltrados} />
    </div>
  )
}

export default Niveles
