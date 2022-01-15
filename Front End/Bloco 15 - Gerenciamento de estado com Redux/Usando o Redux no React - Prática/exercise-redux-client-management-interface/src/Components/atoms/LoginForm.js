import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

export default function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => { e.preventDefault(); if (email && password) navigate("/clients")}
  return (
    <form className="p-4 rounded-lg shadow-lg bg-white" onSubmit={(e)=>handleSubmit(e)}>
      <input
        className="block rounded border border-slate-300 placeholder:text-slate-400 py-1 px-2 mb-4"
        placeholder="Email"
        name="email"
        type="email"
        value={email}
        onChange={({ target: { value } }) => setEmail(value)}
      />
      <input
        className="block rounded border border-slate-300 placeholder:text-slate-400 py-1 px-2 mb-4"
        placeholder="Password"
        name="password"
        type="password"
        value={password}
        onChange={({ target: { value } }) => setPassword(value)}
      />
      <button type="submit" className="ml-auto mr-1 block text-sky-500">Login</button>
    </form>

  );
}
