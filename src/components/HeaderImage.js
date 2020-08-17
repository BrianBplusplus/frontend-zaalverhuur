import React from "react";

import image from "../img/HeaderImage.webp";

const HeaderImage = () => {
  // ---------------- Styling ------------------ //
  const imageStyle = {
    maxWidth: "1300px",
    width: "100%",
    maxHeight: "200px",
    marginBottom: "15px",
    objectFit: "cover",
  };

  // ---------------- Render ------------------- //
  return <img alt="headerimage" style={imageStyle} src={image} />;
};

export default HeaderImage;
