import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import LargeButton from "./assets/LargeButton";

import image from "../img/dnbkamer.jpg";

const RentalRooms = (props) => {
  // const isDesktop = useMediaQuery({ minWidth: 1224 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1223 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const divStyleDesktop = {
    width: "30%",
    minHeight: "300px",
    boxShadow: "0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2)",
    textAlign: "center",
    paddingBottom: "10px",
    margin: "10px 10px",
  };

  const divStyleTablet = {
    width: "45%",
    minHeight: "300px",
    boxShadow: "0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2)",
    textAlign: "center",
    paddingBottom: "10px",
    margin: "10px 10px",
  };

  const divStyleMobile = {
    width: "100%",
    maxWidth: "400px",
    minHeight: "300px",
    boxShadow: "0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2)",
    textAlign: "center",
    paddingBottom: "10px",
    margin: "10px 10px",
  };

  const imageStyle = {
    maxWidth: "100%",
    minHeight: "150px",
  };

  return (
    <div
      style={
        (isMobile && divStyleMobile) ||
        (isTablet && divStyleTablet) ||
        divStyleDesktop
      }
    >
      <img alt="roomimage" style={imageStyle} src={image} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>

      <Link to={`/${props.link}`}>
        <LargeButton text="Meer informatie" />
      </Link>
    </div>
  );
};

export default RentalRooms;
