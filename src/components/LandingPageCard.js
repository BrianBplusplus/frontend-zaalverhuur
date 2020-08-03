import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import LargeButton from "./assets/LargeButton";
import image1 from "../img/dnbkamer.jpg";
import image2 from "../img/dnbkamer2.jpg";
import image3 from "../img/hetNieuweLokaal.jpeg";

const LandingPageCard = (props) => {
  const [isSelected, setIsSelected] = useState(false);

  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1223 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const divStyle = {
    margin: "20px",
    backgroundImage: `url("${image2}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "15px",
    boxShadow: "grey 2px 2px 2px",

    color: "#fff",
    textAlign: "center",

    maxWidth: "1000px",
    marginTop: `${isSelected ? "-200px" : "0px"}`,
    width: `${isSelected ? "50%" : "30%"}`,
    height: `${isSelected ? "80vh" : "400px"}`,
    position: `${isSelected ? "fixed" : "relative"}`,
    zIndex: `${isSelected ? "2" : "0"}`,
  };

  const backgroundStyle = {
    width: "100%",
    height: "20%",
    backgroundColor: "rgb(0 0 0 / 0.5)", //"#ed008c",
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
    position: "absolute",

    zIndex: "-1",
  };

  const handleIsSelected = () => {
    console.log("handleIsSelected has been pressed");
    if (isSelected === true) {
      setIsSelected(false);
      console.log("closed ", props.title);
    } else {
      setIsSelected(true);
      console.log("opened ", props.title);
    }
  };

  return (
    <motion.div
      layout
      transition={{ stiffness: 10, damping: 2 }}
      initial={false}
      onClick={() => handleIsSelected()}
      style={divStyle}
    >
      <div style={backgroundStyle}></div>
      <h2>{props.title}</h2>
      {isSelected && <p>{props.description}</p>}
      <Link to={`/${props.link}`}>
        {isSelected && <LargeButton text="Meer informatie" />}
      </Link>
    </motion.div>
  );
};

export default LandingPageCard;
