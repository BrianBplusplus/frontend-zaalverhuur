import React from "react";

const ReservationPageSummary = (props) => {
  // ---------------- Variables ---------------- //
  const { stateProps } = props;

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
          {stateProps.pickedDayPart && <li>Dagdeel</li>}
          {stateProps.pickedDayPart && <li style={liStyle}>{stateProps.pickedDayPart}</li>}
          {stateProps.pickedSeatPlan && <li>Opstelling</li>}
          {stateProps.pickedSeatPlan && <li style={liStyle}>{stateProps.pickedSeatPlan}</li>}
          {stateProps.pickedMeal && <li>Lunch</li>}
          {stateProps.pickedMeal && <li style={liStyle}>{stateProps.pickedMeal}</li>}
          {(stateProps.pickedExtraCatering && <li>Extra's</li>) ||
            (stateProps.pickedDrink && <li>Extra's</li>)}
          {stateProps.pickedDrink && <li style={liStyle}>{stateProps.pickedDrink}</li>}
          {stateProps.pickedExtraCatering && (
            <li style={liStyle}>{stateProps.pickedExtraCatering}</li>
          )}
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
          <li>
            Zaal: €
            {stateProps.pickedDayPart === "Hele dag"
              ? stateProps.locationPrice * 2
              : stateProps.locationPrice}
          </li>
          <li>
            Catering: €
            {stateProps.mealPrice + stateProps.drinkPrice + stateProps.extraCateringPrice}
          </li>
          <li>
            Totaal: €
            {(stateProps.pickedDayPart === "Hele dag"
              ? stateProps.locationPrice * 2
              : stateProps.locationPrice) +
              stateProps.mealPrice +
              stateProps.drinkPrice +
              stateProps.extraCateringPrice}
          </li>
        </u>
        <p style={pStyle}>Op basis van uw selectie wordt een offerte gemaakt</p>
      </div>
    </div>
  );
};

export default ReservationPageSummary;
