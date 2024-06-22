import React, { useEffect, useState, useContext } from 'react'
import { AppContext } from './AppContext'
import { useNavigate } from 'react-router-dom'
import '../estilos/header.css'

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
        src="/logo.png"
        alt="logo"
        className="logo"
      />
      <div className="puntuacion">{puntuacion}</div>
    </header>
  )
}

export default Header
