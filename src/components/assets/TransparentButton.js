import React, { useState } from "react";
import { motion } from "framer-motion";

const TransparentButton = (props) => {
  // ---------------- States ------------------- //
  const [isSelected, setIsSelected] = useState(false);

  // ---------------- Styling ---------------- //
  const buttonStyle = {
    color: "#ed008c",
    backgroundColor: "#fff",
    border: props.isSelected ? "1px solid #ed008c " : "1px solid #dedede",
    borderRadius: "3px",
    margin: "5px 5px 5px 5px",
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
      //whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={buttonStyle}
    >
      {props.text}
    </motion.button>
  );
};

export default TransparentButton;
