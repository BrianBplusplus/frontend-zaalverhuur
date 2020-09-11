import React from "react";

const ReservationPageSummary = ({ state }) => {
  // ---------------- Variables ---------------- //
  const {
    pickedDayPart,
    locationPrice,
    mealPrice,
    drinkPrice,
    extraCateringPrice,
  } = state;

  // ---------------- Styling ------------------ //
  const divStyle = {
    padding: "0 10px 10px 10px",
    textAlign: "center",
  };
  const h4Style = {
    margin: "5px 0 5px 0",
  };

  const pStyle = {
    textAlign: "center",
    fontSize: "14px",
    color: "#636363",
  };

  const ulStyle = {
    listStyle: "none",
    padding: "0",
  };

  // ---------------- Render ------------------- //
  //TODO: A better purpose for the information that needs to be summarized
  return (
    <div>
      <div style={divStyle}>
        <h4 style={h4Style}>Bedrag Schatting</h4>
        <ul style={ulStyle}>
          <li>
            Zaal: €
            {pickedDayPart === "Hele dag" ? locationPrice * 2 : locationPrice}
          </li>
          <li>Catering: €{mealPrice + drinkPrice + extraCateringPrice}</li>
          <li>
            Totaal: €
            {(pickedDayPart === "Hele dag"
              ? locationPrice * 2
              : locationPrice) +
              mealPrice +
              drinkPrice +
              extraCateringPrice}
          </li>
        </ul>
        <p style={pStyle}>Op basis van uw selectie wordt een offerte gemaakt</p>
      </div>
    </div>
  );
};

export default ReservationPageSummary;
