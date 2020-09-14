import React from "react";

const DetailPageAdditionalInformation = () => {
  // ---------------- Styling ------------------ //
  const divStyle = {};

  const h2Style = {
    color: "#ed008c",
    marginTop: "0",
  };

  // ---------------- Render ------------------- //
  return (
    <div style={divStyle}>
      <h2 style={h2Style}>Aanvullende informatie</h2>
      <br></br>
      <br></br>
      <h2 style={h2Style}>Totaal</h2>
      <button>Reserveren</button>
    </div>
  );
};

export default DetailPageAdditionalInformation;
