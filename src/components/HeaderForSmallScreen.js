import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import HamburgerIcon from "./assets/HamburgerIcon";
import logo from "../img/dnblogo.jpg";

const HeaderForSmallScreen = () => {
  // ---------------- States ------------------- //
  const [open, setOpen] = useState(false);

  // ---------------- Variables ---------------- //
  const variants = {
    open: { opacity: 1, x: "0" },
    closed: { opacity: 0, x: "-100%" },
  };

  // ---------------- Styling ------------------ //
  const divStyle = {
    padding: "20px",
    height: open ? "170px" : "35px",
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

  const liStyle = {
    marginBottom: "20px",
  };

  const linkStyle = {
    maxWidth: "80%",
  };

  const imageStyle = {
    width: "100%",
  };

  const aStyle = {
    textDecoration: "none",
    color: "#ed008c",
  };

  // ---------------- Render ------------------- //
  return (
    <div style={divStyle}>
      <div style={navStyle}>
        <Link style={linkStyle} to="/">
          <img style={imageStyle} alt="headerlogo" src={logo} />
        </Link>
        <div onClick={() => setOpen(!open)}>
          <HamburgerIcon />
        </div>
      </div>

      <motion.ul
        style={ulStyle}
        animate={open ? "open" : "closed"}
        initial={false}
        variants={variants}
      >
        <li style={liStyle}>
          <Link style={aStyle} to="/">
            Terug naar overzicht
          </Link>
        </li>
        <li>
          <a style={aStyle} href="https://webcat.fbn-net.nl/cgi-bin/bx.pl?vestnr=8010">
            Catalogus
          </a>
        </li>
      </motion.ul>
    </div>
  );
};

export default HeaderForSmallScreen;
