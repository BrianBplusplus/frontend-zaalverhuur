import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const RoomDetailpage = () => {
  return (
    <div>
      <h1>Detail pagina voor de individuele kamers</h1>
      <Link to="/">
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          Terug naar de homepage
        </motion.button>
      </Link>
    </div>
  );
};

export default RoomDetailpage;
