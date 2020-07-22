import React, { useState, useEffect } from "react";
import axios from "axios";
import RentalRooms from "./RentalRooms";

const divStyle = {
  display: "flex",
  flexWrap: "wrap",
  backgroundColor: "#fff",
  width: "80%",
  padding: "15px",
  margin: "auto",
};

const LandingPageContainer = () => {
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
      }
      setIsLoading(false);
    };
    fetchAPI();
  }, []);

  return (
    <div style={divStyle}>
      {isLoading && <div>Loading</div>}
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
