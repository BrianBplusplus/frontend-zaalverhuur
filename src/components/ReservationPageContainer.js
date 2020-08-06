import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

import LoadingSpinner from "./assets/LoadingSpinner";
import LargeButton from "./assets/LargeButton";
import ErrorMessage from "./assets/ErrorMessage";

import image_1 from "../img/deNieuweZaal.jpg";
import image_2 from "../img/hetNieuweLokaalMetSubZaal.jpg";
import image_3 from "../img/hetNieuweLokaal.jpeg";
import image_4 from "../img/hetNieuwsCafe.jpeg";
import image_5 from "../img/deNieuweKamer.jpg";

const ReservationPageContainer = () => {
  // ---------------- States ------------------- //
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [pickedDate, setPickedDate] = useState(null);

  // ---------------- Variables ---------------- //
  const params = useParams();
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
          `https://jsonplaceholder.typicode.com/users/${params.id}`
        );
        console.log("API response Reservation page", response);
        setApiData(response.data);
      } catch (error) {
        setIsError(true);
        console.error(error);
      }
      setIsLoading(false);
    };
    fetchAPI();
  }, [params]);

  const handlePickDate = (day, modifiers = {}, { selected }) => {
    if (modifiers.disabled) {
      return;
    }
    setPickedDate(selected ? undefined : day);
    console.log("pickedDate: ", pickedDate);
  };

  // ---------------- Styling ------------------ //
  const divStyle = {
    minHeight: "30vh",
    textAlign: "center",
    backgroundColor: "#fff",
    padding: "15px",
    margin: "auto",
  };

  const imageStyle = {
    width: "200px",
  };

  // ---------------- Render ------------------- //
  return (
    <div style={divStyle}>
      {isLoading && <LoadingSpinner />}
      {isError && <ErrorMessage />}

      <h2>{apiData.name}</h2>
      <img alt="RoomImage" style={imageStyle} src={imageArray[params.id - 1]} />

      <DayPicker
        selectedDays={pickedDate}
        onDayClick={handlePickDate}
        disabledDays={{ daysOfWeek: [0] }}
      />

      <Link to="/">
        <LargeButton text="Terug naar zalen" />
      </Link>

      <LargeButton text="Reserveren" />
    </div>
  );
};

export default ReservationPageContainer;
