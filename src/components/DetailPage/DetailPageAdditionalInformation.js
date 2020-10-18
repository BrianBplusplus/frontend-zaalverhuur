import React, { useState, useEffect } from "react";

import TransparentButton from "../assets/TransparentButton";

const DetailPageAdditionalInformation = ({ state, setState }) => {
  // ---------------- States ------------------- //
  const [selectedDayPart, setSelectedDayPart] = useState("");
  const [selectedMeal, setSelectedMeal] = useState("");

  // ---------------- Variables ---------------- //
  const { apiData } = state
  const dayPart = ["Ochtend", "Middag", "Avond", "Hele Dag"]
  const meals = ["Geen", "Lunch", "Drankjes", "Borrelhapjes"]

  // ---------------- Functions ---------------- //
  const handleClickPickedDayPart = (dayPartChoice) => {
    setSelectedDayPart(dayPartChoice)
    setState({
      ...state,
      additionalInformationDayPart: dayPartChoice,
    });
  };

  const handleClickPickedMeal = (cateringChoice, cateringChoicePrice) => {
    setSelectedMeal(cateringChoice)
    setState({
      ...state,
      additionalInformationCatering: cateringChoice,
      cateringPrice: cateringChoicePrice,
    });
  };

  const handlePersons = (personChoice) => {
    setState({ ...state, additionalInformationAmountOfPersons: personChoice });
  };

  const handleExtraInformation = (userInput) => {
    setState({
      ...state,
      additionalInformationTextField: userInput,
    });
  };

  useEffect(() => {
    if (apiData.locationID === 1368) {
      handleClickPickedDayPart("Avond")
      return
    }
  },[apiData.locationID]);

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

      {dayPart.map((part, index) => {
        return(
          <li key={index} onClick={() => handleClickPickedDayPart(part)}>
            <TransparentButton isSelected={selectedDayPart === part} id={index} text={part} />  
           </li>)
          })}
      </ul>

      <h3>Catering</h3>
      <ul style={ulStyle}>

      {meals.map((meal, index) => {
        return(
          <li key={index} onClick={() => handleClickPickedMeal(meal)}>
            <TransparentButton isSelected={selectedMeal === meal} id={index} text={meal} />  
           </li>)
          })}
      </ul>

      <h3>Aantal personen</h3>
      <input
        type="number"
        id="persons"
        name="persons"
        min="0"
        onChange={(event) => handlePersons(event.target.value)}
      ></input>

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
