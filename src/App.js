import React from "react";
import { Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import HeaderForLargeScreen from "./components/HeaderForLargeScreen";
import HeaderForSmallScreen from "./components/HeaderForSmallScreen";
import LandingPageContainer from "./components/LandingPageContainer";
import ReservationPageContainer from "./components/ReservationPageContainer";
import Footer from "./components/Footer";

function App() {
  const isDesktop = useMediaQuery({ minWidth: 1224 });

  const divStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
  };

  return (
    <div style={divStyle} className="react-content">
      {isDesktop ? <HeaderForLargeScreen /> : <HeaderForSmallScreen />}

      <Route path="/" exact component={LandingPageContainer} />
      <Route path="/:id" exact component={ReservationPageContainer} />

      <Footer />
    </div>
  );
}

export default App;
