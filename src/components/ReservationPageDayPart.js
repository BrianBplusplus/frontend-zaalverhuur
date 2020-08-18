import React from "react";

import TransparentButton from "./assets/TransparentButton";

const ReservationPageDayPart = (props) => {
  // ---------------- Functions ---------------- //
  const handleClickPickedDayPart = (dayPartChoice) => {
    props.setPickedDayPart(dayPartChoice);
  };

  // ---------------- Styling ------------------ //
  const ulStyle = {
    display: "flex",
    justifyContent: "center",
    listStyle: "none",
    padding: "0",
  };

  // ---------------- Render ------------------- //
  return (
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
  );
};

export default ReservationPageDayPart;
