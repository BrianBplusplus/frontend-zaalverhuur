import React, { Component } from "react";
import Roomcard from "./Roomcard";

const bodyStyle = {
  display: "flex",
  flexWrap: "wrap",
  backgroundColor: "#fff",
  width: "80%",
  padding: "15px",
  margin: "auto",
};

export default class LandingPageContainer extends Component {
  render() {
    return (
      <div style={bodyStyle}>
        <Roomcard
          title="De nieuwe zaal"
          description="De nieuwe zaal is onze grootste zaal en is dé plek voor events!"
          surfacearea="143 m2"
          capacity="max. 112"
          setups="Opstellingen"
        />
        <Roomcard
          title="De nieuwe zaal"
          description="De nieuwe zaal is onze grootste zaal en is dé plek voor events!"
          surfacearea="143 m2"
          capacity="max. 112"
          setups="Opstellingen"
        />
        <Roomcard
          title="De nieuwe zaal"
          description="De nieuwe zaal is onze grootste zaal en is dé plek voor events!"
          surfacearea="143 m2"
          capacity="max. 112"
          setups="Opstellingen"
        />
        <Roomcard
          title="De nieuwe zaal"
          description="De nieuwe zaal is onze grootste zaal en is dé plek voor events!"
          surfacearea="143 m2"
          capacity="max. 112"
          setups="Opstellingen"
        />
        <Roomcard
          title="De nieuwe zaal"
          description="De nieuwe zaal is onze grootste zaal en is dé plek voor events!"
          surfacearea="143 m2"
          capacity="max. 112"
          setups="Opstellingen"
        />
      </div>
    );
  }
}
