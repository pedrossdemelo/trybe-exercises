import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import LoginForm from "./atoms/LoginForm";

export default function Login() {
  const logged = useSelector(state => state.login.authenticated);
  return (
    <div className="flex flex-col items-center justify-center grow">
      {logged ? <Navigate to="/clients"/> : <LoginForm />}
    </div>
  );
}
