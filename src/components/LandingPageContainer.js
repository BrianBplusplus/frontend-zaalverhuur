import React, { useState, useEffect } from "react";
import axios from "axios";
import { useMediaQuery } from "react-responsive";

import HeaderImage from "./HeaderImage";
import HeaderInfo from "./HeaderInfo";
import LandingPageCard from "./LandingPageCard";
import LoadingSpinner from "./assets/LoadingSpinner";
import ErrorMessage from "./assets/ErrorMessage";
import { imageData } from "./assets/locationData";

const LandingPageContainer = () => {
  // ---------------- States ------------------- //
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // ---------------- Variables ---------------- //
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1223 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  // ---------------- Functions ---------------- //
  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchAPI = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await axios.get(
          `https://backend-zaalverhuur.herokuapp.com/api`
        );
        console.log("API response Landing Page", response.data.locations);
        setApiData(response.data.locations);
      } catch (error) {
        setIsError(true);
        console.error(error);
      }
      setIsLoading(false);
    };
    fetchAPI();
  }, []);

  // ---------------- Styling ------------------ //
  const divStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: isMobile ? "center" : isTablet ? "space-evenly" : "space-between",
    maxWidth: "1300px",
    minHeight: "20vh",
  };

  // ---------------- Render ------------------- //
  return (
    <div>
      {!isMobile && <HeaderImage />}
      <HeaderInfo />

      <div style={divStyle}>
        {isLoading && <LoadingSpinner />}
        {isError && <ErrorMessage />}

        {apiData.map((mappedApiData, index) => {
          return (
            // ---- Temporary rudementary filters. TODO: Move to back-end ---- //
            mappedApiData.locationID <= 1371 &&
            mappedApiData.locationID !== 1366 && (
              <LandingPageCard
                link={mappedApiData.locationID}
                key={mappedApiData.locationID}
                image={imageData[index]}
                title={mappedApiData.name}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default LandingPageContainer;
