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

  const changeTopBar = {
    ...divStyle,
    transform: "rotate(-45deg) translate(-8px, 0px)",
  };

  const changeMiddleBar = {
    opacity: "0",
  };

  const changeBottomBar = {
    ...divStyle,
    transform: "rotate(45deg) translate(-8px, -0px)",
  };

  // ---------------- Render ------------------- //
  return (
    <div onClick={() => handleClick()}>
      <div style={open ? changeTopBar : divStyle}></div>
      <div style={open ? changeMiddleBar : divStyle}></div>
      <div style={open ? changeBottomBar : divStyle}></div>
    </div>
  );
};

export default HamburgerIcon;
