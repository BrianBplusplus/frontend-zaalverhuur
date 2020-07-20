import React, { Component } from "react";
import RoomCard from "./RoomCard";

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
        <RoomCard
          title="De nieuwe zaal"
          description="De nieuwe zaal is onze grootste zaal en is dé plek voor events!"
          surfacearea="143 m2"
          capacity="max. 112"
          setups="Opstellingen"
        />
        <RoomCard
          title="De nieuwe zaal"
          description="De nieuwe zaal is onze grootste zaal en is dé plek voor events!"
          surfacearea="143 m2"
          capacity="max. 112"
          setups="Opstellingen"
        />
        <RoomCard
          title="De nieuwe zaal"
          description="De nieuwe zaal is onze grootste zaal en is dé plek voor events!"
          surfacearea="143 m2"
          capacity="max. 112"
          setups="Opstellingen"
        />
        <RoomCard
          title="De nieuwe zaal"
          description="De nieuwe zaal is onze grootste zaal en is dé plek voor events!"
          surfacearea="143 m2"
          capacity="max. 112"
          setups="Opstellingen"
        />
        <RoomCard
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
