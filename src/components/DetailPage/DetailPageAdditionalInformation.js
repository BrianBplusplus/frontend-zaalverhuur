import React, { useState, useEffect } from "react";

import TransparentButton from "../assets/TransparentButton";
import MenuPDF from "../../img/menuKaart.pdf";

const DetailPageAdditionalInformation = ({ state, setState }) => {
  // ---------------- States ------------------- //
  const [selectedDayPart, setSelectedDayPart] = useState("");
  const [selectedMeal, setSelectedMeal] = useState("");

  // ---------------- Variables ---------------- //
  const {
    apiData,
    validatorDayPart,
    validatorCatering,
    validatorAmountOfPersons,
  } = state;
  const dayPart = ["Ochtend", "Middag", "Avond", "Hele Dag"];
  const meals = ["Geen", "Lunch", "Drankjes", "Borrelhapjes"];

  // ---------------- Functions ---------------- //
  const handleClickPickedDayPart = (dayPartChoice) => {
    setSelectedDayPart(dayPartChoice);
    setState({
      ...state,
      additionalInformationDayPart: dayPartChoice,
      validatorDayPart: true,
    });
  };

  const handleClickPickedMeal = (cateringChoice, cateringChoicePrice) => {
    setSelectedMeal(cateringChoice);
    setState({
      ...state,
      additionalInformationCatering: cateringChoice,
      cateringPrice: cateringChoicePrice,
      validatorCatering: true,
    });
  };

  const handlePersons = (personChoice) => {
    setState({
      ...state,
      additionalInformationAmountOfPersons: personChoice,
      validatorAmountOfPersons: true,
    });
  };

  const handleExtraInformation = (userInput) => {
    setState({
      ...state,
      additionalInformationTextField: userInput,
    });
  };

  useEffect(() => {
    if (apiData.locationID === 1368) {
      handleClickPickedDayPart("Avond");
      return;
    }
  }, [apiData.locationID]);

  // ---------------- Styling ------------------ //
  const divStyle = {};

  const ulStyle1 = {
    display: "flex",
    flexWrap: "wrap",

    margin: "0",
    padding: "0",
    listStyle: "none",

    border: validatorDayPart === false ? "1px solid red" : "none",
    borderRadius: "5px",
  };

  const ulStyle2 = {
    ...ulStyle1,
    border: validatorCatering === false ? "1px solid red" : "none",
  };

  const errorMessageCatering = {
    display: validatorCatering === false ? "none" : "block",
  };

  const inputStyle = {
    border:
      validatorAmountOfPersons === false
        ? "1px solid red"
        : "1px solid #dedede",
  };

  const textAreaStyle = {
    width: "99%",
    resize: "none",
  };

  const h2Style = {
    color: "#ed008c",
    marginTop: "0",
  };

  const aStyle = {
    color: "#ed008c",
    display: "flex",
    justifyContent: "center",
  };

  // ---------------- Render ------------------- //
  return (
    <div style={divStyle}>
      <h2 style={h2Style}>Aanvullende informatie</h2>

      <h3>Gewenst dagdeel</h3>
      {/*validatorDayPart && <p>test</p>*/}
      <ul style={ulStyle1}>
        {dayPart.map((part, index) => {
          return (
            <li key={index} onClick={() => handleClickPickedDayPart(part)}>
              <TransparentButton
                isSelected={selectedDayPart === part}
                id={index}
                text={part}
              />
            </li>
          );
        })}
      </ul>

      <h3>Catering</h3>
      <p>
        Bekijk hier ons aanbod en vul je gewenste catering opties hier onder in
      </p>
      <a
        href={
          "https://www.denieuwebibliotheek.nl/dam/Nieuws/cateringassortiment-de-nieuwe-bibliotheek-2020.pdf"
        }
        target={"_blank"}
        style={aStyle}
      >
        Menu kaart
      </a>
      {/*<ul style={ulStyle2}>
        {meals.map((meal, index) => {
          return (
            <li key={index} onClick={() => handleClickPickedMeal(meal)}>
              <TransparentButton
                isSelected={selectedMeal === meal}
                id={index}
                text={meal}
              />
            </li>
          );
        })}
      </ul> */}

      <br></br>
      <br></br>

      <textarea
        style={textAreaStyle}
        value={state.additionalInformationTextField}
        onChange={(event) => handleExtraInformation(event.target.value)}
        rows="4"
        name="description"
        placeholder="Beschrijf hier de gewenste catering"
      ></textarea>

      <br></br>
      <br></br>
      <a
        style={aStyle}
        href="https://www.denieuwebibliotheek.nl/dam/Bestanden/algemene-voorwaarden-verhuur-2018.pdf"
      >
        Algemene voorwaarden
      </a>
    </div>
  );
};

export default DetailPageAdditionalInformation;
