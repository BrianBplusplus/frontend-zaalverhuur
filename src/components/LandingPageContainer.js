import React, { Component } from "react";
import axios from "axios";
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
  state = {
    titles: "",
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
      const fetchedTitles = response.data;
      console.log("api test", fetchedTitles);
      this.setState({ titles: fetchedTitles });
    });
  }

  render() {
    return (
      <div style={bodyStyle}>
        {this.state.titles &&
          this.state.titles.map((mappedTitle) => {
            return (
              <Roomcard
                key={mappedTitle.id}
                title={mappedTitle.name}
                description="De nieuwe zaal is onze grootste zaal en is dé plek voor events!"
                surfacearea="143 m2"
                capacity="max. 112"
                setups="opstellingen"
              />
            );
          })}
      </div>
    );
  }
}
