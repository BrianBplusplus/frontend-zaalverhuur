import React from "react";
import { useMediaQuery } from "react-responsive";

const LandingPageInfo = () => {
  // ---------------- Variables ---------------- //
  const isMediumScreen = useMediaQuery({ minWidth: 881, maxWidth: 1223 });
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
    width: isSmallScreen ? "100%" : isMediumScreen ? "60%" : "751px",
    marginBottom: isSmallScreen ? "20px" : "0",
  };

  const rightStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    width: isSmallScreen ? "100%" : isMediumScreen ? "30%" : "344px",
  };

  const h2Style = {
    margin: "0",
    color: "#ed008c",
  };

  // ---------------- Render ------------------- //
  return (
    <div style={divStyle}>
      <div style={leftStyle}>
        <h2 style={h2Style}>
          Ben je op zoek naar een modern uitgeruste locatie waar je een
          presentatie kunt geven of een cursus kunt verzorgen?
        </h2>
        <p>
          Ook dan ben je bij de nieuwe bibliotheek aan het juiste adres. Naast
          de centrale ligging van de bibliotheek (op vijf minuten lopen van
          Station Almere centrum en met parkeergarages om de hoek) beschikken
          wij ook over diverse zalen die uitstekend geschikt zijn voor de
          ontvangst van gasten voor een presentatie of seminar enzovoort.
          {<br></br>}
          {<br></br>}
          Samen zorgen we voor een geslaagde ervaring! Onderstaand tref je meer
          informatie aan over onze zalen, tarieven en cateringmogelijkheden.
        </p>
      </div>
      <div style={rightStyle}>
        <h2 style={h2Style}>Attentie</h2>
        <p>
          Als gevolg van het coronavirus (COVID-19) is de maximum capaciteit van
          onze vergaderruimtes bijgesteld:
          {<br></br>}
          {<br></br>}De nieuwe zaal = 20 personen
          {<br></br>}Het nieuwe lokaal = 8 personen
          {<br></br>}Het nieuwe podium = 6 personen
          {<br></br>} Het nieuwscafé = 15 personen
          {<br></br>} De nieuwe kamer = 2 personen.
        </p>
      </div>
    </div>
  );
};

export default LandingPageInfo;
