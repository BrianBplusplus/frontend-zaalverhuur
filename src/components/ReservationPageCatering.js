//TODO: Mealchoice doesnt change the total price of the ReserVationPageContainer. check out [mealPrice, setMealPrice] = useState(0);

import React from "react";

import TransparentButton from "./assets/TransparentButton";

const ReservationPageCatering = (props) => {
  // ---------------- Functions ---------------- //
  const handleClickPickedMeal = (mealChoice, mealChoicePrice) => {
    props.setPickedMeal(mealChoice);
    props.setMealPrice(mealChoicePrice);
  };

  const handleClickPickedDrinks = (drinkChoice, drinkChoicePrice) => {
    props.setPickedDrinks(drinkChoice);
    props.setDrinkPrice(drinkChoicePrice);
  };

  const handleClickPickedExtraCatering = (cateringChoice, cateringChoicePrice) => {
    props.setPickedExtraCatering(cateringChoice);
    props.setExtraCateringPrice(cateringChoicePrice);
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
            <li onClick={() => handleClickPickedMeal("Geen", 0)}>
              <TransparentButton text="Geen" />
            </li>
            <li onClick={() => handleClickPickedMeal("Kleine Lunch", 50)}>
              <TransparentButton text="Kleine Lunch" />
            </li>
            <li onClick={() => handleClickPickedMeal("Grote Maaltijd", 100)}>
              <TransparentButton text="Grote Maaltijd" />
            </li>
            <li onClick={() => handleClickPickedMeal("Restaurant", 150)}>
              <TransparentButton text="Restaurant" />
            </li>
            <li onClick={() => handleClickPickedMeal("OpvulOptie", 25)}>
              <TransparentButton text="OpvulOptie" />
            </li>
            <li onClick={() => handleClickPickedMeal("OpvulOptie", 15)}>
              <TransparentButton text="OpvulOptie" />
            </li>
            <li onClick={() => handleClickPickedMeal("OpvulOptie", 35)}>
              <TransparentButton text="OpvulOptie" />
            </li>
          </ul>
        </div>
        <div style={rightStyle}>
          <h4 style={h4Style}>Overige Catering</h4>
          <ul style={ulStyle}>
            <li onClick={() => handleClickPickedExtraCatering("Geen", 0)}>
              <TransparentButton text="Geen" />
            </li>
            <li onClick={() => handleClickPickedExtraCatering("Alcoholische dranken", 51)}>
              <TransparentButton text="Alcoholische dranken" />
            </li>
            <li onClick={() => handleClickPickedExtraCatering("Bittergarnituur", 52)}>
              <TransparentButton text="Bittergarnituur" />
            </li>
            <li onClick={() => handleClickPickedExtraCatering("Vegetarisch garnituur", 53)}>
              <TransparentButton text="Vegetarisch garnituur" />
            </li>
            <li onClick={() => handleClickPickedExtraCatering("Koffie", 54)}>
              <TransparentButton text="Koffie" />
            </li>
            <li onClick={() => handleClickPickedExtraCatering("Thee", 55)}>
              <TransparentButton text="Thee" />
            </li>
            <li onClick={() => handleClickPickedExtraCatering("Frisdrank", 56)}>
              <TransparentButton text="Frisdrank" />
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
