import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import image from "../img/dnbkamer.jpg";

const RentalRooms = (props) => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1223 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const divStyleDesktop = {
    width: "290px",
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
    width: "80%",
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

  return (
    <div style={divStyleDesktop}>
      {isDesktopOrLaptop && <p>isDesktopOrLaptop</p>}
      {isTablet && <p>isTablet</p>}
      {isMobile && <p>isMobile</p>}
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
