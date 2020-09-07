import React from "react";
import { AnimateSharedLayout } from "framer-motion";

import ReservationPageCatering from "./DetailPageCatering";
import ReservationPageDayPart from "./DetailPageDayPart";
import ReservationPageSeatPlans from "./DetailPageSeatPlans";

import SelectionCircle from "../assets/SelectionCircle";

const ReservationPageCards = ({ state, setState }) => {
  // ---------------- Variables ---------------- //
  const { activeSelection } = state;
  const selectionBullets = [0, 1, 2, 3, 4, 5, 6];

  // ---------------- Styling ------------------ //
  const divStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    margin: "20px 0 20px",
    height: "400px",
  };

  const ulStyle = {
    display: "flex",
    justifyContent: "center",
    padding: "0",
    margin: "0",
  };

  // ---------------- Render ------------------- //
  return (
    <div style={divStyle}>
      <AnimateSharedLayout>
        <ul style={ulStyle}>
          {selectionBullets.map((selectionBullet) => (
            <SelectionCircle
              key={selectionBullet}
              isSelected={activeSelection === selectionBullet}
              onClick={() =>
                setState({ ...state, activeSelection: selectionBullet })
              }
            />
          ))}
        </ul>
      </AnimateSharedLayout>

      {activeSelection === 0 && (
        <ReservationPageDayPart state={state} setState={setState} />
      )}
      {activeSelection === 1 && (
        <ReservationPageSeatPlans state={state} setState={setState} />
      )}
      {activeSelection === 2 && (
        <ReservationPageCatering state={state} setState={setState} />
      )}
      {activeSelection === 3 && <div>Hola</div>}
    </div>
  );
};

export default ReservationPageCards;
