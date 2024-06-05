import React, { useEffect, useState } from 'react';

function Conexion() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/items.json') 
      .then(response => response.json())
      .then(data => setItems(data.items))
      .catch(error => console.error('Error fetching the JSON data:', error));
  }, []);

  return (
    <div>
      <h1>Lista de Items</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            Nombre: {item.nombre}, Edad: {item.precio}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Conexion;