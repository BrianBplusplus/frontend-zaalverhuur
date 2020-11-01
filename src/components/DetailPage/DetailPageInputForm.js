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

  const EveningPriceCalculator = additionalInformationDayPart === "Avond" ? locationPriceNight : 0

const CateringPriceCalculator = additionalInformationCatering === "Lunch" ? 10 : additionalInformationCatering === "Drankjes" ? 20 : additionalInformationCatering === "Borrelhapjes" ? 30 : 0

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
    let returner = false
    let date = null
    let daypart = null
    let catering = null
    let persons = null
    
    if(pickedDate == false ) {
      returner = true
      date = false
    } 
    if(additionalInformationDayPart == false ) {
      returner = true;
      daypart = false
    }
    if(additionalInformationCatering == false) {
      returner = true
      catering = false
    }
    if(additionalInformationAmountOfPersons == false) {
      returner = true
      persons = false
    }
    if (returner) {
      returner = false
      setState({...state, 
        validatorDate: date,
        validatorDayPart: daypart,
        validatorCatering: catering,
        validatorAmountOfPersons: persons
      })
      return
    } 

    setState({ ...state, formSubmitted: true });

    try { 
      axios.post(`https://zalenverhuur.denieuwebibliotheek.nl/action/sendemail` , { ...state });
    } catch(error) {
      console.error(error)
    }
    
  };

  // ---------------- Styling ------------------ //
  const divStyle = {
    display: "flex",
    flexWrap: " wrap",
    justifyContent: "space-around",
  };

  const formStyle = {
    padding: "20px",
  };

  const h2Style = {
    color: "#ed008c",
    marginTop: "0",
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
        <p>
            Zaal: {locationPrice}
            <br></br>
            Catering: {CateringPriceCalculator} x {additionalInformationAmountOfPersons}
            <br></br>
            Avond tarief: {additionalInformationDayPart === "Avond" ? locationPriceNight : "Geen"}
            <br></br>
            Totaal: {locationPrice + EveningPriceCalculator + (CateringPriceCalculator * additionalInformationAmountOfPersons)}
          </p>

      </div>
    </div>
  );
};

export default DetailPageInputForm;
