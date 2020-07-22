import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import image from "../img/dnbkamer.jpg";

const divStyle = {
  width: "230px",
  boxShadow: "0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2)",
  textAlign: "center",
  padding: "10px",
  margin: "10px 10px",
};

const imageStyle = {
  maxWidth: "100%",
};

const buttonStyle = {
  color: "#fff",
  backgroundColor: "#ed008c",
  border: "none",
  padding: "20px",
};

const RentalRooms = (props) => {
  return (
    <div style={divStyle}>
      <img alt="roomimage" style={imageStyle} src={image} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <ul>
        <li>{props.surfacearea}</li>
        <li>{props.capacity}</li>
        <li>{props.setups}</li>
      </ul>
      <Link to={`/${props.link}`}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={buttonStyle}
        >
          Meer informatie
        </motion.button>
      </Link>
    </div>
  );
};

export default RentalRooms;
