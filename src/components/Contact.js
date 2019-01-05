import React, { Component } from "react";
import "../css/Contact.css";

export default class Contact extends Component {
  state = {
    email: "asmar20288@naver.com",
    github: "https://github.com/WonYoungYun"
  };
  render() {
    return (
      <div id="contact">
        <h2 className="title">Contact</h2>
        <div className="content">
          <h3 className="email">Email: {this.state.email}</h3>
          <div>
            <span>Github:</span>
            <a
              href={this.state.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              {this.state.github}
            </a>
          </div>
        </div>
      </div>
    );
  }
}
