import React from "react";
import { motion } from "framer-motion";

const LargeButton = (props) => {
  // ---------------- Styling ---------------- //
  const buttonStyle = {
    color: "#fff",
    backgroundColor: "#ed008c",
    border: "none",
    borderRadius: "3px",
    padding: "20px",
    paddingTop: "10px",
    paddingBottom: "10px",

    font: "inherit",
    outline: "inherit",
    cursor: "pointer",
  };

  // ---------------- Render ------------------- //
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={buttonStyle}
    >
      {props.text}
    </motion.button>
  );
};

export default LargeButton;
