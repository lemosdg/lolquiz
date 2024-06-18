import React, { useEffect, useState, useContext } from 'react'
import Conexion from './conexion'
import { AppContext } from './AppContext'
import { useNavigate } from 'react-router-dom'

function Header() {
  const { puntuacion } = useContext(AppContext)
  const navigate = useNavigate()

  function goHome() {
    navigate('/')
  }

  return (
    <header className="header">
      <img
        onClick={() => goHome()}
        className="logo"
        src="/logo.jpg"
        alt="logo"
      />
      <div className="puntuacion">{puntuacion}</div>
    </header>
  )
}

export default Header
