import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
import { useParams } from "react-router-dom";

import DetailPageInfo from "./DetailPageInfo";
import DetailPageDisplay from "./DetailPageDisplay";
import DetailPageConfirmation from "./DetailPageConfirmation";

import LoadingSpinner from "../assets/LoadingSpinner";
import ErrorMessage from "../assets/ErrorMessage";
import { pricesData, pricesNight, pricesCatering } from "../assets/locationData";

const ReservationPageContainer = () => {
  // ---------------- States ------------------- //
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [parentState, setParentState] = useState({
    apiData: [],

    inputFormName: "",
    inputFormLastName: "",
    inputFormEmail: "",
    inputFormCompany: "",

    additionalInformationDayPart: "",
    additionalInformationCatering: "",
    additionalInformationTextField: "",
    additionalInformationAmountOfPersons: 0,

    locationPrice: 0,
    locationPriceNight: 0,
    locationPriceCatering: 0,

    formSubmitted: false,
  });

  // ---------------- Variables ---------------- //
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const { pickedDate, formSubmitted } = parentState;

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
  const fetchAPI = useCallback(async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await axios.get(
        process.env.REACT_APP_API_URL + `/api/${params.id}`
      );
      setParentState({
        ...parentState,
        apiData: response.data,
        locationPrice: pricesData[paramsArrayIndex],
        locationPriceNight: pricesNight[paramsArrayIndex],
        activeSelection: 0,
      });
    } catch (error) {
      setIsError(true);
      console.error(error);
    }
    setIsLoading(false);
  }, [params.id, paramsArrayIndex]);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchAPI();
  }, [fetchAPI]);

  // ---------------- Styling ------------------ //
  const divStyle = {
    display: "flex",
    flexWrap: isMobile ? "wrap" : "nowrap",
    justifyContent: "center",
    minHeight: "30vh",
  };

  // ---------------- Render ------------------- //
  return (
    <div style={divStyle}>
      <div>
        {isError && <ErrorMessage />}

        {isLoading && <LoadingSpinner />}

        {!isLoading && <DetailPageInfo state={parentState} />}

        {!isLoading && !formSubmitted && (
          <DetailPageDisplay state={parentState} setState={setParentState} />
        )}

        {!isLoading && formSubmitted && <DetailPageConfirmation />}
      </div>
    </div>
  );
};

export default ReservationPageContainer;
