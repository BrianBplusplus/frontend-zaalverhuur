import React, { useState, useEffect } from "react";
import axios from "axios";
import { useMediaQuery } from "react-responsive";

import LandingPageInfo from "./LandingPageInfo";
import LandingPageCard from "./LandingPageCard";
import LoadingSpinner from "./assets/LoadingSpinner";
import ErrorMessage from "./assets/ErrorMessage";
import { imageData } from "./assets/locationData";
import headerImage from "../img/HeaderImage.webp";

const LandingPageContainer = () => {
  // ---------------- States ------------------- //
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // ---------------- Variables ---------------- //
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1223 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  // ---------------- Functions ---------------- //
  const fetchAPI = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await axios.get(process.env.REACT_APP_API_URL + `/api`);
      console.log("API response Landing Page", response.data);
      setApiData(response.data);
    } catch (error) {
      setIsError(true);
      console.error(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
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

  const imageStyle = {
    maxWidth: "1300px",
    width: "100%",
    maxHeight: "200px",
    marginBottom: "20px",
    objectFit: "cover",
    display: isMobile ? "none" : "block",
  };

  // ---------------- Render ------------------- //
  return (
    <div>
      <img alt="headerimage" style={imageStyle} src={headerImage} />
      <LandingPageInfo />

      <div style={divStyle}>
        {isLoading && <LoadingSpinner />}
        {isError && <ErrorMessage />}

        {apiData.map((mappedApiData, index) => {
          return (
            // ---- Temporary rudementary filters. TODO: Move to back-end ---- //
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
