import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeClient } from "../../redux/actions/submitClient";

const ClientRow = ({ client, index }) => {
  const { name, age, email } = client;
  const dispatch = useDispatch();
  const remove = () => dispatch(removeClient(client));
  const [hover, setHover] = useState(false);
  return (
    <tr
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={remove}
      key={email}
      className={`${
        index % 2 ? "bg-slate-50" : ""
      } transition relative h-10 hover:bg-red-100 hover:cursor-pointer`}
    >
      <th scope="row">
        {name}
      </th>
      <td>{age}</td>
      <td>{hover ? "Remove this client?" : email}</td>
    </tr>
  );
};

export default function ClientTable() {
  const clientData = useSelector((state) => state.clients);
  if (!clientData.length) return null;
  return (
    <div className="relative overflow-hidden bg-white shadow-xl rounded-xl">
      <table className="text-center table-fixed">
        <colgroup>
          <col className="w-32" />
          <col className="w-14" />
          <col className="w-60" />
        </colgroup>
        <thead className="bg-white border-b-2">
          <tr className="h-10">
            <th scope="col">
              Name
            </th>
            <th scope="col">
              Age
            </th>
            <th scope="col">
              Email
            </th>
          </tr>
        </thead>
        <tbody>
          {clientData.map((client, index) => (
            <ClientRow key={client.email} client={client} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
