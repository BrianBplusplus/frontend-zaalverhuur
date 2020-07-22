import React, { useState, useEffect } from "react";
import axios from "axios";
import RentalRooms from "./RentalRooms";

const bodyStyle = {
  display: "flex",
  flexWrap: "wrap",
  backgroundColor: "#fff",
  width: "80%",
  padding: "15px",
  margin: "auto",
};

function LandingPageContainer() {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/`
      );
      console.log("API response", response);
      setData(response.data);
    };
    fetchAPI();
  }, []);

  return (
    <div style={bodyStyle}>
      {data &&
        data.map((mappedData) => {
          return (
            <RentalRooms
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
}

export default LandingPageContainer;
