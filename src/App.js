import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import LandingPageContainer from './components/LandingPageContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>

      <Header />
      <LandingPageContainer />
      <Footer />
    </div>
  );
}

export default App;
