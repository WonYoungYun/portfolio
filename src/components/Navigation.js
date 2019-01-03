import React, { Component } from "react";
import "../css/Navigation.css";
export default class Navigation extends Component {
  state = {
    classList: ""
  };
  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };
  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };
  handleScroll = e => {
    let windowY = window.scrollY;
    if (windowY !== 0) {
      this.setState({
        classList: "scroll"
      });
    } else {
      this.setState({
        classList: ""
      });
    }
  };
  render() {
    return (
      <div id="nav" className={this.state.classList}>
        <ul>
          <li>
            <a href="#slider">Home</a>
          </li>
          <li>
            <a href="#aboutMe">About Me</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#contactMe">Contact Me</a>
          </li>
        </ul>
      </div>
    );
  }
}
