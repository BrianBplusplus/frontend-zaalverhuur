import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  // ---------------- Styling ---------------- //
  const divStyle = {
    fontFamily: "Open Sans, sans-serif",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    color: "#fff",
    backgroundColor: "#000",
    padding: "20px 20px 10px 20px",
    margin: " 0 auto 0",
  };

  const ulStyle = {
    listStyle: "none",
    padding: "0",
  };

  const h2Style = {
    fontSize: "18px",
    textTransform: "uppercase",
  };

  // ---------------- Render ---------------- //
  return (
    <div style={divStyle}>
      <div>
        <h2 style={h2Style}>Kunnen wij je helpen?</h2>
        <ul style={ulStyle}>
          <li>Verlengen</li>
          <li>Reserveren</li>
          <li>Regels PC gebruik</li>
          <li>Printen</li>
          <li>Veelgestelde vragen</li>
        </ul>
      </div>
      <div>
        <h2 style={h2Style}>Blijf op de hoogte!</h2>
        <ul style={ulStyle}>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
          <li>Youtube</li>
          <li>Nieuwsbrief</li>
        </ul>
      </div>
      <div>
        <h2 style={h2Style}>Informatiepunten</h2>
        <ul style={ulStyle}>
          <li>ZEPservice</li>
          <li>Seats2meet</li>
          <li>Leeskringen</li>
          <li>Europe-direct</li>
          <li>Plusbibliotheek</li>
        </ul>
      </div>
      <div>
        <h2 style={h2Style}>Denieuwebibliotheek</h2>
        <ul style={ulStyle}>
          <li><Link to={"/test"}>Over denieuwebibliotheek</Link></li>
          <li>Werken bij de bibliotheek</li>
          <li>Contact</li>
          <li>Adressen</li>
          <li>Rondleidingen</li>
          <li>Jaarverslagen</li>
          <li>Privacy</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
