import { Link } from "react-router-dom";
import React from "react";

export default function Header() {
  return (
    <nav>
      <ul className="flex flex-row justify-evenly bg-white h-12 items-center shadow-sm">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/clients">Clients</Link>
        </li>
        <li>
          <Link to="/clients/register">Register Clients</Link>
        </li>
        <li>
          <Link to="/login" className="px-3 py-1.5 font-bold bg-sky-400 rounded text-white">Login</Link>
        </li>
      </ul>
    </nav>
  );
}
