import React from "react";
import ClientForm from "./atoms/ClientForm";
import { useSelector } from "react-redux";

export default function ClientRegister() {
  const logged = useSelector((state) => state.login.authenticated);
  return (
    <div className="flex flex-col items-center justify-center grow">
      {logged ? <ClientForm /> : <h1 className="text-3xl text-center">Login to register new clients</h1>}
    </div>
  );
}
