import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import ReservationPageCatering from "./ReservationPageCatering";
import ReservationPageDayPart from "./ReservationPageDayPart";
import ReservationPageSeatPlans from "./ReservationPageSeatPlans";

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

  const [locationPrice, setLocationPrice] = useState(null);
  const [mealPrice, setMealPrice] = useState(0);
  const [pickedDate, setPickedDate] = useState(null);
  const [pickedDayPart, setPickedDayPart] = useState(null);
  const [pickedMeal, setPickedMeal] = useState(null);
  const [pickedExtraCatering, setPickedExtraCatering] = useState(null);
  const [extraMealInformation, setExtraMealInformation] = useState("");
  const [pickedSeatPlan, setPickedSeatplan] = useState(null);

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

  const divSelectedOptionsStyle = {
    height: "270px",
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

  const inputFormStyle = {
    padding: "0 10px 10px 10px",
    textAlign: "center",
  };

  const ulStyle = {
    listStyle: "none",
    padding: "5px",
    width: "60%",
    margin: "0 auto",
    textAlign: "center",
  };

  const liStyle = {
    color: "#ed008c",
    backgroundColor: "#fff",
    border: "2px solid #ed008c",
    borderRadius: "3px",
    margin: "5px 0 5px 0",
    padding: "5px",
  };

  const h4Style = {
    margin: "5px 0 5px 0",
  };

  const pStyle = {
    textAlign: "center",
    fontSize: "14px",
    color: "#636363",
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
        <p>{descriptionData[paramsArrayIndex]}</p>

        <h3>Dagdeel</h3>
        <ReservationPageDayPart setPickedDayPart={setPickedDayPart} />

        <h3>Opstellingen</h3>
        <ReservationPageSeatPlans apiData={apiData} setPickedSeatplan={setPickedSeatplan} />

        <ReservationPageCatering
          setPickedMeal={setPickedMeal}
          setPickedExtraCatering={setPickedExtraCatering}
          setExtraMealInformation={setExtraMealInformation}
          extraMealInformation={extraMealInformation}
        />
      </div>
      <div style={rightStyle}>
        <DatePicker pickedDate={pickedDate} setPickedDate={setPickedDate} />
        <div>
          <div style={divSelectedOptionsStyle}>
            <p style={pStyle}>Geselecteerde opties</p>
            <ul style={ulStyle}>
              {pickedDayPart && <li>Dagdeel</li>}
              {pickedDayPart && <li style={liStyle}>{pickedDayPart}</li>}
              {pickedSeatPlan && <li>Opstelling</li>}
              {pickedSeatPlan && <li style={liStyle}>{pickedSeatPlan}</li>}
              {pickedMeal && <li>Lunch</li>}
              {pickedMeal && <li style={liStyle}>{pickedMeal}</li>}
              {pickedExtraCatering && <li>Extra's</li>}
              {pickedExtraCatering && <li style={liStyle}>{pickedExtraCatering}</li>}
            </ul>
          </div>
          <p style={pStyle}>- - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
          <div style={inputFormStyle}>
            <h4 style={h4Style}>Email:</h4>
            <input type="email"></input>
            <br></br>
            <br></br>
            <h4 style={h4Style}>Bedrag Schatting</h4>
            <u>
              <li>Zaal: €{pickedDayPart === "Hele dag" ? locationPrice * 2 : locationPrice}</li>
              <li>Catering: €{mealPrice}</li>
              <li>
                Totaal: €
                {(pickedDayPart === "Hele dag" ? locationPrice * 2 : locationPrice) + mealPrice}
              </li>
            </u>

            <p style={pStyle}>Op basis van uw selectie wordt een offerte gemaakt</p>
          </div>
        </div>
        <LargeButton text="Reserveren" />
      </div>
    </div>
  );
};

export default ReservationPageContainer;
