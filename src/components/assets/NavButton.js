import React from "react";
import { motion } from "framer-motion";

const NavButton = (props) => {
  // ---------------- Styling ---------------- //
  const buttonStyle = {
    color: "#ed008c",
    backgroundColor: "#fff",
    border: "1px solid #dedede",
    borderRadius: "3px",
    margin: "5px 0px 5px 10px",
    padding: "15px",
    paddingTop: "10px",
    paddingBottom: "10px",

    font: "inherit",
    outline: "inherit",
    cursor: "pointer",
  };

  // ---------------- Render ------------------- //
  return (
    <motion.button
      transition={{ duration: 0.1 }}
      whileHover={{ color: "#fff", backgroundColor: "#ed008c" }}
      style={buttonStyle}
    >
      {props.text}
    </motion.button>
  );
};

export default NavButton;
