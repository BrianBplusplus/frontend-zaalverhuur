import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

import LoadingSpinner from "./assets/LoadingSpinner";
import LargeButton from "./assets/LargeButton";
import ErrorMessage from "./assets/ErrorMessage";
import { imageData, descriptionData } from "./assets/locationData";

const ReservationPageContainer = () => {
  // ---------------- States ------------------- //
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [pickedDate, setPickedDate] = useState(null);

  // ---------------- Variables ---------------- //
  const params = useParams();
  const paramsArrayIndex =
    params.id === "1364"
      ? 0
      : params.id === "1366"
      ? 1
      : params.id === "1367"
      ? 2
      : params.id === "1368"
      ? 3
      : params.id === "1369"
      ? 4
      : params.id === "1370"
      ? 5
      : 6;

  // ---------------- Functions ---------------- //
  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchAPI = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await axios.get(
          `https://backend-zaalverhuur.herokuapp.com/api/${params.id}`
        );
        console.log("API response Reservation page", response.data);
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
  };

  const dateChecker = () => {
    console.log(pickedDate);
    console.log(typeof pickedDate);
  };

  // ---------------- Styling ------------------ //
  const divStyle = {
    display: "flex",
    justifyContent: "space-around",

    minHeight: "30vh",
    backgroundColor: "#fff",
    padding: "15px",
  };

  const leftStyle = {};

  const rightStyle = {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow: "0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2)",
  };

  const imageStyle = {
    width: "99%",
    height: "200px",
    objectFit: "cover",
  };

  // ---------------- Render ------------------- //
  return (
    <div style={divStyle}>
      <div style={leftStyle}>
        {isLoading && <LoadingSpinner />}
        {isError && <ErrorMessage />}

        <img
          alt="RoomImage"
          style={imageStyle}
          src={imageData[paramsArrayIndex]}
        />
        <h2>{apiData.name}</h2>
        <p>{descriptionData[paramsArrayIndex]}</p>

        <h2>Opties : </h2>
        <Link to="/">
          <LargeButton text="Terug naar zalen" />
        </Link>
      </div>
      <div style={rightStyle}>
        <DayPicker
          selectedDays={pickedDate}
          onDayClick={handlePickDate}
          disabledDays={{ daysOfWeek: [0] }}
        />

        <p>Geselecteerde opties: </p>
        <button onClick={() => dateChecker()}>Check datum</button>
        <LargeButton text="Reserveren" />
      </div>
    </div>
  );
};

export default ReservationPageContainer;
