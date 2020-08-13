import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

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
    //  paddingBottom: "10px",
    margin: "15px 15px",
    borderRadius: "3px",
    textDecoration: "none",
    // backgroundColor: "#000",
  };

  const h2Style = {
    fontSize: "21px",
    margin: "0",
    padding: "10px",
    color: "#fff",
    backgroundColor: "#ed008c",
  };

  const imageStyle = {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    // borderTopLeftRadius: "3px",
    // borderTopRightRadius: "3px",
  };

  // ---------------- Render ------------------- //
  return (
    <Link style={divStyle} to={`/${props.link}`}>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <h2 style={h2Style}>{props.title}</h2>

        <img alt="roomimage" style={imageStyle} src={props.image} />
      </motion.div>
    </Link>
  );
};

export default LandingPageCard;
