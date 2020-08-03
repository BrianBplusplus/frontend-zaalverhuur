import React from "react";

import image from "../img/hetNieuwsCafeCropped.jpg";

const HeaderImage = () => {
  const imageStyle = {
    maxWidth: "1300px",
    width: "100%",
    maxHeight: "200px",
    marginBottom: "15px",
    objectFit: "cover",
  };
  return <img style={imageStyle} src={image} />;
};

export default HeaderImage;
