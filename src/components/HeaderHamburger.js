import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import logo from "../img/dnblogo.jpg";

const HeaderHamburger = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  const divHeight = open ? "170px" : "35px";

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

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
    listStyle: "none",
    fontSize: "20px",
  };

  const imageStyle = {
    width: "100%",
    maxWidth: "200px",
  };

  return (
    <div style={divStyle}>
      <div style={navStyle}>
        <Link to="/">
          <img style={imageStyle} alt="headerlogo" src={logo} />
        </Link>
        <button onClick={() => handleOpen()}>Hamburger</button>
      </div>

      <motion.ul
        style={ulStyle}
        animate={open ? "open" : "closed"}
        variants={variants}
      >
        <li>Vergaderruimtes</li>
        <br></br>
        <li>Inloggen</li>
        <br></br>
        <li>Terug naar Bibliotheek</li>
      </motion.ul>
    </div>
  );
};

export default HeaderHamburger;
