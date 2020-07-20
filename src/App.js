import React from "react";
import { Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPageContainer from "./components/LandingPageContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Header />
      <Route path="/" exact component={LandingPageContainer} />
      <Footer />
    </div>
  );
}

export default App;
