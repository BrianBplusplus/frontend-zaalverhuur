import React from "react";
import TransparantButton from "./assets/TransparantButton";

const ReservationPageSelections = (props) => {
  // ---------------- Styling ------------------ //
  const ulStyle = {
    display: "flex",
    justifyContent: "center",
    listStyle: "none",
    padding: "0",
  };

  // ---------------- Render ------------------- //
  return (
    <div>
      <h2>Opties</h2>
      <h3>Dagdeel</h3>
      <ul style={ulStyle}>
        <li onClick={() => setPickedDayPart("Ochtend")}>
          <TransparantButton text="Ochtend" />
        </li>
        <li onClick={() => setPickedDayPart("Middag")}>
          <TransparantButton text="Middag" />
        </li>
        <li onClick={() => setPickedDayPart("Avond")}>
          <TransparantButton text="Avond" />
        </li>
      </ul>
      <h3>Maaltijden</h3>
      <ul style={ulStyle}>
        <li onClick={() => setPickedMeal("Geen")}>
          <TransparantButton text="Geen" />
        </li>
        <li onClick={() => setPickedMeal("Kleine lunch")}>
          <TransparantButton text="Kleine Lunch" />
        </li>
        <li onClick={() => setPickedMeal("Warme maaltijd")}>
          <TransparantButton text="Warme Maaltijd" />
        </li>
        <li onClick={() => setPickedMeal("Restaurant")}>
          <TransparantButton text="Restuarant" />
        </li>
      </ul>
      <h3>Opstellingen</h3>
      <ul style={ulStyle}>
        <li onClick={() => setPickedSeatplan("U-vorm")}>
          <TransparantButton text="U-vorm" />
        </li>
        <li onClick={() => setPickedSeatplan("Klaslokaal")}>
          <TransparantButton text="Klaslokaal" />
        </li>
        <li onClick={() => setPickedSeatplan("Theater")}>
          <TransparantButton text="Theater" />
        </li>
      </ul>
    </div>
  );
};

export default ReservationPageSelections;
