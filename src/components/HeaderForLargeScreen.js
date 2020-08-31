import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import NavButton from "./assets/NavButton";
import logo from "../img/dnblogo.jpg";

const HeaderForLargeScreen = () => {
  // ---------------- Styling ------------------ //
  const divStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",

    padding: "20px",
    paddingRight: "0",
    margin: "auto",
  };

  const ulStyle = {
    display: "flex",
    listStyle: "none",
    margin: "0 10px",
    marginRight: "0",
    padding: "0",
    color: "#000",
  };

  // ---------------- Render ------------------- //
  return (
    <div style={divStyle}>
      <Link to="/">
        <img alt="headerlogo" src={logo} />
      </Link>
      <ul style={ulStyle}>
        <li>
          <Link to="/">
            <NavButton text="terug naar overzicht" />
          </Link>
        </li>
        <li>
          <a href="https://webcat.fbn-net.nl/cgi-bin/bx.pl?vestnr=8010">
            <NavButton text="Catalogus" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HeaderForLargeScreen;
