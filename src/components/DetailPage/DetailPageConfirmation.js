import React, { useState, useEffect } from "react";

import LoadingSpinner from "../assets/LoadingSpinner";

const DetailPageConfirmation = () => {
  // ---------------- States ------------------- //
  const [isLoading, setIsLoading] = useState(true);

  // ---------------- Functions ---------------- //
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  });
  // ---------------- Styling ------------------ //
  const divStyle = {
    padding: "20px",
    marginBottom: "20px",
    marginTop: "20px",
    backgroundColor: "#fff",
    height: "400px",
    textAlign: "center",
  };

  const h2Style = {
    color: "#ed008c",
  };

  // ---------------- Render ------------------- //
  return (
    <div style={divStyle}>
      {isLoading && (
        <div>
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && (
        <div>
          <h2 style={h2Style}>Uw aanvraag is verzonden</h2>
          <p>
            Binnenkort ontvangt u bevestiging van uw aanvraag met een op maat
            gemaakte offerte
          </p>
        </div>
      )}
    </div>
  );
};

export default DetailPageConfirmation;
