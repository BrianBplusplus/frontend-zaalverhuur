import React, { Component } from "react";
import image from "../img/dnbkamer.jpg";

const bodyStyle = {
  width: "230px",
  boxShadow: "0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2)",
  textAlign: "center",
  padding: "10px",
  margin: "10px 10px",
};

const imageStyle = {
  maxWidth: "100%",
};

const buttonStyle = {
  color: "#fff",
  backgroundColor: "#ed008c",
  border: "none",
  padding: "20px",
};

export default class Roomcard extends Component {
  render() {
    return (
      <div style={bodyStyle}>
        <img style={imageStyle} src={image} />
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <ul>
          <li>{this.props.surfacearea}</li>
          <li>{this.props.capacity}</li>
          <li>{this.props.setups}</li>
        </ul>
        <button style={buttonStyle}>Reserveren</button>
      </div>
    );
  }
}
