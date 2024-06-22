// src/ItemList.js
import React, { useState, useEffect } from 'react'

const ItemList = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // URL del archivo item.json
    const url =
      'https://ddragon.leagueoflegends.com/cdn/14.12.1/data/es_ES/item.json'

    // Función para obtener los ítems
    const fetchItems = async () => {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`)
        }
        const data = await response.json()
        const itemsData = Object.values(data.data)
        setItems(itemsData)
      } catch (error) {
        console.error('Error al obtener los datos:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchItems()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return items
}

export default ItemList
