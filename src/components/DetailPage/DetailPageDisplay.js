import React from "react";

import DetailPageInputForm from "./DetailPageInputForm";
import DetailPageAdditionalInformation from "./DetailPageAdditionalInformation";

const DetailPageOptions = ({ state, setState }) => {
  // ---------------- States ------------------- //

  // ---------------- Variables ---------------- //

  // ---------------- Styling ------------------ //
  const divStyle = {
    display: "flex",
    justifyContent: "space-between",

    margin: "20px 0 20px",
  };

  const leftStyle = {
    padding: "20px",
    backgroundColor: "#fff",
    width: "46%",
  };

  const rightStyle = {
    ...leftStyle,
  };

  // ---------------- Render ------------------- //
  return (
    <div style={divStyle}>
      <div style={leftStyle}>
        <DetailPageInputForm state={state} setState={setState} />
      </div>
      <div style={rightStyle}>
        <DetailPageAdditionalInformation state={state} setState={setState} />
      </div>
    </div>
  );
};

export default DetailPageOptions;
