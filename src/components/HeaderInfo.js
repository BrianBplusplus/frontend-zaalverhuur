import React from "react";
import { useMediaQuery } from "react-responsive";

const HeaderInfo = () => {
  // ---------------- Variables ---------------- //
  const isMediumScreen = useMediaQuery({ minWidth: 881, maxWidth: 1223})
  const isSmallScreen = useMediaQuery({ maxWidth: 880 });

  // ---------------- Styling ------------------ //
  const divStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",

    maxWidth: "1300px",
    margin: "auto auto 20px",

    fontSize: "14px",
  };

  const leftStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    width: isSmallScreen ? "100%" : isMediumScreen ? "60%" : "738px",
    marginBottom: isSmallScreen ? "20px" : "0",
  };

  const rightStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    width: isSmallScreen ? "100%" : isMediumScreen ? "30%" : "367px",
  };

  const h2Style = {
    margin: "0",
    color: "#ed008c",
  };

  // ---------------- Render ------------------- //
  return (
    <div style={divStyle}>
      <div style={leftStyle}>
        <h2 style={h2Style}>Zaal huren?</h2>
        <p>
          Ben je op zoek naar een modern uitgeruste locatie waar je een
          presentatie kunt geven of een cursus kunt verzorgen? Ook dan ben je
          bij de nieuwe bibliotheek aan het juiste adres. Naast de centrale
          ligging van de bibliotheek beschikken wij ook over diverse zalen.
        </p>
      </div>
      <div style={rightStyle}>
        <h2 style={h2Style}>Locatie</h2>
        <p>
          op vijf minuten lopen van Station Almere centrum en met parkeergarages
          om de hoek
        </p>
      </div>
    </div>
  );
};

export default HeaderInfo;
