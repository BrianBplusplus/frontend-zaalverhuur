import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

import LoadingSpinner from "./assets/LoadingSpinner";
import LargeButton from "./assets/LargeButton";
import TransparantButton from "./assets/TransparentButton";
import ErrorMessage from "./assets/ErrorMessage";
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

  const handlePickDate = (day, modifiers = {}, { selected }) => {
    if (modifiers.disabled) {
      return;
    }
    setPickedDate(selected ? undefined : day);
  };

  const handleCheckout = () => {
    console.log("Name: " + apiData.name);
    console.log("Daypart: " + pickedDayPart);
    console.log("Meal: " + pickedMeal);
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
    height: "210px",
  };

  const sidebarPStyle = {
    textAlign: "center",
    fontSize: "14px",
    color: "#636363",
  };

  const inputFormStyle = {
    padding: "0 10px 10px 10px",
    textAlign: "center",
  };

  const ulStyle = {
    display: "flex",
    justifyContent: "center",
    listStyle: "none",
    padding: "0",
  };

  const liStyle = {
    color: "#ed008c",
    backgroundColor: "#fff",
    border: "2px solid #ed008c",
    borderRadius: "3px",
    margin: "5px 0 5px 0",
    padding: "5px",
  };

  const ulSelectedOptionsStyle = {
    listStyle: "none",
    padding: "5px",
    width: "60%",
    margin: "0 auto",
    textAlign: "center",
  };

  const h4Style = {
    margin: "5px 0 5px 0",
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
    height: "250px",
    objectFit: "cover",
  };

  // ---------------- Render ------------------- //
  return (
    <div style={divStyle}>
      <div style={leftStyle}>
        {isLoading && <LoadingSpinner />}
        {isError && <ErrorMessage />}

        <img alt="RoomImage" style={imageStyle} src={imageData[paramsArrayIndex]} />
        <h2>{apiData.name}</h2>
        <p>{descriptionData[paramsArrayIndex]}</p>

        <h2>Opties</h2>
        <h3>Dagdeel</h3>
        <ul style={ulStyle}>
          <li onClick={() => setPickedDayPart("Ochtend")}>
            <TransparantButton text="Ochtend" />
          </li>
          <li onClick={() => setPickedDayPart("Middag")}>
            <TransparantButton text="Middag" />
          </li>
          <li onClick={() => setPickedDayPart("Avond")}>
            <TransparantButton text="Avond" />
          </li>
          <li onClick={() => setPickedDayPart("Hele dag")}>
            <TransparantButton text="Hele dag" />
          </li>
        </ul>
        <h3>Catering</h3>
        <ul style={ulStyle}>
          <li
            onClick={() => {
              setPickedMeal("Geen");
              setMealPrice(0);
            }}
          >
            <TransparantButton text="Geen" />
          </li>
          <li
            onClick={() => {
              setPickedMeal("Kleine lunch");
              setMealPrice(50);
            }}
          >
            <TransparantButton text="Kleine Lunch" />
          </li>
          <li
            onClick={() => {
              setPickedMeal("Warme maaltijd");
              setMealPrice(100);
            }}
          >
            <TransparantButton text="Warme Maaltijd" />
          </li>
          <li
            onClick={() => {
              setPickedMeal("Restaurant");
              setMealPrice(500);
            }}
          >
            <TransparantButton text="Restaurant" />
          </li>
        </ul>
        <h3>Opstellingen</h3>
        <ul style={ulStyle}>
          {apiData.seatplans &&
            apiData.seatplans.map((seatplan, index) => {
              return (
                <li key={index} onClick={() => setPickedSeatplan(seatplan.name)}>
                  <TransparantButton text={seatplan.name} />
                </li>
              );
            })}
        </ul>

        <Link to="/">
          <button>Terug naar zalen</button>
        </Link>
        <button onClick={() => handleCheckout()}>reserveren test</button>
      </div>
      <div style={rightStyle}>
        <DayPicker
          selectedDays={pickedDate}
          onDayClick={handlePickDate}
          disabledDays={{ daysOfWeek: [0] }}
        />
        <div>
          <div style={divSelectedOptionsStyle}>
            <p style={sidebarPStyle}>Geselecteerde opties</p>
            <ul style={ulSelectedOptionsStyle}>
              {pickedDayPart && <li>Dagdeel</li>}
              {pickedDayPart && <li style={liStyle}>{pickedDayPart}</li>}
              {pickedMeal && <li>Maaltijd</li>}
              {pickedMeal && <li style={liStyle}>{pickedMeal}</li>}
              {pickedSeatPlan && <li>Opstelling</li>}
              {pickedSeatPlan && <li style={liStyle}>{pickedSeatPlan}</li>}
            </ul>
          </div>
          <p style={sidebarPStyle}>- - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
          <div style={inputFormStyle}>
            <h4 style={h4Style}>Email:</h4>
            <input type="email"></input>
            <h4 style={h4Style}>Opmerkingen:</h4>
            <input type="textarea" placeholder="Eventuele opmerkingen "></input>
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

            <p style={sidebarPStyle}>Op basis van uw selectie wordt een offerte gemaakt</p>
          </div>
        </div>
        <LargeButton text="Reserveren" />
      </div>
    </div>
  );
};

export default ReservationPageContainer;
