import React, { Component } from "react";

import logo from "../img/dnblogo.jpg";

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "10px",
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

export default class header extends Component {
  render() {
    return (
      <div style={headerStyle}>
        <img src={logo} />
        <ul style={navStyle}>
          <li style={listStyle}>Vergaderruimtes</li>
          <li style={listStyle}>inloggen</li>
          <li style={listStyle}>Terug naar Bibliotheek</li>
        </ul>
      </div>
    );
  }
}
