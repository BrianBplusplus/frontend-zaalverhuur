import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AnimateSharedLayout } from "framer-motion";

import ReservationPageCatering from "./ReservationPageCatering";
import ReservationPageDayPart from "./ReservationPageDayPart";
import ReservationPageSeatPlans from "./ReservationPageSeatPlans";
import ReservationPageSummary from "./ReservationPageSummary";

import LoadingSpinner from "./assets/LoadingSpinner";
import SelectionCircle from "./assets/SelectionCircle";
import LargeButton from "./assets/LargeButton";
import ErrorMessage from "./assets/ErrorMessage";
import DatePicker from "./assets/DatePicker";
import { imageData, descriptionData, pricesData } from "./assets/locationData";

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
  const { activeSelection, apiData } = parentState;
  const selectionBullets = [0, 1, 2];
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

    window.scrollTo(0, 0);
    fetchAPI();
  }, [params.id, paramsArrayIndex]);

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
    borderBottomLeftRadius: "5px",
    borderBottomRightRadius: "5px",
  };

  const selectionBulletStyle = {
    display: "flex",
    justifyContent: "center",
    padding: "0",
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
        <img alt="LocationImage" style={imageStyle} src={imageData[paramsArrayIndex]} />

        {isLoading && <LoadingSpinner />}
        {isError && <ErrorMessage />}

        {!isLoading && <h2>{apiData.name}</h2>}
        {!isLoading && <p style={pStyle}>{descriptionData[paramsArrayIndex]}</p>}

        {!isLoading && (
          <AnimateSharedLayout>
            <ul style={selectionBulletStyle}>
              {selectionBullets.map((selectionBullet) => (
                <SelectionCircle
                  key={selectionBullet}
                  isSelected={activeSelection === selectionBullet}
                  onClick={() =>
                    setParentState({ ...parentState, activeSelection: selectionBullet })
                  }
                />
              ))}
            </ul>
          </AnimateSharedLayout>
        )}

        {activeSelection === 0 && (
          <ReservationPageDayPart state={parentState} setState={setParentState} />
        )}
        {activeSelection === 1 && (
          <ReservationPageSeatPlans state={parentState} setState={setParentState} />
        )}
        {activeSelection === 2 && (
          <ReservationPageCatering state={parentState} setState={setParentState} />
        )}
      </div>
      <div style={rightStyle}>
        <DatePicker state={parentState} setState={setParentState} />

        <ReservationPageSummary state={parentState} />

        <LargeButton text="Reserveren" />
      </div>
    </div>
  );
};

export default ReservationPageContainer;
