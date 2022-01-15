import { Input } from "./LoginForm";
import React, { useState } from 'react'

export default function ClientForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const handleAge = (ageInput) => (/^([1-9][0-9]{0,1})$|^$/.test(ageInput)) && setAge(ageInput);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      className="p-4 pb-3 bg-white rounded-lg shadow-lg"
      onSubmit={(e) => handleSubmit(e)}
    >
      <Input type="name" onChange={setName} value={name}/>
      <Input type="age" onChange={handleAge} value={age} />
      <Input type="email" onChange={setEmail} value={email}/>
      <button type="submit" className="ml-auto -mt-1 mr-0.5 block text-sky-500">
        Register
      </button>
    </form>
  );
}
