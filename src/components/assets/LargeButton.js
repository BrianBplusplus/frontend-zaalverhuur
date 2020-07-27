import React from "react";
import { motion } from "framer-motion";

const LargeButton = (props) => {
  const buttonStyle = {
    color: "#fff",
    backgroundColor: "#ed008c",
    border: "none",
    padding: "20px",
  };

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
