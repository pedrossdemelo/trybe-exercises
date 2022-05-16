import React from "react";
import { useSelector } from "react-redux";
import ClientTable from "./atoms/ClientTable";
import { Link } from "react-router-dom";

export default function Clients() {
  const logged = useSelector((state) => state.login.authenticated);
  return (
    <div className="flex flex-col items-center justify-center grow">
      {logged ? (
        <>
          <ClientTable />
          <Link
            className="m-6 block px-3 py-1.5 font-bold bg-sky-400 rounded text-white"
            to="/clients/register"
          >
            New client
          </Link>
        </>
      ) : (
        <h1 className="text-3xl text-center">Login to see clients</h1>
      )}
    </div>
  );
}
