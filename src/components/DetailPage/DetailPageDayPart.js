import React from "react";

import TransparentButton from "../assets/TransparentButton";

const ReservationPageDayPart = ({ state, setState }) => {
  // ---------------- Variables ---------------- //
  const { activeSelection } = state;
  // ---------------- Functions ---------------- //
  const handleClickPickedDayPart = (dayPartChoice) => {
    setState({ ...state, pickedDayPart: dayPartChoice, activeSelection: activeSelection + 1 });
  };

  // ---------------- Styling ------------------ //
  const divStyle = {
    margin: "0 5px 0 5px",
  };

  const ulStyle = {
    display: "flex",
    flexWrap: "wrap",
    height: "100px",
    margin: "0",
    border: "1px solid #ed008c",
    borderRadius: "3px",
    padding: "10px",
    listStyle: "none",
  };

  const h4Style = {
    textAlign: "center",
    margin: "0",
  };

  // ---------------- Render ------------------- //
  return (
    <div style={divStyle}>
      <h4 style={h4Style}>Dagdeel</h4>
      <ul style={ulStyle}>
        <li onClick={() => handleClickPickedDayPart("Ochtend")}>
          <TransparentButton text="Ochtend" />
        </li>
        <li onClick={() => handleClickPickedDayPart("Middag")}>
          <TransparentButton text="Middag" />
        </li>
        <li onClick={() => handleClickPickedDayPart("Avond")}>
          <TransparentButton text="Avond" />
        </li>
        <li onClick={() => handleClickPickedDayPart("Hele dag")}>
          <TransparentButton text="Hele dag" />
        </li>
      </ul>
    </div>
  );
};

export default ReservationPageDayPart;