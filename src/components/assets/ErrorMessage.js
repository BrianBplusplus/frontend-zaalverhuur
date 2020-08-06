import React from "react";
import { Link } from "react-router-dom";

import LargeButton from "./LargeButton";

const ErrorMessage = () => {
  // ---------------- Variables ---------------- //

  const reloadPage = () => {
    window.location.reload();
  };

  // ---------------- Render ------------------- //

  return (
    <div>
      <h2>Er is iets verkeerd gegaan...</h2>

      <div onClick={() => reloadPage()}>
        <LargeButton text={"Opnieuw proberen"} />
      </div>

      <br></br>
      <br></br>

      <Link to="/">
        <LargeButton text={"Terug naar de homepage"} />
      </Link>
    </div>
  );
};

export default ErrorMessage;
