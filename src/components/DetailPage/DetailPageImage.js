import React, { useState } from "react";
import { motion } from "framer-motion";

const DetailPageImage = (props) => {
  // ---------------- States ------------------- //
  const [zoomedImage, setZoomedImage] = useState(false);

  // ---------------- Styling ------------------ //
  const imageStyle = {
    marginBottom: "20px",
    width: "100%",
    height: "200px",
    objectFit: "cover",
  };

  const zoomedImageStyle = {
    display: zoomedImage ? "block" : "none",
    position: "fixed",
    zIndex: "2",
    top: "75px",
    width: "1200px",
  };

  const zoomedImageBackground = {
    backgroundColor: "#fff",
    position: "fixed",
    padding: "0",
    margin: "0",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    zIndex: "1",
    display: zoomedImage ? "block" : "none",
    opacity: "0.9",
  };

  // ---------------- Render ------------------- //
  return (
    <div>
      <motion.img
        whileHover={{ opacity: 0.5 }}
        alt="LocationImage"
        style={imageStyle}
        src={props.image}
        onClick={() => setZoomedImage(true)}
      />
      <img style={zoomedImageStyle} src={props.image} onClick={() => setZoomedImage(false)} />
      <div style={zoomedImageBackground} onClick={() => setZoomedImage(false)}></div>
    </div>
  );
};

export default DetailPageImage;
