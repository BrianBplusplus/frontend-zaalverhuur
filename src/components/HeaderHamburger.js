import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import HamburgerIcon from "./assets/HamburgerIcon";
import logo from "../img/dnblogo.jpg";

const HeaderHamburger = () => {
  // ---------------- States ------------------- //
  const [open, setOpen] = useState(false);

  // ---------------- Variables ---------------- //
  const variants = {
    open: { opacity: 1, x: "0" },
    closed: { opacity: 0, x: "-100%" },
  };
  const divHeight = open ? "170px" : "35px";

  // ---------------- Functions ---------------- //
  const handleOpen = () => {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  // ---------------- Styling ------------------ //
  const divStyle = {
    padding: "20px",
    height: divHeight,
    transition: "ease 0.5s",
  };

  const navStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  };

  const ulStyle = {
    padding: "0",
    textAlign: "center",
    listStyle: "none",
    fontSize: "1.5em",
    fontFamily: "Open Sans, sans-serif",
    color: "#ed008c",
  };

  const linkStyle = {
    maxWidth: "80%",
  };

  const imageStyle = {
    width: "100%",
  };

  // ---------------- Render ------------------- //
  return (
    <div style={divStyle}>
      <div style={navStyle}>
        <Link style={linkStyle} to="/">
          <img style={imageStyle} alt="headerlogo" src={logo} />
        </Link>
        <div onClick={() => handleOpen()}>
          <HamburgerIcon />
        </div>
      </div>

      <motion.ul
        style={ulStyle}
        animate={open ? "open" : "closed"}
        initial={false}
        variants={variants}
      >
        <li>
          <a>Vergaderruimtes</a>
        </li>
        <li>
          <a>Inloggen</a>
        </li>
        <li>
          <a>Terug naar Bibliotheek</a>
        </li>
      </motion.ul>
    </div>
  );
};

export default HeaderHamburger;
