import React from "react";

import DatePicker from "../assets/DatePicker";

const DetailPageInputForm = ({ state, setState }) => {
  // ---------------- Variables ---------------- //
  const { inputFormName, inputFormLastName, inputFormEmail } = state;

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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("state in inputform", state);
  };

  // ---------------- Styling ------------------ //
  const divStyle = {
    display: "flex",
    flexWrap: " wrap",
    justifyContent: "center",
  };

  const formStyle = {
    padding: "20px",
  };

  const pStyle = {};

  const h2Style = {
    color: "#ed008c",
    marginTop: "0",
  };

  // ---------------- Render ------------------- //
  return (
    <div>
      <h2 style={h2Style}>Informatie Aanvraag</h2>
      <p style={pStyle}>
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
          <input type="submit" value="Aanvragen"></input>
        </form>
      </div>
    </div>
  );
};

export default DetailPageInputForm;
