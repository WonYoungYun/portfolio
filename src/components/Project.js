import React, { Component } from "react";
import "../css/Project.css";
import rpgImg from "../img/txtRPG.png";
import todoList from "../img/todoList.png";
import movieApp from "../img/movieApp.png";
import board from "../img/board.png";
import reactMovie from "../img/reactMovieApp.PNG";
import PhoneBook from "../img/phonebook.png";
import GameBox from "../img/gamebox.PNG";
export default class Project extends Component {
  state = {
    projectList: [
      {
        name: "textRPG",
        link: "https://wonyoungyun.github.io/Text_Game/",
        imgSrc: rpgImg,
        lng: "JS",
        info: "가위바위보로 몬스터를 잡아 모험을 떠나는 text RPG 게임"
      },
      {
        name: "todoList",
        link: "https://wonyoungyun.github.io/TODO_List/",
        imgSrc: todoList,
        lng: "JS",
        info:
          "지역 위치를 받아 지역의 온도를 보여주고, 해야 할 일을 적어 체크하는 todoList"
      },
      {
        name: "movieApp",
        link: "https://wonyoungyun.github.io/movie_app/",
        imgSrc: movieApp,
        lng: "JS",
        info:
          "영화진흥위원회의 OPEN API를 이용하여 영화 검색 및 금일의 일별 박스오피스를 볼 수 있는 영화 앱"
      },
      {
        name: "Board",
        link: "https://github.com/WonYoungYun/board",
        imgSrc: board,
        lng: "node",
        info: "NodeJS로 구현한 CRUD기능이 있는 게시판"
      },
      {
        name: "ReactMoiveApp",
        link: "https://github.com/WonYoungYun/React_movieApp",
        imgSrc: reactMovie,
        lng: "react",
        info: "react와 영화Api를 이용하여 영화의 목록을 보여주는 Movie App"
      },
      {
        name: "PhoneBook",
        link: "https://github.com/WonYoungYun/React-PhoneBook",
        imgSrc: PhoneBook,
        lng: "react",
        info: "react로 만든 전화번호 등혹, 수정, 삭제가 가능한 전화번호부"
      },
      {
        name: "GameBox",
        link: "https://github.com/WonYoungYun/gameBox",
        imgSrc: GameBox,
        lng: "vue",
        info: "vue를 이용하여 만든 11가지의 게임이 들어있는 GameBox"
      }
    ]
  };
  render() {
    return (
      <div id="project">
        <h2 className="title">Project</h2>
        <ul className="list">
          <ProjectCardList projectList={this.state.projectList} />
        </ul>
      </div>
    );
  }
}
const ProjectCardList = ({ projectList }) => {
  return projectList.map(data => (
    <ProjectCard
      name={data.name}
      link={data.link}
      imgSrc={data.imgSrc}
      lng={data.lng}
      info={data.info}
      key={data.name}
    />
  ));
};
const ProjectCard = ({ name, link, imgSrc, lng, info }) => {
  return (
    <li className="card">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="projectImg">
          <img src={imgSrc} alt="alt" />
        </div>
        <div className="details">
          <h3>{name}</h3>
          <div className="tag">
            <span className={lng}>{lng}</span>
          </div>
          <div className="info">
            <p>{info}</p>
          </div>
        </div>
      </a>
    </li>
  );
};
