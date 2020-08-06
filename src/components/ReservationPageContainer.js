import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import LoadingSpinner from "./assets/LoadingSpinner";
import LargeButton from "./assets/LargeButton";

const ReservationPageContainer = () => {
  // ---------------- States ------------------- //
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // ---------------- Variables ---------------- //
  const params = useParams();

  // ---------------- Functions ---------------- //
  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchAPI = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${params.id}`
        );
        console.log("API response detail page", response);
        setData(response.data);
      } catch (error) {
        setIsError(true);
        console.error(error);
      }
      setIsLoading(false);
    };
    fetchAPI();
  }, [params]);

  // ---------------- Styling ------------------ //
  const divStyle = {
    minHeight: "30vh",
    textAlign: "center",
    backgroundColor: "#fff",
    padding: "15px",
    margin: "auto",
  };

  // ---------------- Render ------------------- //
  return (
    <div style={divStyle}>
      {isLoading && <LoadingSpinner />}
      {isError && <div>Error</div>}

      <h2>{data.name}</h2>

      <Link to={`/${params.id}/reserveren`}>
        <LargeButton text="Reserveren" />
      </Link>

      <br></br>
      <br></br>

      <Link to="/">
        <LargeButton text="Terug naar zalen" />
      </Link>
    </div>
  );
};

export default ReservationPageContainer;
