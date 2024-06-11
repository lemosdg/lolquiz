import React, { useState } from "react";
import Niveles from './componentes/niveles';
import { AppProvider } from './componentes/AppContext';

function App() {

  return (
    <div>
      <AppProvider>
        <Niveles />
      </AppProvider>
    </div>
  );
}

export default App;