import React from "react";
import { useParams } from "react-router-dom";

import { descriptionData } from "./assets/locationData";

const ReservationPageInfo = ({ state }) => {
  // ---------------- Variables ---------------- //
  const { apiData } = state;
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
    width: "65%",
  };

  const rightStyle = {
    ...leftStyle,
    padding: "0",
    width: "29%",
  };

  const h2Style = {
    margin: "0",
    color: "#ed008c",
  };

  const pStyle = {
    fontSize: "14px",
    textAlign: "justify",
  };

  // ---------------- Render ------------------- //
  return (
    <div style={divStyle}>
      <div style={leftStyle}>
        <h2 style={h2Style}>{apiData.name}</h2>
        <p style={pStyle}>{descriptionData[paramsArrayIndex]}</p>
      </div>
      <div style={rightStyle}>opsomming data</div>
    </div>
  );
};

export default ReservationPageInfo;
