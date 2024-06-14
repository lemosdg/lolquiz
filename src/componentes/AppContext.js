// src/contexts/AppContext.js
import React, { createContext, useState, useEffect } from 'react'

// Crear el contexto
export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  // Estado compartido
  const [puntuacion, setPuntuacion] = useState(() => {
    const savedPuntuacion = localStorage.getItem('miPuntuacion')
    console.log('Inicializando puntuacion = ' + savedPuntuacion)
    return savedPuntuacion ? parseInt(savedPuntuacion) : 0
  })

  useEffect(() => {
    console.log('guardando puntuacion = ' + puntuacion)
    localStorage.setItem('miPuntuacion', puntuacion)
  }, [puntuacion])

  return (
    <AppContext.Provider value={{ puntuacion, setPuntuacion }}>
      {children}
    </AppContext.Provider>
  )
}
