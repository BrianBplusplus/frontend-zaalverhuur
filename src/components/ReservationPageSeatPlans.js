import React from "react";

import TransparentButton from "./assets/TransparentButton";

const ReservationPageSeatPlans = ({ state, setState }) => {
  // ---------------- Variables ---------------- //
  const { apiData } = state;
  // ---------------- Functions ---------------- //
  const handleClickPickedSeatPlan = (seatPlanChoice) => {
    setState({ ...state, pickedSeatPlan: seatPlanChoice });
  };

  // ---------------- Styling ------------------ //
  const divStyle = {
    width: "50%",
    margin: "0 5px 0 5px",
  };

  const ulStyle = {
    display: "flex",
    flexWrap: "wrap",
    height: "100px",
    margin: "0",
    border: "1px solid #ed008c",
    borderRadius: "3px",
    padding: "10px",
    listStyle: "none",
  };

  const h4Style = {
    textAlign: "center",
    margin: "0",
  };

  // ---------------- Render ------------------- //
  return (
    <div style={divStyle}>
      <h4 style={h4Style}>Opstelling</h4>
      <ul style={ulStyle}>
        {apiData.seatplans &&
          apiData.seatplans.map((seatplan, index) => {
            return (
              <li key={index} onClick={() => handleClickPickedSeatPlan(seatplan.name)}>
                <TransparentButton text={seatplan.name} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ReservationPageSeatPlans;
