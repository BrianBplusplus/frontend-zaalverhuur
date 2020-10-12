import React from "react";
import { useMediaQuery } from "react-responsive";

import DetailPageInputForm from "./DetailPageInputForm";
import DetailPageAdditionalInformation from "./DetailPageAdditionalInformation";

const DetailPageDisplay = ({ state, setState }) => {
  // ---------------- States ------------------- //

  // ---------------- Variables ---------------- //
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1000 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  // ---------------- Styling ------------------ //
  const divStyle = {
    display: "flex",
    flexWrap: isMobile ? "wrap" : isTablet ? "wrap" : "nowrap",
    justifyContent: "space-between",

    margin: "20px 0 20px",
  };

  const leftStyle = {
    padding: "20px",
    marginBottom: isMobile ? "20px" : isTablet ? "20px" : "0",
    backgroundColor: "#fff",
    width: isMobile ? "100%" : isTablet ? "100%" : "46%",
  };

  const rightStyle = {
    padding: "20px",
    backgroundColor: "#fff",
    width: isMobile ? "100%" : isTablet ? "100%" : "46%",
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

export default DetailPageDisplay;
