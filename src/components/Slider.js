import React, { Component } from "react";
import "../css/Slider.css";
import aboutImg from "../img/about.jpg";
import projectImg from "../img/project.jpg";
import contactImg from "../img/contact.jpg";

export default class Slider extends Component {
  state = {
    slideData: [
      {
        name: "#about",
        imgSrc: aboutImg,
        txt: "나를 소개합니다."
      },
      {
        name: "#project",
        imgSrc: projectImg,
        txt: "나의 프로젝트"
      },
      {
        name: "#contact",
        imgSrc: contactImg,
        txt: "나와의 연결"
      }
    ],
    number: 0
  };
  componentDidMount() {
    setInterval(() => {
      if (this.state.number < 2) {
        this.setState({
          number: this.state.number + 1
        });
      } else {
        this.setState({
          number: 0
        });
      }
    }, 5000);
  }
  prevPage = () => {
    if (this.state.number > 0) {
      this.setState({
        number: this.state.number - 1
      });
    } else {
      this.setState({
        number: 2
      });
    }
  };
  nextPage = () => {
    if (this.state.number < 2) {
      this.setState({
        number: this.state.number + 1
      });
    } else {
      this.setState({
        number: 0
      });
    }
  };
  render() {
    return (
      <div id="slider">
        <div className="sliderHeader">
          <h1 className="sliderTitle">윤원영의 포트폴리오!</h1>
        </div>
        <SlideInfo
          name={this.state.slideData[this.state.number].name}
          src={this.state.slideData[this.state.number].imgSrc}
          txt={this.state.slideData[this.state.number].txt}
        />
        <button className="prev" onClick={this.prevPage} />
        <button className="next" onClick={this.nextPage} />
      </div>
    );
  }
}

const SlideInfo = ({ name, src, txt }) => {
  return (
    <div className="sliderPage">
      <img src={src} alt={name} />
      <div className="sliderText">
        <a href={name}>{txt}</a>
      </div>
    </div>
  );
};
