import React, { useEffect, useState, useContext } from 'react'
import ItemList from './itemlist'
import { AppContext } from './AppContext'
import { useNavigate } from 'react-router-dom'
import '../estilos/niveles.css'

function Niveles() {
  const items = ItemList()
  const { puntuacion } = useContext(AppContext)
  const objetivos = [0, 0, 0]
  const navigate = useNavigate()

  const cambiarNivel = (nivel) => {
    if (puntuacion >= objetivos[nivel - 1]) {
      const iterador = 20 * nivel
      const filtrados = items.slice(iterador - 20, iterador)
      navigate('/pregunta', { state: { lista: filtrados } })
    }
  }

  useEffect(() => {
    // Al montar el componente
    document.body.classList.add('estilo-especifico')

    // Al desmontar el componente
    return () => {
      document.body.classList.remove('estilo-especifico')
    }
  }, [])

  return (
    <article className="menuArt">
      <div className="menuDiv">
        <div className="botonLine">
          <button className="boton" onClick={() => cambiarNivel(1)}>
            Nivel 1
          </button>
          <div className="requisitos">{objetivos[0]} necesarios</div>
        </div>
        <div className="botonLine">
          <button className="boton" onClick={() => cambiarNivel(2)}>
            Nivel 2
          </button>
          <div className="requisitos">{objetivos[1]} necesarios</div>
        </div>
      </div>
    </article>
  )
}

export default Niveles
