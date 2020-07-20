import React, { Component } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default class RoomDetailpage extends Component {
  render() {
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
  }
}
