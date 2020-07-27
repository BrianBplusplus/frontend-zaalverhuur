import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import LoadingSpinner from "./assets/LoadingSpinner";
import LargeButton from "./assets/LargeButton";

const RoomDetailpage = () => {
  const divStyle = {
    textAlign: "center",
    backgroundColor: "#fff",
    padding: "15px",
    margin: "auto",
  };

  const params = useParams();
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchAPI = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${params.id}`
        );
        console.log("API response detail page", response);
        setData(response.data);
      } catch (error) {
        setIsError(true);
        console.error(error);
      }
      setIsLoading(false);
    };
    fetchAPI();
  }, [params]);

  return (
    <div style={divStyle}>
      {isLoading && <LoadingSpinner />}
      {isError && <div>Error</div>}

      {data && <h2>{data.name}</h2>}
      {data && <p>{data.company.catchPhrase}</p>}

      {data && (
        <Link to="/">
          <LargeButton text="Reserveren" />
        </Link>
      )}
      <br></br>
      <br></br>
      {data && (
        <Link to="/">
          <LargeButton text="Terug naar de homepage" />
        </Link>
      )}
    </div>
  );
};

export default RoomDetailpage;
