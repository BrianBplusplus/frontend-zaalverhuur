import React, { useState, useEffect } from "react";
import axios from "axios";
import { useMediaQuery } from "react-responsive";

import HeaderImage from "./HeaderImage";
import HeaderInfo from "./HeaderInfo";
import LandingPageCard from "./LandingPageCard";
import LoadingSpinner from "./assets/LoadingSpinner";

import image_1 from "../img/deNieuweZaal.jpg";
import image_2 from "../img/hetNieuweLokaalMetSubZaal.jpg";
import image_3 from "../img/hetNieuweLokaal.jpeg";
import image_4 from "../img/hetNieuwsCafe.jpeg";
import image_5 from "../img/deNieuweKamer.jpg";

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

const LandingPageContainer = () => {
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

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchAPI = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/`
        );
        console.log("API response", response);
        setData(response.data);
      } catch (error) {
        setIsError(true);
        console.error(error);
      }
      setIsLoading(false);
    };
    fetchAPI();
  }, []);

  return (
    <div>
      {!isMobile && <HeaderImage />}
      <HeaderInfo />

      <div style={divStyle}>
        {isLoading && <LoadingSpinner />}
        {isError && <div>Error</div>}

        {data.map((mappedData) => {
          return (
            <LandingPageCard
              link={mappedData.id}
              key={mappedData.id}
              image={imageArray[mappedData.id - 1]}
              title={mappedData.name}
              description={mappedData.company.catchPhrase}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LandingPageContainer;
