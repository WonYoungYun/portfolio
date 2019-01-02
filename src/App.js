import React, { Component } from "react";
import AboutMe from "./components/About";
import ContactMe from "./components/Contact";
import Navigation from "./components/Navigation";
import Project from "./components/Project";
import Slider from "./components/Slider";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Slider />
        <AboutMe />
        <Project />
        <ContactMe />
      </div>
    );
  }
}

export default App;
