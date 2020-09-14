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
  const divStyle = {};

  const h2Style = {
    color: "#ed008c",
    marginTop: "0",
  };

  // ---------------- Render ------------------- //
  return (
    <div style={divStyle}>
      <h2 style={h2Style}>Aanvraagformulier</h2>
      <DatePicker state={state} setState={setState} />

      <form onSubmit={handleSubmit}>
        <label>Voornaam: </label>
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
        <label>Achternaam: </label>
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
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default DetailPageInputForm;
