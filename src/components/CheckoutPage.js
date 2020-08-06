import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import DatePicker from "./assets/DatePicker";
import LargeButton from "./assets/LargeButton";
import LoadingSpinner from "./assets/LoadingSpinner";

import image_1 from "../img/deNieuweZaal.jpg";
import image_2 from "../img/hetNieuweLokaalMetSubZaal.jpg";
import image_3 from "../img/hetNieuweLokaal.jpeg";
import image_4 from "../img/hetNieuwsCafe.jpeg";
import image_5 from "../img/deNieuweKamer.jpg";

const CheckoutPage = () => {
  // ---------------- Styling ---------------- //
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

  // ---------------- Variables ---------------- //
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

  // ---------------- States ------------------- //
  const params = useParams();
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

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

  // ---------------- Render ---------------- //
  return (
    <div style={divStyle}>
      {isLoading && <LoadingSpinner />}
      {isError && <div>Error</div>}

      <h1>Zaal: {data.name}</h1>
      <img src={imageArray[params.id - 1]} />
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
