import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import LargeButton from "./assets/LargeButton";

const LandingPageCard = (props) => {
  // ---------------- Variables ---------------- //
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1223 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  // ---------------- Styling ------------------ //
  const divStyle = {
    width: isMobile ? "100%" : isTablet ? "45%" : "30%",
    maxWidth: isMobile ? "400px" : isTablet ? "400px" : "none",
    minHeight: "300px",
    boxShadow: "0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2)",
    textAlign: "center",
    paddingBottom: "10px",
    margin: "15px 15px",
    borderRadius: "3px",
  };

  const imageStyle = {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    borderTopLeftRadius: "3px",
    borderTopRightRadius: "3px",
  };

  // ---------------- Render ------------------- //
  return (
    <div style={divStyle}>
      <img alt="roomimage" style={imageStyle} src={props.image} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>

      <Link to={`/${props.link}`}>
        <LargeButton text="Bekijk Zaal" />
      </Link>
    </div>
  );
};

export default LandingPageCard;
