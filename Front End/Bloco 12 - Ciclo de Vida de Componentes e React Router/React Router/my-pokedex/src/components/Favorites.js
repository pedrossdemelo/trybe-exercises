import React from 'react'

if (localStorage.getItem("favorites") === null) localStorage.setItem("favorites", JSON.stringify(new Array(899).fill(false)));

export default function Favorites() {
  const [favorites, setFavorites] = React.useState(JSON.parse(localStorage.getItem("favorites")));
  
  return (
    <div>
      
    </div>
  )
}
