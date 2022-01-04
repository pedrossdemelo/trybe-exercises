import React from 'react'
import Header from './Header';

if (localStorage.getItem("favorites") === null) localStorage.setItem("favorites", JSON.stringify(new Array(899).fill(false)));

export default function Favorites() {
  const [favorites, setFavorites] = React.useState(JSON.parse(localStorage.getItem("favorites")));
  
  return (
    <div className="flex flex-col items-center text-center bg-slate-50 min-h-screen">
      <Header />
      
    </div>
  )
}
