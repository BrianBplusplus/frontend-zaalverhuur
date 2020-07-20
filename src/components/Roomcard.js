import React, { Component } from "react";

const bodyStyle = {
  width: "25%",
  border: "1px solid black",
  textAlign: "center",
  padding: "10px",
  margin: "10px 10px",
};

export default class Roomcard extends Component {
  render() {
    return (
      <div style={bodyStyle}>
        <img src={this.props.roomImage} />
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <ul>
          <li>{this.props.surfacearea}</li>
          <li>{this.props.capacity}</li>
          <li>{this.props.setups}</li>
        </ul>
        <button>Reserveren</button>
      </div>
    );
  }
}
