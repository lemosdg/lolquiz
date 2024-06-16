import React, { useEffect, useState, useContext } from 'react'
import Conexion from './conexion'
import { AppContext } from './AppContext'
import { useNavigate } from 'react-router-dom'
import '../estilos/niveles.css'

function Niveles() {
  const items = Conexion()
  const { puntuacion } = useContext(AppContext)
  const objetivos = [0, 0, 0]
  const navigate = useNavigate()

  const cambiarNivel = (nivel) => {
    if (puntuacion >= objetivos[nivel - 1]) {
      const filtrados = items.filter((item) => item.level === nivel)
      navigate('/pregunta', { state: { lista: filtrados } })
    }
  }

  return (
    <div className="menuDiv">
      <button onClick={() => cambiarNivel(1)}>Nivel 1</button>
      <button onClick={() => cambiarNivel(2)}>Nivel 2</button>
    </div>
  )
}

export default Niveles
