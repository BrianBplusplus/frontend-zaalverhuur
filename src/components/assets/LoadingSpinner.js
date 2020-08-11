import React from "react";
import { motion } from "framer-motion";

const LoadingSpinner = () => {
  // ---------------- Styling ---------------- //
  const divStyle = {
    position: "absolute",
    width: "3rem",
    height: "3rem",
    boxSizing: "border-box",
    margin: "0 auto",
  };

  const circleStyle = {
    display: "block",
    width: "3rem",
    height: "3rem",
    border: "0.5rem solid #e9e9e9",
    borderTop: "0.5rem solid #ed008c",
    borderRadius: "50%",
    position: "absolute",
    boxSizing: "border-box",
    top: 0,
    left: 0,
  };

  const spinTransition = {
    loop: Infinity,
    ease: "linear",
    duration: 1,
  };

  // ---------------- Render ------------------- //
  return (
    <div style={divStyle}>
      <motion.span
        style={circleStyle}
        animate={{ rotate: 360 }}
        transition={spinTransition}
      />
    </div>
  );
};

export default LoadingSpinner;
