import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Input({value, onChange, type}) {
  return (
      <input
        className="block px-2 py-1 mb-4 border rounded border-slate-300 placeholder:text-slate-400 bg-slate-50"
        placeholder={type[0].toUpperCase() + type.slice(1)}
        name={type}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
  )
}

export default function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) navigate("/clients");
  };
  return (
    <form
      className="p-4 pb-3 bg-white rounded-lg shadow-lg"
      onSubmit={(e) => handleSubmit(e)}
    >
      <Input type="email" onChange={setEmail} value={email}/>
      <Input type="password" onChange={setPassword} value={password}/>
      <button type="submit" className="ml-auto -mt-1 mr-0.5 block text-sky-500">
        Login
      </button>
    </form>
  );
}
