import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import zoomIcon from "../../img/zoomIcon.svg";

const DetailPageImage = (props) => {
  // ---------------- States ------------------- //
  const [zoomedImage, setZoomedImage] = useState(false);
  const [isHover, setIsHover] = useState(false);

  // ---------------- Variables ---------------- //
  const isMobile = useMediaQuery({ maxWidth: 767 });

  // ---------------- Styling ------------------ //
  const imageStyle = {
    marginBottom: "20px",
    width: "100%",
    height: "200px",
    objectFit: "cover",
    opacity: isHover ? "0.6" : "1",
    transition: "ease 0.2s",
  };

  const zoomedImageStyle = {
    display: zoomedImage ? "block" : "none",
    position: "fixed",
    zIndex: "2",
    width: "95%",
    maxWidth: "1300px",
    border: "1px solid #ed008c",

    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
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

  const svgStyle = {
    width: "5%",
    height: "auto",
    position: "absolute",
    opacity: isHover ? "1" : "0",
    transition: "ease 0.2s",
  };

  // ---------------- Render ------------------- //
  return (
    <div>
      {isMobile && <img alt="LocationImage" style={imageStyle} src={props.image} />}

      {!isMobile && (
        <motion.img
          alt="LocationImage"
          style={imageStyle}
          src={props.image}
          onClick={() => setZoomedImage(true)}
          onHoverStart={() => setIsHover(true)}
          onHoverEnd={() => setIsHover(false)}
        />
      )}
      <motion.img
        style={svgStyle}
        src={zoomIcon}
        onClick={() => setZoomedImage(true)}
        onHoverStart={() => setIsHover(true)}
        onHoverEnd={() => setIsHover(false)}
      />
      <AnimatePresence>
        {zoomedImage && (
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={zoomedImageStyle}
            src={props.image}
            onClick={() => setZoomedImage(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={zoomedImageBackground}
            onClick={() => setZoomedImage(false)}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DetailPageImage;
