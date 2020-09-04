import React from "react";
import { useParams } from "react-router-dom";

import { descriptionData } from "../assets/locationData";

const ReservationPageInfo = ({ state }) => {
  // ---------------- Variables ---------------- //

  const {
    apiData,
    pickedDayPart,
    pickedSeatPlan,
    pickedMeal,
    pickedExtraCatering,
    pickedDrink,
  } = state;

  const params = useParams();
  const paramsArrayIndex =
    params.id === "1364"
      ? 0
      : params.id === "1366"
      ? 1
      : params.id === "1367"
      ? 2
      : params.id === "1368"
      ? 3
      : params.id === "1369"
      ? 4
      : params.id === "1370"
      ? 5
      : 6;

  // ---------------- Styling ------------------ //
  const divStyle = {
    display: "flex",
    justifyContent: "space-between",
  };

  const leftStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    width: "64%",
  };

  const rightStyle = {
    ...leftStyle,
    width: "25%",
  };

  const h2Style = {
    fontSize: "20px",
    margin: "0",
    color: "#ed008c",
  };

  const pStyle = {
    fontSize: "14px",
    textAlign: "justify",
  };

  const ulStyle = {
    listStyle: "none",
    padding: "5px",
    margin: "0 auto",
    textAlign: "center",
  };

  const liStyle = {
    backgroundColor: "#fff",
    border: "1px solid #ed008c",
    borderRadius: "3px",
    margin: "5px 0 5px 0",
    padding: "5px",
    fontSize: "14px",
  };

  // ---------------- Render ------------------- //
  return (
    <div style={divStyle}>
      <div style={leftStyle}>
        <h2 style={h2Style}>{apiData.name}</h2>
        <p style={pStyle}>{descriptionData[paramsArrayIndex]}</p>
      </div>
      <div style={rightStyle}>
        <h2 style={h2Style}>Gekozen opties</h2>
        <ul style={ulStyle}>
          {pickedDayPart && <li style={liStyle}>{pickedDayPart}</li>}
          {pickedSeatPlan && <li style={liStyle}>{pickedSeatPlan}</li>}
          {pickedMeal && <li style={liStyle}>{pickedMeal}</li>}
          {pickedDrink && <li style={liStyle}>{pickedDrink}</li>}
          {pickedExtraCatering && <li style={liStyle}>{pickedExtraCatering}</li>}
        </ul>
      </div>
    </div>
  );
};

export default ReservationPageInfo;
