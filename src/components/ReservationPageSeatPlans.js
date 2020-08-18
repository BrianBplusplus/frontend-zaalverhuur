import React from "react";

import TransparentButton from "./assets/TransparentButton";

const ReservationPageSeatPlans = (props) => {
  // ---------------- Variables ---------------- //
  const apiData = props.apiData;
  // ---------------- Functions ---------------- //
  const handleClickPickedSeatPlan = (seatPlanChoice) => {
    props.setPickedSeatplan(seatPlanChoice);
  };

  // ---------------- Styling ------------------ //
  const ulStyle = {
    display: "flex",
    justifyContent: "center",
    listStyle: "none",
    padding: "0",
  };

  // ---------------- Render ------------------- //
  return (
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
  );
};

export default ReservationPageSeatPlans;
