import { Link } from "react-router-dom";
import React from "react";

export default function Header() {
  return (
    <nav>
      <ul className="flex items-center h-12 p-2 bg-white shadow-sm">
        <li >
          <Link className="p-2" to="/">Home</Link>
        </li>
        <li >
          <Link className="p-2" to="/clients">Clients</Link>
        </li>
        <li >
          <Link className="p-2" to="/clients/register">Register clients</Link>
        </li>
        <li className="ml-auto">
          <Link to="/login" className="px-3 py-1.5 font-bold bg-sky-400 rounded text-white">Login</Link>
        </li>
      </ul>
    </nav>
  );
}
