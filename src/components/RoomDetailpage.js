import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

const divStyle = {
  textAlign: "center",
  backgroundColor: "#fff",
  width: "80%",
  padding: "15px",
  margin: "auto",
};

const buttonStyle = {
  color: "#fff",
  backgroundColor: "#ed008c",
  border: "none",
  padding: "20px",
};

const RoomDetailpage = () => {
  const params = useParams();
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
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
      }
      setIsLoading(false);
    };
    fetchAPI();
  }, []);

  return (
    <div style={divStyle}>
      {isLoading && <div>Loading</div>}
      {isError && <div>Error</div>}

      {data && <h2>{data.name}</h2>}
      {data && <p>{data.company.catchPhrase}</p>}

      <Link to="/">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={buttonStyle}
        >
          Terug naar de homepage
        </motion.button>
      </Link>
    </div>
  );
};

export default RoomDetailpage;
