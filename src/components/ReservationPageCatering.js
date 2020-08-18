import React from "react";

import TransparentButton from "./assets/TransparentButton";

const ReservationPageCatering = (props) => {
  // ---------------- Functions ---------------- //
  const handleClickPickedMeal = (mealChoice) => {
    props.setPickedMeal(mealChoice);
  };

  const handleClickPickedExtraCatering = (cateringChoice) => {
    props.setPickedExtraCatering(cateringChoice);
  };

  const handleExtraMealInformation = (userInput) => {
    props.setExtraMealInformation(userInput);
  };

  // ---------------- Styling ------------------ //
  const divStyle = {
    display: "flex",
    justifyContent: "center",
  };

  const textAreaStyle = {
    width: "97%",
    resize: "none",
  };
  // ---------------- Render ------------------- //
  return (
    <div>
      <div style={divStyle}>
        <div>
          Lunch
          <ul>
            <li onClick={() => handleClickPickedMeal("Geen")}>
              <TransparentButton text="Geen" />
            </li>
            <li onClick={() => handleClickPickedMeal("Kleine Lunch")}>
              <TransparentButton text="Kleine Lunch" />
            </li>
            <li onClick={() => handleClickPickedMeal("Restaurant")}>
              <TransparentButton text="Restaurant" />
            </li>
          </ul>
        </div>
        <div>
          Overige Catering
          <ul>
            <li onClick={() => handleClickPickedExtraCatering("Geen")}>
              <TransparentButton text="Geen" />
            </li>
            <li onClick={() => handleClickPickedExtraCatering("Alcoholische ronde")}>
              <TransparentButton text="Alcoholische ronde" />
            </li>
            <li onClick={() => handleClickPickedExtraCatering("Bittergarnituur")}>
              <TransparentButton text="Bittergarnituur" />
            </li>
            <li onClick={() => handleClickPickedExtraCatering("Vegetarisch garnituur")}>
              <TransparentButton text="Vegetarisch garnituur" />
            </li>
          </ul>
        </div>
      </div>
      <div>
        Extra wensen
        <textarea
          style={textAreaStyle}
          value={props.extraMealInformation}
          onChange={(event) => handleExtraMealInformation(event.target.value)}
          rows="4"
          name="description"
          placeholder="beschrijf hier uw extra wensen i.v.m. bijvoorbeeld allergieën of dieetwensen"
        ></textarea>
      </div>
    </div>
  );
};

export default ReservationPageCatering;
