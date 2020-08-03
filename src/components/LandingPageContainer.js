import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimateSharedLayout } from "framer-motion";

import RentalRooms from "./RentalRooms";
import LandingPageCard from "./LandingPageCard";
import LoadingSpinner from "./assets/LoadingSpinner";

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
    <AnimateSharedLayout>
      <motion.div style={divStyle}>
        {isLoading && <LoadingSpinner />}
        {isError && <div>Error</div>}

        {data.map((mappedData) => {
          return (
            <LandingPageCard
              link={mappedData.id}
              key={mappedData.id}
              title={mappedData.name}
              description={mappedData.company.catchPhrase}
              surfacearea={mappedData.address.geo.lat}
              capacity={mappedData.address.geo.lng}
              setups={mappedData.address.street}
            />
          );
        })}
      </motion.div>
    </AnimateSharedLayout>
  );
};

export default LandingPageContainer;
