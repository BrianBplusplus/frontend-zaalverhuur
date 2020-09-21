import React, { useState } from "react";

import TransparentButton from "../assets/TransparentButton";

const DetailPageAdditionalInformation = ({ state, setState }) => {
  // ---------------- States ------------------- //

  // ---------------- Functions ---------------- //
  const handleClickPickedDayPart = (dayPartChoice) => {
    setState({
      ...state,
      additionalInformationDayPart: dayPartChoice,
    });
  };

  const handleClickPickedMeal = (mealChoice) => {
    setState({ ...state, additionalInformationMeal: mealChoice });
  };

  const handleExtraInformation = (userInput) => {
    setState({
      ...state,
      additionalInformationTextField: userInput,
    });
  };

  // ---------------- Styling ------------------ //
  const divStyle = {};

  const ulStyle = {
    display: "flex",
    flexWrap: "wrap",

    margin: "0",
    padding: "0",
    listStyle: "none",
  };

  const textAreaStyle = {
    width: "99%",
    resize: "none",
  };

  const h2Style = {
    color: "#ed008c",
    marginTop: "0",
  };

  // ---------------- Render ------------------- //
  return (
    <div style={divStyle}>
      <h2 style={h2Style}>Aanvullende informatie</h2>
      <h3>Gewenst dagdeel</h3>
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
      <h3>Catering</h3>
      <ul style={ulStyle}>
        <li onClick={() => handleClickPickedMeal("Geen")}>
          <TransparentButton text="Geen" />
        </li>
        <li onClick={() => handleClickPickedMeal("Kleine Lunch")}>
          <TransparentButton text="Kleine Lunch" />
        </li>
        <li onClick={() => handleClickPickedMeal("Drankjes")}>
          <TransparentButton text="Drankjes" />
        </li>
        <li onClick={() => handleClickPickedMeal("Restaurant")}>
          <TransparentButton text="Restaurant" />
        </li>
      </ul>
      <h3>Extra opmerkingen</h3>
      <textarea
        style={textAreaStyle}
        value={state.additionalInformationTextField}
        onChange={(event) => handleExtraInformation(event.target.value)}
        rows="4"
        name="description"
        placeholder="beschrijf hier uw extra wensen bijvoorbeeld allergieën of dieetwensen of als u een specifieke maaltijd in gedachte heeft"
      ></textarea>
    </div>
  );
};

export default DetailPageAdditionalInformation;
