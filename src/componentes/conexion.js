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
    items
  );
}

export default Conexion;