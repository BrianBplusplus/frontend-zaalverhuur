import React, { useState, useEffect } from "react";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
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
  const isMobile = useMediaQuery({ maxWidth: 767 });
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
    flexWrap: isMobile ? "wrap" : "nowrap",
    justifyContent: "center",
    minHeight: "30vh",
  };

  const pStyle = {
    fontSize: "14px",
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
    backgroundColor: "#fff",
    marginTop: isMobile ? "20px" : "0",
    marginBottom: "20px",
  };

  const selectionBulletStyle = {
    display: "flex",
    justifyContent: "center",
    padding: "0",
    margin: "0",
  };

  const imageStyle = {
    marginBottom: "20px",
    width: "100%",
    height: "200px",
    objectFit: "cover",
  };

  const flexboxStyle = {
    display: "flex",
    justifyContent: "space-between",
  };

  const testStyle1 = {
    backgroundColor: "#fff",
    padding: "20px",
    width: "65%",
  };

  const testStyle2 = {
    ...testStyle1,
    padding: "0",
    width: "29%",
  };

  const h2Style = {
    margin: "0",
    color: "#ed008c",
  };

  const backgroundColorStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    margin: "20px 0 20px",
  };

  // ---------------- Render ------------------- //
  return (
    <div style={divStyle}>
      <div style={leftStyle}>
        <img alt="LocationImage" style={imageStyle} src={imageData[paramsArrayIndex]} />

        {isLoading && <LoadingSpinner />}
        {isError && <ErrorMessage />}

        {!isLoading && (
          <div style={flexboxStyle}>
            <div style={testStyle1}>
              <h2 style={h2Style}>{apiData.name}</h2>
              <p style={pStyle}>{descriptionData[paramsArrayIndex]}</p>
            </div>
            <div style={testStyle2}>opsomming data</div>
          </div>
        )}

        {!isLoading && (
          <div style={backgroundColorStyle}>
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
