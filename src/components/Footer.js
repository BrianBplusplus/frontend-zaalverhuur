import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  // ---------------- Variables ---------------- //

  const footerContent = {
    footer1: ["Verlengen", "Reserveren", "Regels PC gebruik", "Printen", "Veelgestelde vragen"],
    footer1Links: ["https://webcat.fbn-net.nl/cgi-bin/bx.pl?dcat=0;titcode=;medium=;rubplus=;extsdef=;tref=;event=invent;sid=7589f532-4985-4821-afa1-c58715165517;vestnr=0060;prt=INTERNET;var=portal", "https://webcat.fbn-net.nl/cgi-bin/bx.pl?dcat=0;from=private;event=resinv;sid=e7f5bae0-15ef-4a8e-962b-ac82074ca009;vestnr=0060;prt=INTERNET;fmt=xml;var=portal", "https://www.denieuwebibliotheek.nl/praktisch/regels-pc-gebruik.html", "https://www.denieuwebibliotheek.nl/praktisch/printen.html", "https://www.denieuwebibliotheek.nl/praktisch/veelgestelde-vragen.html"],

    footer2: ["Facebook", "Instagram", "Twitter", "Youtube", "Nieuwsbrief"],
    footer2Links: ["https://www.facebook.com/denieuwebibliotheek/", "https://www.instagram.com/denieuwebibliotheek/", "https://twitter.com/nieuwebieb", "https://www.youtube.com/channel/UC0F8VD3b70rIh9XdtbTwyag", "https://www.denieuwebibliotheek.nl/actueel/nieuwsbrief.html"],

    footer3: ["ZEPservice", "Seats2meet", "Leeskringen", "Europe-direct", "Plusbibliotheek"],
    footer3Links: ["https://www.denieuwebibliotheek.nl/informatiepunten/zepservice.html", "https://www.denieuwebibliotheek.nl/informatiepunten/seats2meet.html", "https://www.denieuwebibliotheek.nl/informatiepunten/leeskringen.html", "https://www.denieuwebibliotheek.nl/informatiepunten/europe-direct.html", "https://www.denieuwebibliotheek.nl/collectie/plusbibliotheek.html"],

    footer4: ["Over DeNieuweBibliotheek", "Werken bij de bibliotheek", "Contact", "Adressen", "Rondleidingen", "Jaarverslagen", "Privacy"],
    footer4Links: ["https://www.denieuwebibliotheek.nl/organisatie/over-de-nieuwe-bibliotheek.html", "https://www.denieuwebibliotheek.nl/organisatie/werken-bij-de-bibliotheek.html", "https://www.denieuwebibliotheek.nl/organisatie/contact.html", "https://www.denieuwebibliotheek.nl/vestigingen-en-openingstijden/detail.html", "https://www.denieuwebibliotheek.nl/organisatie/rondleidingen.html", "https://www.denieuwebibliotheek.nl/organisatie/jaarverslagen.html", "https://www.denieuwebibliotheek.nl/organisatie/privacy.html"]
  }

  // ---------------- Styling ---------------- //
  const divStyle = {
    fontFamily: "Open Sans, sans-serif",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    color: "#fff",
    backgroundColor: "#000",
    padding: "20px 20px 10px 20px",
    margin: " 0 auto 0",
  };

  const ulStyle = {
    listStyle: "none",
    padding: "0",
  };

  const aStyle = {
    color: "#fff",
    textDecoration: "none"
  }

  const h2Style = {
    fontSize: "18px",
    textTransform: "uppercase",
  };


  // ---------------- Render ---------------- //
  return (
    <div style={divStyle}>
      <div>
        <h2 style={h2Style}>Kunnen wij je helpen?</h2>
        <ul style={ulStyle}>
        {footerContent.footer1.map((title, index) => {
          return <li key={index} ><a style={aStyle} href={footerContent.footer1Links[index]}>{title}</a></li>
        })}
        </ul>
      </div>
      <div>
        <h2 style={h2Style}>Blijf op de hoogte!</h2>
        <ul style={ulStyle}>
        {footerContent.footer2.map((title, index) => {
          return <li key={index} ><a style={aStyle} href={footerContent.footer2Links[index]}>{title}</a></li>
        })}
        </ul>
      </div>
      <div>
        <h2 style={h2Style}>Informatiepunten</h2>
        <ul style={ulStyle}>
        {footerContent.footer3.map((title, index) => {
          return <li key={index} ><a style={aStyle} href={footerContent.footer3Links[index]}>{title}</a></li>
        })}
        </ul>
      </div>
      <div>
        <h2 style={h2Style}>Denieuwebibliotheek</h2>
        <ul style={ulStyle}>
        {footerContent.footer4.map((title, index) => {
          return <li key={index} ><a style={aStyle} href={footerContent.footer4Links[index]}>{title}</a></li>
        })}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
