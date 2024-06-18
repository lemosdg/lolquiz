import React from 'react'
import Niveles from './componentes/niveles'
import Pregunta from './componentes/pregunta'
import { AppProvider } from './componentes/AppContext'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './componentes/header'

function App() {
  return (
    <div>
      <Router>
        <AppProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Niveles />} />
            <Route path="/pregunta" element={<Pregunta />} />
          </Routes>
        </AppProvider>
      </Router>
    </div>
  )
}

export default App
