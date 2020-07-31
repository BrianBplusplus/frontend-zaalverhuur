import React from "react";
import { Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import Header from "./components/Header";
import HeaderHamburger from "./components/HeaderHamburger";
import LandingPageContainer from "./components/LandingPageContainer";
import RoomDetailpage from "./components/RoomDetailpage";
import Footer from "./components/Footer";
function App() {
  const isDesktop = useMediaQuery({ minWidth: 1224 });

  const divStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
  };

  return (
    <div style={divStyle} className="react-content">
      {isDesktop && <Header />}
      {!isDesktop && <HeaderHamburger />}

      <Route path="/" exact component={LandingPageContainer} />
      <Route path="/:id" exact component={RoomDetailpage} />

      <Footer />
    </div>
  );
}

export default App;
