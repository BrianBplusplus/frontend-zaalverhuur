import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import HeaderForLargeScreen from "./components/HeaderForLargeScreen";
import HeaderForSmallScreen from "./components/HeaderForSmallScreen";
import LandingPageContainer from "./components/LandingPage/LandingPageContainer";
import DetailPageContainer from "./components/DetailPage/DetailPageContainer";
import Footer from "./components/Footer";

import Error404 from "./components/assets/Error404";

function App() {
  const isDesktop = useMediaQuery({ minWidth: 1224 });

  const divStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
  };

  return (
    <Router>
      <div style={divStyle} className="react-content">
        {isDesktop ? <HeaderForLargeScreen /> : <HeaderForSmallScreen />}

        <Switch>
          <Route exact path="/zalen/:id" exact component={DetailPageContainer} />
          <Route exact path="/" component={LandingPageContainer} />
          <Route component={Error404} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
