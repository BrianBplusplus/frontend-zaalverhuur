import React from "react";
import { motion } from "framer-motion";

const SelectionCircle = ({ isSelected, onClick }) => {
  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 30,
  };

  const liStyle = {
    display: "block",
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    margin: "15px",
    position: "relative",
    cursor: "pointer",
    flexShrink: "0",
    backgroundColor: "#ed008c",
  };

  const outlineStyle = {
    position: "absolute",
    top: "-10px",
    left: "-10px",
    right: "-10px",
    bottom: "-10px",
    border: "5px solid #fff",
    borderRadius: "50%",
  };

  return (
    <li style={liStyle} onClick={onClick}>
      {isSelected && (
        <motion.div
          style={outlineStyle}
          layoutId="outline"
          initial={false}
          animate={{ borderColor: "#ed008c" }}
          transition={spring}
        />
      )}
    </li>
  );
};
export default SelectionCircle;
