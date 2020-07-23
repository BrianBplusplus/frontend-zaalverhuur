import React from "react";
import logo from "../img/dnblogo.jpg";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const divStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",

    width: "80%",
    padding: "15px",
    margin: "auto",
  };

  const navStyle = {
    display: "flex",
    listStyle: "none",
    margin: "0 10px",
    padding: "0",
  };

  const imageStyle = {
    height: "100%",
  };

  const listStyle = {
    margin: "0 10px",
  };

  return (
    <div style={divStyle}>
      {isDesktopOrLaptop && (
        <img style={imageStyle} alt="headerlogo" src={logo} />
      )}

      <ul style={navStyle}>
        <li style={listStyle}>Vergaderruimtes</li>
        <li style={listStyle}>inloggen</li>
        <li style={listStyle}>Terug naar Bibliotheek</li>
      </ul>
    </div>
  );
};

export default Header;
