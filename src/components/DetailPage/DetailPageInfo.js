import React from "react";
import { useParams } from "react-router-dom";

import DetailPageImage from "./DetailPageImage";
import { descriptionData, imageData, pricesData } from "../assets/locationData";

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
  };

  const leftStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    width: "55%",
    position: "relative",
  };

  const rightStyle = {};

  const h2Style = {
    fontSize: "30px",
    margin: "0",
  };

  const spanStyle = {
    color: "#ed008c",
  };

  const pStyle = {
    whiteSpace: "pre-wrap",
    fontSize: "16px",
  };

  const priceStyle = {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "30px",
    margin: "0 20px 20px 0",

    position: "absolute",
    bottom: "0",
    right: "0",
  };

  // ---------------- Render ------------------- //
  return (
    <div style={divStyle}>
      <div style={leftStyle}>
        <h2 style={h2Style}>
          Wil je <span style={spanStyle}>{apiData.name}</span> huren? Dat kan!
        </h2>
        <p style={pStyle}>{descriptionData[paramsArrayIndex]}</p>
        <p style={priceStyle}>
          Vanaf <strong>{pricesData[paramsArrayIndex]} euro</strong>
        </p>
      </div>
      <div style={rightStyle}>
        <DetailPageImage image={imageData[paramsArrayIndex]} />
      </div>
    </div>
  );
};

export default ReservationPageInfo;
