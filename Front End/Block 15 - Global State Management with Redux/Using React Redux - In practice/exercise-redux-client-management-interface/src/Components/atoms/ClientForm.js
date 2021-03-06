import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { submitClient } from "../../redux/actions/submitClient";
import store from "../../redux/store";
import { Input } from "./LoginForm";

const validForm = ({ email, name, age }) =>
  email.length > 12 && name.length > 2 && age > 10;

export default function ClientForm() {
  const { clients } = store.getState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const handleAge = (ageInput) =>
    /^([1-9][0-9]{0,1})$|^$/.test(ageInput) && setAge(ageInput);
  const handleName = (nameInput) =>
    nameInput.length < 20 && setName(nameInput.replace(/[^a-zA-Z ]/g, ""));
  const handleEmail = (emailInput) =>
    emailInput.length < 30 && setEmail(emailInput);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { email, name, age: Number(age) };
    if (validForm(formData)) {
      if (clients.find((client) => client.email === email)) {
        alert("Client already exists");
        return;
      }
      dispatch(submitClient(formData));
      navigate("/clients");
    }
  };
  return (
    <form
      className="p-4 pb-3 bg-white rounded-lg shadow-lg"
      onSubmit={(e) => handleSubmit(e)}
    >
      <Input type="name" onChange={handleName} value={name} />
      <Input type="age" onChange={handleAge} value={age} />
      <Input type="email" onChange={handleEmail} value={email} />
      <button type="submit" className="ml-auto -mt-1 mr-0.5 block text-sky-500">
        Register
      </button>
    </form>
  );
}
