import React from "react";

const Footer = () => {
  // ---------------- Styling ---------------- //
  const divStyle = {
    fontFamily: "Open Sans, sans-serif",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    color: "#fff",
    backgroundColor: "#000",
    padding: "20px 20px 40px 20px",
    margin: " 0 auto 0",
  };

  const h2Style = {
    fontSize: "1.3rem",
    fontWeight: "normal",
  };

  // ---------------- Render ---------------- //
  return (
    <div style={divStyle}>
      <div>
        <h2 style={h2Style}>KUNNEN WIJ JE HELPEN?</h2>
        <ul>
          <li>Verlengen</li>
          <li>Reserveren</li>
          <li>Regels PC gebruik</li>
          <li>Printen</li>
          <li>Veelgestelde vragen</li>
        </ul>
      </div>
      <div>
        <h2 style={h2Style}>BLIJF OP DE HOOGTE!</h2>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
          <li>Youtube</li>
          <li>Nieuwsbrief</li>
        </ul>
      </div>
      <div>
        <h2 style={h2Style}>INFORMATIEPUNTEN</h2>
        <ul>
          <li>ZEPservice</li>
          <li>Seats2meet</li>
          <li>Leeskringen</li>
          <li>Europe-direct</li>
          <li>Plusbibliotheek</li>
        </ul>
      </div>
      <div>
        <h2 style={h2Style}>DENIEUWEBIBLIOTHEEK</h2>
        <ul>
          <li>Over denieuwebibliotheek</li>
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
