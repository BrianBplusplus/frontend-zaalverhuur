import React, { useState } from "react";

const divStyle = {
  width: "35px",
  height: "5px",
  backgroundColor: "#333",
  margin: "5px 0",
  transition: "0.4s",
};

const HamburgerIcon = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    console.log("handleclick triggered");
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <div onClick={() => handleClick()}>
      <div style={divStyle}></div>
      <div style={divStyle}></div>
      <div style={divStyle}></div>
    </div>
  );
};

export default HamburgerIcon;
