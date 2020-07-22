import React from "react";
import logo from "../img/dnblogo.jpg";

const divStyle = {
  display: "flex",
  justifyContent: "space-between",

  width: "80%",
  padding: "15px",
  margin: "auto",
};

const navStyle = {
  display: "flex",
  listStyle: "none",
  margin: "0 10px",
  padding: "0",
};

const listStyle = {
  margin: "0 10px",
};

const Header = () => {
  return (
    <div style={divStyle}>
      <img alt="headerlogo" src={logo} />
      <ul style={navStyle}>
        <li style={listStyle}>Vergaderruimtes</li>
        <li style={listStyle}>inloggen</li>
        <li style={listStyle}>Terug naar Bibliotheek</li>
      </ul>
    </div>
  );
};

export default Header;
