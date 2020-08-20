import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import ReservationPageCatering from "./ReservationPageCatering";
import ReservationPageDayPart from "./ReservationPageDayPart";
import ReservationPageSeatPlans from "./ReservationPageSeatPlans";
import ReservationPageSummary from "./ReservationPageSummary";

import LoadingSpinner from "./assets/LoadingSpinner";
import LargeButton from "./assets/LargeButton";
import ErrorMessage from "./assets/ErrorMessage";
import DatePicker from "./assets/DatePicker";
import { imageData, descriptionData, pricesData } from "./assets/locationData";

const ReservationPageContainer = () => {
  // ---------------- States ------------------- //
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [pickedDate, setPickedDate] = useState(null);
  const [pickedDayPart, setPickedDayPart] = useState(null);
  const [pickedMeal, setPickedMeal] = useState(null);
  const [pickedDrink, setPickedDrinks] = useState(null);
  const [pickedExtraCatering, setPickedExtraCatering] = useState(null);
  const [extraMealInformation, setExtraMealInformation] = useState("");
  const [pickedSeatPlan, setPickedSeatplan] = useState(null);

  const [locationPrice, setLocationPrice] = useState(null);
  const [mealPrice, setMealPrice] = useState(0);
  const [drinkPrice, setDrinkPrice] = useState(0);
  const [extraCateringPrice, setExtraCateringPrice] = useState(0);

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
    setLocationPrice(pricesData[paramsArrayIndex]);

    const fetchAPI = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await axios.get(
          `https://backend-zaalverhuur.herokuapp.com/api/${params.id}`
        );
        console.log("API response Reservation page", response.data);

        setApiData(response.data);

        // Automatically sets the seatplan if only one is available
        if (response.data.seatplans.length === 1) {
          setPickedSeatplan(response.data.seatplans[0].name);
        }
      } catch (error) {
        setIsError(true);
        console.error(error);
      }
      setIsLoading(false);
    };
    fetchAPI();
  }, [params, paramsArrayIndex]);

  const handleCheckout = () => {
    console.log("Name: " + apiData.name);
    console.log("Daypart: " + pickedDayPart);
    console.log("Meal: " + pickedMeal);
    console.log("Extra: " + pickedExtraCatering);
    console.log("Input extra: " + extraMealInformation);
    console.log("Seatplan: " + pickedSeatPlan);
  };

  // ---------------- Styling ------------------ //
  const divStyle = {
    display: "flex",
    justifyContent: "space-around",

    minHeight: "30vh",
    backgroundColor: "#fff",
    padding: "15px",
  };

  const pStyle = {
    textAlign: "justify",
  };

  const leftStyle = {
    marginRight: "10px",
  };

  const rightStyle = {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow: "0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2)",
  };

  const imageStyle = {
    width: "100%",
    height: "250px",
    objectFit: "cover",
  };

  // ---------------- Render ------------------- //
  return (
    <div style={divStyle}>
      <div style={leftStyle}>
        {isLoading && <LoadingSpinner />}
        {isError && <ErrorMessage />}

        <img alt="LocationImage" style={imageStyle} src={imageData[paramsArrayIndex]} />
        <h2>{apiData.name}</h2>
        <p style={pStyle}>{descriptionData[paramsArrayIndex]}</p>

        <h3>Dagdeel</h3>
        <ReservationPageDayPart setPickedDayPart={setPickedDayPart} />

        <h3>Opstellingen</h3>
        <ReservationPageSeatPlans apiData={apiData} setPickedSeatplan={setPickedSeatplan} />

        <ReservationPageCatering
          setPickedMeal={setPickedMeal}
          setPickedExtraCatering={setPickedExtraCatering}
          setPickedDrinks={setPickedDrinks}
          setExtraMealInformation={setExtraMealInformation}
          extraMealInformation={extraMealInformation}
          //mealPrice={mealPrice}
          setMealPrice={setMealPrice}
          setDrinkPrice={setDrinkPrice}
          setExtraCateringPrice={setExtraCateringPrice}
        />
      </div>
      <div style={rightStyle}>
        <DatePicker pickedDate={pickedDate} setPickedDate={setPickedDate} />

        <ReservationPageSummary
          pickedDayPart={pickedDayPart}
          pickedSeatPlan={pickedSeatPlan}
          pickedMeal={pickedMeal}
          pickedDrink={pickedDrink}
          pickedExtraCatering={pickedExtraCatering}
          mealPrice={mealPrice}
          drinkPrice={drinkPrice}
          extraCateringPrice={extraCateringPrice}
          locationPrice={locationPrice}
        />

        <LargeButton text="Reserveren" />
      </div>
    </div>
  );
};

export default ReservationPageContainer;
