import React from "react";
import reduxLogo from "../assets/reduxLogo.png";
export default function Home() {
  return (
    <div className="grow flex flex-col items-center justify-center">
      <h1 className="text-3xl text-center">Redux Client Managament Interface</h1>
      <img src={reduxLogo} alt="Redux Logo" />
    </div>
  );
}
