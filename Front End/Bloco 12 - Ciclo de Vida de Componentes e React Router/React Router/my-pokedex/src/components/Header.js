import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="text-center p-2 border-b border-gray-300 bg-white w-screen">
      <Link to="/about" className="text-3xl font-worksans font-medium">Pokedex</Link>
    </header>
  );
}
