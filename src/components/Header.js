import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import logo from "../img/dnblogo.jpg";

const Header = () => {
  const divStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",

    padding: "20px",
    margin: "auto",
  };

  const navStyle = {
    display: "flex",
    listStyle: "none",
    margin: "0 10px",
    padding: "0",
  };

  const imageStyle = {
    // height: "100%",
  };

  const listStyle = {
    fontSize: "1.00833rem",
    margin: "0 10px",
  };

  const aStyle = {
    textDecoration: "none",
  };

  return (
    <div style={divStyle}>
      <Link to="/">
        <img style={imageStyle} alt="headerlogo" src={logo} />
      </Link>
      <ul style={navStyle}>
        <li style={listStyle}>
          <motion.a href="https://www.denieuwebibliotheek.nl/praktisch/lid-worden.html">
            Lid worden
          </motion.a>
        </li>
        <li style={listStyle}>
          <a
            style={aStyle}
            href="https://webcat.fbn-net.nl/cgi-bin/bx.pl?vestnr=8010"
          >
            Catalogus
          </a>
        </li>
        <li style={listStyle}>
          <a href="https://webcat.fbn-net.nl/cgi-bin/bx.pl?prt=INTERNET&taal=nl_NL&var=portal&event=private&vestnr=8010">
            Aanmelden Mijn menu
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
