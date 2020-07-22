import React, { useState, useEffect } from "react";
import axios from "axios";
import Roomcard from "./Roomcard";

const bodyStyle = {
  display: "flex",
  flexWrap: "wrap",
  backgroundColor: "#fff",
  width: "80%",
  padding: "15px",
  margin: "auto",
};

function LandingPageContainer() {
  const [title, setTitles] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      console.log("API response", response);
      setTitles(response.data);
    };
    fetchAPI();
  }, []);

  return (
    <div style={bodyStyle}>
      {title &&
        title.map((mappedTitle) => {
          return (
            <Roomcard
              key={mappedTitle.id}
              title={mappedTitle.name}
              description="De nieuwe zaal is onze grootste zaal en is dé plek voor events!"
              surfacearea="143 m2"
              capacity="max. 112"
              setups="opstellingen"
            />
          );
        })}
    </div>
  );
}

export default LandingPageContainer;
