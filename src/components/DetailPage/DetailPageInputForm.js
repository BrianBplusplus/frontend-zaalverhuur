import React from "react";
import axios from "axios";

import DatePicker from "../assets/DatePicker";

const DetailPageInputForm = ({ state, setState }) => {
  // ---------------- Variables ---------------- //
  const {
    pickedDate,

    inputFormName,
    inputFormLastName,
    inputFormEmail,
    inputFormCompany,

    locationPrice,
    locationPriceNight,

    additionalInformationDayPart,
    additionalInformationCatering,
    additionalInformationAmountOfPersons,
  } = state;

  const LocationPriceCalculator =
    additionalInformationDayPart === "Hele Dag"
      ? locationPrice * 2
      : locationPrice;

  const EveningPriceCalculator =
    additionalInformationDayPart === "Avond" ? locationPriceNight : 0;

  const CateringPriceCalculator =
    additionalInformationCatering === "Lunch"
      ? 10
      : additionalInformationCatering === "Drankjes"
      ? 3
      : additionalInformationCatering === "Borrelhapjes"
      ? 3
      : 0;

  // ---------------- Functions ---------------- //
  const handleName = (name) => {
    setState({ ...state, inputFormName: name });
  };

  const handleLastName = (lastName) => {
    setState({ ...state, inputFormLastName: lastName });
  };

  const handleEmail = (email) => {
    setState({ ...state, inputFormEmail: email });
  };

  const handleCompany = (company) => {
    setState({ ...state, inputFormCompany: company });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let returner = false;
    let date = null;
    let daypart = null;
    let catering = null;
    let persons = null;

    if (pickedDate == false) {
      returner = true;
      date = false;
    }
    if (additionalInformationDayPart == false) {
      returner = true;
      daypart = false;
    }
    if (additionalInformationCatering == false) {
      returner = true;
      catering = false;
    }
    if (additionalInformationAmountOfPersons == false) {
      returner = true;
      persons = false;
    }
    if (returner) {
      returner = false;
      setState({
        ...state,
        validatorDate: date,
        validatorDayPart: daypart,
        validatorCatering: catering,
        validatorAmountOfPersons: persons,
      });
      return;
    }

    setState({ ...state, formSubmitted: true });

    try {
      axios.post(
        `https://zalenverhuur.denieuwebibliotheek.nl/action/sendemail`,
        { ...state }
      );
    } catch (error) {
      console.error(error);
    }
  };

  // ---------------- Styling ------------------ //
  const divStyle = {
    display: "flex",
    flexWrap: " wrap",
    justifyContent: "space-around",
  };

  const dividerLineStyle = {
    color: "#C0C0C0",
  };

  const pStyle = {
    color: "#696969",
    fontSize: "13px",
    textAlign: "right",
    width: "100%",
  };

  const formStyle = {
    padding: "20px",
  };

  const h2Style = {
    color: "#ed008c",
    marginTop: "0",
  };

  const ulStyle = {
    width: "100%",
    listStyle: "none",
    display: "flex",
    justifyContent: "space-around",
    textAlign: "center",
  };

  const buttonStyle = {
    color: "#fff",
    backgroundColor: "#ed008c",
    border: "none",
    borderRadius: "3px",
    marginTop: "20px",
    padding: "20px",
    paddingTop: "10px",
    paddingBottom: "10px",

    font: "inherit",
    outline: "inherit",
    cursor: "pointer",
  };

  // ---------------- Render ------------------- //
  return (
    <div>
      <h2 style={h2Style}>Reserveren ?</h2>
      <p>
        Wil je meer weten over het huren van een zaal in de nieuwe bibliotheek?
        Of wil je de mogelijkheden weten om hier te trouwen? Hier een fotoshoot
        organiseren of een presentatie? Vul dan onderstaand formulier in. Wij
        nemen zo snel mogelijk contact met je op!
      </p>
      <div style={divStyle}>
        <DatePicker state={state} setState={setState} />
        <form style={formStyle} onSubmit={handleSubmit}>
          <label>Voornaam </label>
          <br></br>
          <input
            type="text"
            id="fname"
            name="fname"
            value={inputFormName}
            onChange={(event) => handleName(event.target.value)}
            required
          ></input>
          <br></br>
          <label>Achternaam </label>
          <br></br>
          <input
            type="text"
            id="lname"
            name="lname"
            value={inputFormLastName}
            onChange={(event) => handleLastName(event.target.value)}
            required
          ></input>
          <br></br>
          <label>Email</label>
          <br></br>
          <input
            type="email"
            id="email"
            name="email"
            value={inputFormEmail}
            onChange={(event) => handleEmail(event.target.value)}
            required
          ></input>
          <br></br>

          <label>Bedrijf</label>
          <br></br>
          <input
            type="text"
            id="cname"
            name="cname"
            value={inputFormCompany}
            onChange={(event) => handleCompany(event.target.value)}
          ></input>
          <br></br>
          <input
            style={buttonStyle}
            type="submit"
            value="Aanvragen"
            onSubmit={() => handleSubmit()}
          ></input>
        </form>

        <div style={dividerLineStyle}>
          ---------------------------------------------------
        </div>
        <ul style={ulStyle}>
          <li>
            Zaal <br></br> € {locationPrice}
          </li>
          <li>
            Catering <br></br>
            {additionalInformationAmountOfPersons} x € {CateringPriceCalculator}
          </li>
          <li>
            Avond tarief <br></br>€{" "}
            {additionalInformationDayPart === "Avond"
              ? locationPriceNight
              : "Geen"}
          </li>
          <li>
            Totaal <br></br>€{" "}
            {LocationPriceCalculator +
              EveningPriceCalculator +
              CateringPriceCalculator * additionalInformationAmountOfPersons}
          </li>
        </ul>
        <p style={pStyle}>
          * Deze prijs is een schatting op basis van uw selectie
        </p>
      </div>
    </div>
  );
};

export default DetailPageInputForm;
