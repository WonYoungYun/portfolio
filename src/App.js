import React, { Component } from "react";
import AboutMe from "./components/About";
import ContactMe from "./components/Contact";
import Navigation from "./components/Navigation";
import Project from "./components/Project";
import Slider from "./components/Slider";
import "./App.css";

class App extends Component {
  showSlide = n => {};
  render() {
    return (
      <div className="App">
        <Navigation />
        <Slider />
        <div id="wrap">
          <AboutMe />
          <Project />
          <ContactMe />
        </div>
      </div>
    );
  }
}

export default App;
