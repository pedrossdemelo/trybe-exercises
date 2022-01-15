import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/login.js";

export function Input({ value, onChange, type }) {
  return (
    <input
      className="block px-2 py-1 mb-4 border rounded border-slate-300 placeholder:text-slate-400 bg-slate-50"
      placeholder={type[0].toUpperCase() + type.slice(1)}
      name={type}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }
    dispatch(login(email))
  };
  return (
    <form
      className="p-4 pb-3 bg-white rounded-lg shadow-lg"
      onSubmit={(e) => handleSubmit(e)}
    >
      <Input type="email" onChange={setEmail} value={email} />
      <Input type="password" onChange={setPassword} value={password} />
      <button type="submit" className="ml-auto -mt-1 mr-0.5 block text-sky-500">
        Login
      </button>
    </form>
  );
}
