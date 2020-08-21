import React from "react";

const ReservationPageSummary = (props) => {
  // ---------------- Variables ---------------- //
  const pickedDayPart = props.pickedDayPart;
  const pickedSeatPlan = props.pickedSeatPlan;
  const pickedMeal = props.pickedMeal;
  const pickedExtraCatering = props.pickedExtraCatering;
  const mealPrice = props.mealPrice;
  const drinkPrice = props.drinkPrice;
  const extraCateringPrice = props.extraCateringPrice;
  const locationPrice = props.locationPrice;

  // ---------------- Styling ------------------ //
  const divStyle = {
    height: "300px",
  };

  const ulStyle = {
    listStyle: "none",
    padding: "5px",
    width: "70%",
    margin: "0 auto",
    textAlign: "center",
  };

  const liStyle = {
    color: "#ed008c",
    backgroundColor: "#fff",
    border: "2px solid #ed008c",
    borderRadius: "3px",
    margin: "5px 0 5px 0",
    padding: "5px",
  };

  const h4Style = {
    margin: "5px 0 5px 0",
  };

  const pStyle = {
    textAlign: "center",
    fontSize: "14px",
    color: "#636363",
  };

  const inputFormStyle = {
    padding: "0 10px 10px 10px",
    textAlign: "center",
  };

  // ---------------- Render ------------------- //
  return (
    <div>
      <div style={divStyle}>
        <p style={pStyle}>Geselecteerde opties</p>
        <ul style={ulStyle}>
          {pickedDayPart && <li>Dagdeel</li>}
          {pickedDayPart && <li style={liStyle}>{pickedDayPart}</li>}
          {pickedSeatPlan && <li>Opstelling</li>}
          {pickedSeatPlan && <li style={liStyle}>{pickedSeatPlan}</li>}
          {pickedMeal && <li>Lunch</li>}
          {pickedMeal && <li style={liStyle}>{pickedMeal}</li>}
          {pickedExtraCatering && <li>Extra's</li>}
          {pickedExtraCatering && <li style={liStyle}>{pickedExtraCatering}</li>}
        </ul>
      </div>
      <p style={pStyle}>- - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
      <div style={inputFormStyle}>
        <h4 style={h4Style}>Email:</h4>
        <input type="email"></input>
        <br></br>
        <br></br>
        <h4 style={h4Style}>Bedrag Schatting</h4>
        <u>
          <li>Zaal: €{pickedDayPart === "Hele dag" ? locationPrice * 2 : locationPrice}</li>
          <li>Catering: €{mealPrice + drinkPrice + extraCateringPrice}</li>
          <li>
            Totaal: €
            {(pickedDayPart === "Hele dag" ? locationPrice * 2 : locationPrice) +
              mealPrice +
              drinkPrice +
              extraCateringPrice}
          </li>
        </u>
        <p style={pStyle}>Op basis van uw selectie wordt een offerte gemaakt</p>
      </div>
    </div>
  );
};

export default ReservationPageSummary;
