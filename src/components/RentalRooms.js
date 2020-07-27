import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import LargeButton from "./assets/LargeButton";

import image from "../img/dnbkamer.jpg";

const RentalRooms = (props) => {
  const isDesktop = useMediaQuery({ minWidth: 1224 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1223 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const divStyleDesktop = {
    width: "280px",
    boxShadow: "0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2)",
    textAlign: "center",
    padding: "10px",
    margin: "10px 10px",
  };

  const divStyleTablet = {
    width: "40%",
    boxShadow: "0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2)",
    textAlign: "center",
    padding: "10px",
    margin: "10px 10px",
  };

  const divStyleMobile = {
    width: "70%",
    boxShadow: "0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2)",
    textAlign: "center",
    padding: "10px",
    margin: "10px 10px",
  };

  const imageStyle = {
    maxWidth: "100%",
  };

  return (
    <div
      style={
        (isDesktop && divStyleDesktop) ||
        (isTablet && divStyleTablet) ||
        (isMobile && divStyleMobile) ||
        divStyleDesktop
      }
    >
      <img alt="roomimage" style={imageStyle} src={image} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <ul>
        <li>{props.surfacearea}</li>
        <li>{props.capacity}</li>
        <li>{props.setups}</li>
      </ul>
      <Link to={`/${props.link}`}>
        <LargeButton text="Meer informatie" />
      </Link>
    </div>
  );
};

export default RentalRooms;
