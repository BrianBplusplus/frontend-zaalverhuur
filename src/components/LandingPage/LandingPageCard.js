import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

const LandingPageCard = (props) => {
  // ---------------- States ------------------- //
  const [isHover, setIsHover] = useState(false);
  // ---------------- Variables ---------------- //
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1223 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  // ---------------- Styling ------------------ //
  const divStyle = {
    width: isMobile ? "90%" : isTablet ? "45%" : "32%",
    maxWidth: isMobile ? "400px" : isTablet ? "400px" : "none",
    minHeight: "300px",
    textAlign: "center",
    margin: "0 0px 15px 0",
    borderRadius: "3px",
    textDecoration: "none",
  };

  const h2Style = {
    fontSize: "20px",
    margin: "0",
    padding: "10px",
    color: isHover ? "#fff" : "#ed008c",
    backgroundColor: isHover ? "#ed008c" : "#fff",
  };

  const imageStyle = {
    width: "100%",
    height: "250px",
    objectFit: "cover",
  };

  // ---------------- Render ------------------- //
  return (
    <Link style={divStyle} to={`/zalen/${props.link}`}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        onHoverStart={(event) => {
          setIsHover(true);
        }}
        onHoverEnd={(event) => {
          setIsHover(false);
        }}
      >
        <h2 style={h2Style}>{props.title.slice(4)}</h2>

        <img alt="roomimage" style={imageStyle} src={props.image} />
      </motion.div>
    </Link>
  );
};

export default LandingPageCard;
