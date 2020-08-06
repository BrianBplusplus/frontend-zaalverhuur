import React, { useState } from "react";

const HamburgerIcon = () => {
  // ---------------- States ------------------- //
  const [open, setOpen] = useState(false);

  // ---------------- Functions ---------------- //
  const handleClick = () => {
    console.log("handleclick triggered");
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  // ---------------- Styling ---------------- //
  const divStyle = {
    width: "35px",
    height: "5px",
    backgroundColor: "#333",
    margin: "5px 0",
    transition: "0.4s",
  };

  // ---------------- Render ------------------- //
  return (
    <div onClick={() => handleClick()}>
      <div style={divStyle}></div>
      <div style={divStyle}></div>
      <div style={divStyle}></div>
    </div>
  );
};

export default HamburgerIcon;
