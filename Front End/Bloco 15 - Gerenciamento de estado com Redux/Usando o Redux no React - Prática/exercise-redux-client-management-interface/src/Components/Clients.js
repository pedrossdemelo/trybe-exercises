import React from "react";
import ClientTable from "./atoms/ClientTable";

export default function Clients() {
  return (
    <div className="flex flex-col items-center justify-center grow">
      <ClientTable />
    </div>
  );
}
