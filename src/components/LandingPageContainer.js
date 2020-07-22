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

  async componentDidMount() {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      console.log("API response", response);
      const fetchedTitles = response.data;
      this.setState({ titles: fetchedTitles });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    console.log("this.state", this.state);
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
