import React, { useState, useEffect } from "react";
import axios from "axios";
import { useMediaQuery } from "react-responsive";

import HeaderImage from "./HeaderImage";
import HeaderInfo from "./HeaderInfo";
import LandingPageCard from "./LandingPageCard";
import LoadingSpinner from "./assets/LoadingSpinner";
import ErrorMessage from "./assets/ErrorMessage";

import image_1 from "../img/deNieuweZaal.jpg";
import image_2 from "../img/hetNieuweLokaalMetSubZaal.jpg";
import image_3 from "../img/hetNieuweLokaal.jpeg";
import image_4 from "../img/hetNieuwsCafe.jpeg";
import image_5 from "../img/deNieuweKamer.jpg";

const LandingPageContainer = () => {
  // ---------------- States ------------------- //
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // ---------------- Variables ---------------- //
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const imageArray = [
    image_1,
    image_2,
    image_3,
    image_4,
    image_5,
    image_1,
    image_2,
    image_3,
    image_4,
    image_5,
  ];

  // ---------------- Functions ---------------- //
  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchAPI = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/`
        );
        console.log("API response Landing Page", response);
        setApiData(response.data);
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

    justifyContent: "center",
    backgroundColor: "#fff",
    maxWidth: "1300px",
    minHeight: "70vh",
    padding: "15px",
    margin: "auto",
  };

  // ---------------- Render ------------------- //
  return (
    <div>
      {!isMobile && <HeaderImage />}
      <HeaderInfo />

      <div style={divStyle}>
        {isLoading && <LoadingSpinner />}
        {isError && <ErrorMessage />}

        {apiData.map((mappedApiData) => {
          return (
            <LandingPageCard
              link={mappedApiData.id}
              key={mappedApiData.id}
              image={imageArray[mappedApiData.id - 1]}
              title={mappedApiData.name}
              description={mappedApiData.company.catchPhrase}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LandingPageContainer;
