import React from "react";
import { motion } from "framer-motion";

const TransparentButton = (props) => {
  // ---------------- States ------------------- //

  // ---------------- Styling ---------------- //
  const buttonStyle = {
    color: "#ed008c",
    backgroundColor: "#fff",
    border: "1px solid #dedede",
    borderRadius: "3px",
    margin: "0 10px 0 10px",
    padding: "20px",
    paddingTop: "10px",
    paddingBottom: "10px",

    font: "inherit",
    outline: "inherit",
    cursor: "pointer",
  };

  // ---------------- Render ------------------- //
  return (
    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={buttonStyle}>
      {props.text}
    </motion.button>
  );
};

export default TransparentButton;
