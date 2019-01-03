import React, { Component } from "react";
import "../css/Slider.css";
import aboutImg from "../img/about.jpg";
import projectImg from "../img/project.jpg";
import contactImg from "../img/contact.jpg";

export default class Slider extends Component {
  render() {
    return (
      <div id="slider">
        <div className="slider">
          <img src={aboutImg} alt="about me" />
          <div className="slider_text">
            <a href="#aboutMe">저는 이런 사람입니다.</a>
          </div>
        </div>
        <div className="slider">
          <img src={projectImg} alt="about me" />
          <div className="slider_text">
            <a href="#aboutMe">나의 프로젝트</a>
          </div>
        </div>
        <div className="slider">
          <img src={contactImg} alt="about me" />
          <div className="slider_text">
            <a href="#aboutMe">Contact me</a>
          </div>
        </div>
        <button class="prev">이전</button>
        <button class="next">다음</button>
      </div>
    );
  }
}
