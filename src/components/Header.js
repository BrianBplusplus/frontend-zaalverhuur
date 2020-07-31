import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/dnblogo.jpg";

const Header = () => {
  const divStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",

    padding: "20px",
    margin: "auto",
  };

  const navStyle = {
    display: "flex",
    listStyle: "none",
    margin: "0 10px",
    padding: "0",
  };

  const imageStyle = {
    // height: "100%",
  };

  const listStyle = {
    margin: "0 10px",
  };

  return (
    <div style={divStyle}>
      <Link to="/">
        <img style={imageStyle} alt="headerlogo" src={logo} />
      </Link>
      <ul style={navStyle}>
        <li style={listStyle}>Vergaderruimtes</li>
        <li style={listStyle}>inloggen</li>
        <li style={listStyle}>Terug naar Bibliotheek</li>
      </ul>
    </div>
  );
};

export default Header;
