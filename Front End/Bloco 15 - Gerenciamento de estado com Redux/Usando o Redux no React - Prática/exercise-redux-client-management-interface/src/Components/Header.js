import { Link } from "react-router-dom";
import React from "react";

export default function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/clients">Clients</Link>
        </li>
        <li>
          <Link to="/clients/register">Register Clients</Link>
        </li>
      </ul>
    </nav>
  );
}
