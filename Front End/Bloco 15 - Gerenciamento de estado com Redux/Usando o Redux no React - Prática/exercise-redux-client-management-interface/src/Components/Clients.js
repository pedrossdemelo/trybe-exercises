import React from "react";
import { useSelector } from "react-redux";
import ClientTable from "./atoms/ClientTable";

export default function Clients() {
  const logged = useSelector((state) => state.login.authenticated);
  return (
    <div className="flex flex-col items-center justify-center grow">
      {logged ? <ClientTable /> : <h1>Login to see clients</h1>}
    </div>
  );
}
