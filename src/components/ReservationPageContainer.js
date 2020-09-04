import React, { useState, useEffect } from "react";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
import { useParams } from "react-router-dom";

import ReservationPageSummary from "./ReservationPageSummary";
import ReservationPageInfo from "./ReservationPageInfo";
import ReservationPageCards from "./ReservationPageCards";

import LoadingSpinner from "./assets/LoadingSpinner";
import LargeButton from "./assets/LargeButton";
import ErrorMessage from "./assets/ErrorMessage";
import DatePicker from "./assets/DatePicker";
import { imageData, pricesData } from "./assets/locationData";

const ReservationPageContainer = () => {
  // ---------------- States ------------------- //
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [parentState, setParentState] = useState({
    apiData: [],
    activeSelection: [],

    pickedDate: null,
    pickedDayPart: null,
    pickedMeal: null,
    pickedDrink: null,
    pickedExtraCatering: null,
    pickedSeatPlan: null,
    extraInformation: "",

    locationPrice: 0,
    mealPrice: 0,
    drinkPrice: 0,
    extraCateringPrice: 0,
  });

  // ---------------- Variables ---------------- //
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const { pickedDate } = parentState;

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
  const fetchAPI = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await axios.get(process.env.REACT_APP_API_URL + `/api/${params.id}`);
      console.log("API response Reservation page", response.data);
      setParentState({
        ...parentState,
        apiData: response.data,
        locationPrice: pricesData[paramsArrayIndex],
        activeSelection: 0,
      });
    } catch (error) {
      setIsError(true);
      console.error(error);
    }
    setIsLoading(false);
  };

  const sendMail = () => {
    if (pickedDate) {
      axios.post(process.env.REACT_APP_API_URL + `/mail/pickedoptions`, {
        ...parentState,
      });
      console.log("All data has been entered");
    } else {
      console.log("missing info");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchAPI();
  }, [params.id, paramsArrayIndex]);

  // ---------------- Styling ------------------ //
  const divStyle = {
    display: "flex",
    flexWrap: isMobile ? "wrap" : "nowrap",
    justifyContent: "center",
    minHeight: "30vh",
  };

  const leftStyle = {
    marginRight: "10px",
  };

  const rightStyle = {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    marginTop: isMobile ? "20px" : "0",
    marginBottom: "20px",
  };

  const imageStyle = {
    marginBottom: "20px",
    width: "100%",
    height: "200px",
    objectFit: "cover",
  };

  // ---------------- Render ------------------- //
  return (
    <div style={divStyle}>
      <div style={leftStyle}>
        <img alt="LocationImage" style={imageStyle} src={imageData[paramsArrayIndex]} />

        {isLoading && <LoadingSpinner />}
        {isError && <ErrorMessage />}

        {!isLoading && <ReservationPageInfo state={parentState} />}

        {!isLoading && <ReservationPageCards state={parentState} setState={setParentState} />}
      </div>
      <div style={rightStyle}>
        <DatePicker state={parentState} setState={setParentState} />
        <ReservationPageSummary state={parentState} />
        <button onClick={() => sendMail()}>sendmail</button>
        <LargeButton text="Reserveren" />
      </div>
    </div>
  );
};

export default ReservationPageContainer;
