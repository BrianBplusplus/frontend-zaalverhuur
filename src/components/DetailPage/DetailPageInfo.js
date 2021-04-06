import React from "react";
import { useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import DetailPageImage from "./DetailPageImage";
import { descriptionData, imageData, pricesData } from "../assets/locationData";

const ReservationPageInfo = ({ state }) => {
  // ---------------- Variables ---------------- //
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1000 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

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
    flexWrap: "wrap-reverse",
  };

  const leftStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    position: "relative",
    width: isMobile ? "100%" : isTablet ? "100%" : "55%",
  };

  const rightStyle = {
    width: isMobile ? "100%" : isTablet ? "100%" : "41%",
    marginBottom: isMobile ? "20px" : isTablet ? "20px" : "0",
  };

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
    marginBottom: "30px",
  };

  const aStyle = {
    color: "#ed008c",
  };

  const priceStyle = {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "20px",
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
          Wil je{" "}
          <span style={spanStyle}>
            {apiData.name && apiData.name.slice(4)}{" "}
          </span>
          huren? Dat kan!
        </h2>
        <p style={pStyle}>{descriptionData[paramsArrayIndex]}</p>
        <p>
          Voor meer technische details verwijzen wij je naar onze{" "}
          <a
            style={aStyle}
            href="https://www.denieuwebibliotheek.nl/dam/Bestanden/technische-rider-de-nieuwe-zaal---versie-11-2019.pdf"
          >
            Technische Rider
          </a>
          <br></br>
          <br></br>
        </p>
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
