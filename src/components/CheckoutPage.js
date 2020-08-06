import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import DatePicker from "./assets/DatePicker";
import LargeButton from "./assets/LargeButton";
import LoadingSpinner from "./assets/LoadingSpinner";

const CheckoutPage = () => {
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

  const params = useParams();
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchAPI = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${params.id}`
        );
        console.log("API response checkout page", response);
        setData(response.data);
      } catch (error) {
        setIsError(true);
        console.error(error);
      }
      setIsLoading(false);
    };
    fetchAPI();
  }, [params]);

  return (
    <div style={divStyle}>
      {isLoading && <LoadingSpinner />}
      {isError && <div>Error</div>}

      <h1>Zaal: {data.name}</h1>
      <DatePicker />
      <p>Opstellingen: 123 123 123 </p>
      <p>Prijs: €123 123 123</p>

      <Link to="/">
        <LargeButton text="Terug naar zalen" />
      </Link>
    </div>
  );
};

export default CheckoutPage;
