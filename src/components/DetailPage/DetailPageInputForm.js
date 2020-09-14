import React, { useState } from "react";

import DatePicker from "../assets/DatePicker";

const DetailPageInputForm = ({ state, setState }) => {
  // ---------------- Styling ------------------ //

  const divStyle = {};

  const h2Style = {
    color: "#ed008c",
    marginTop: "0",
  };

  // ---------------- Render ------------------- //
  return (
    <div style={divStyle}>
      <h2 style={h2Style}>Aanvraagformulier</h2>
      Dagdeel: Ochtend Middag Avond Hele dag
      <DatePicker state={state} setState={setState} />
    </div>
  );
};

export default DetailPageInputForm;
