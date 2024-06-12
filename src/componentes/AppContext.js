// src/contexts/AppContext.js
import React, { createContext, useState } from 'react'

// Crear el contexto
export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  // Estado compartido
  const [puntuacion, setPuntuacion] = useState(0)

  return (
    <AppContext.Provider value={{ puntuacion, setPuntuacion }}>
      {children}
    </AppContext.Provider>
  )
}
