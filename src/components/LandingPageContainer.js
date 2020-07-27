import React, { useState, useEffect } from "react";
import axios from "axios";

import RentalRooms from "./RentalRooms";
import LoadingSpinner from "./assets/LoadingSpinner";

const LandingPageContainer = () => {
  const divStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: "#fff",
    width: "80%",
    padding: "15px",
    margin: "auto",
  };

  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
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
    <div style={divStyle}>
      {isLoading && <LoadingSpinner />}
      {isError && <div>Error</div>}

      {data &&
        data.map((mappedData) => {
          return (
            <RentalRooms
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
    </div>
  );
};

export default LandingPageContainer;
