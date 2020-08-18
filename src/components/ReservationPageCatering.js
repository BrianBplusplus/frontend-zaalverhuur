//TODO: Mealchoice doesnt change the total price of the ReserVationPageContainer. check out [mealPrice, setMealPrice] = useState(0);

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

  const ulStyle = {
    display: "flex",
    flexWrap: "wrap",

    margin: "0",
    height: "150px",
    border: "1px solid #ed008c",
    borderRadius: "3px",
    padding: "10px",
    listStyle: "none",
  };

  const h4Style = {
    textAlign: "center",
    margin: "0",
  };

  const leftStyle = {
    width: "50%",
    marginRight: "5px",
  };

  const rightStyle = {
    width: "50%",
    marginLeft: "5px",
  };

  const textAreaStyle = {
    width: "99%",
    resize: "none",
  };
  // ---------------- Render ------------------- //
  return (
    <div>
      <div style={divStyle}>
        <div style={leftStyle}>
          <h4 style={h4Style}>Lunch</h4>
          <ul style={ulStyle}>
            <li onClick={() => handleClickPickedMeal("Geen")}>
              <TransparentButton text="Geen" />
            </li>
            <li onClick={() => handleClickPickedMeal("Kleine Lunch")}>
              <TransparentButton text="Kleine Lunch" />
            </li>
            <li onClick={() => handleClickPickedMeal("Grote Maaltijd")}>
              <TransparentButton text="Grote Maaltijd" />
            </li>
            <li onClick={() => handleClickPickedMeal("Restaurant")}>
              <TransparentButton text="Restaurant" />
            </li>
            <li onClick={() => handleClickPickedMeal("OpvulOptie")}>
              <TransparentButton text="OpvulOptie" />
            </li>
            <li onClick={() => handleClickPickedMeal("OpvulOptie")}>
              <TransparentButton text="OpvulOptie" />
            </li>
            <li onClick={() => handleClickPickedMeal("OpvulOptie")}>
              <TransparentButton text="OpvulOptie" />
            </li>
          </ul>
        </div>
        <div style={rightStyle}>
          <h4 style={h4Style}>Overige Catering</h4>
          <ul style={ulStyle}>
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
            <li onClick={() => handleClickPickedMeal("OpvulOptie")}>
              <TransparentButton text="OpvulOptie" />
            </li>
            <li onClick={() => handleClickPickedMeal("OpvulOptie")}>
              <TransparentButton text="OpvulOptie" />
            </li>
          </ul>
        </div>
      </div>
      <br></br>
      <div>
        <h4 style={h4Style}>Extra wensen</h4>
        <textarea
          style={textAreaStyle}
          value={props.extraMealInformation}
          onChange={(event) => handleExtraMealInformation(event.target.value)}
          rows="4"
          name="description"
          placeholder="beschrijf hier uw extra wensen bijvoorbeeld allergieën of dieetwensen of als u een specifieke maaltijd in gedachte heeft"
        ></textarea>
      </div>
    </div>
  );
};

export default ReservationPageCatering;
