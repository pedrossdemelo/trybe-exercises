import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/actions/login";

const LoginButton = () => (
  <Link
    to="/login"
    className="block px-3 py-1.5 font-bold bg-sky-400 rounded text-white"
  >
    Login
  </Link>
);

const LogoutButton = () => {
  const dispatch = useDispatch();
  const logOut =  () => dispatch(logout());
  return (
    <button
      onClick={() => {
        logOut();
      }}
      className="block px-3 py-1.5 font-bold bg-red-400 rounded text-white"
    >
      Logout
    </button>
  );
};

export default function Header() {
  const logged = useSelector((state) => state.login.authenticated);
  return (
    <nav>
      <ul className="flex items-center h-12 p-2 bg-white shadow-sm">
        <li>
          <Link className="p-2" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="p-2" to="/clients">
            Clients
          </Link>
        </li>
        <li className="ml-auto">
          {logged ? <LogoutButton/> : <LoginButton />}
        </li>
      </ul>
    </nav>
  );
}
