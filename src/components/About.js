import React from "react";
import "../css/About.css";
import reactImg from "../img/logo/React.png";
import vueImg from "../img/logo/Vue.png";
import htmlImg from "../img/logo/Html5.png";
import cssImg from "../img/logo/CSS3.png";
import nodeImg from "../img/logo/NodeJS.png";
import jsImg from "../img/logo/JS.png";

const About = () => {
  return (
    <div id="about">
      <h2 className="title">About</h2>
      <h3 className="subTitle">나는 어떤 개발자인가?</h3>
      <p className="content">
        컴퓨터와 게임을 좋아해서 게임개발자가 되기위해 대학에 진학했습니다.
        다양한 것을 배우던 중 웹페이지를 그려나가는 것에 흥미와 재미를 붙였고,
        프론트엔드에 대해 공부하기 시작했습니다. HTML, CSS, JavaScript를 배우며
        내가 생각한 것을 그대로 구현하는 것과 웹페이지들을 분석하며 보는 것에
        재미를 느꼈습니다.
        <br />
        프론트 엔드는 끊임없이 변화하고 새로운 기술이 탄생합니다. 이러한
        흐름속에 두려워하지 않고 적응하여 좋은 컨텐츠를 만드는 것이 목표입니다.
        <br /> 생각한 것을 만들려고 할때, 모르는 부분이 생기면, 검색을 통해
        찾아보고 그것을 테스트하며 만들고자 하는 것에 적용하여 만들었을 때
        그리고 완성한 페이지를 테스트하며 불편한 점을 개선을 해나가는 작업을 할
        수록 재미와 성취감을 느낍니다. 이러한 성취감과 재미를 변하지 않고
        계속해서 느끼며 성장하고 자신이 배운 것들을 다른 사람들에게도 배풀어 줄
        수 있는 개발자가 되고 싶습니다.
      </p>
      <h3 className="subTitle">나의 기술은?</h3>
      <Skills />
    </div>
  );
};
const Skills = () => {
  return (
    <div className="skills">
      <ul>
        <li className="html">
          <img src={htmlImg} alt="html5" />
        </li>
        <li className="css">
          <img src={cssImg} alt="css3" />
        </li>
        <li className="js">
          <img src={jsImg} alt="javascript" />
        </li>
        <li className="react">
          <img src={reactImg} alt="react" />
        </li>
        <li className="vue">
          <img src={vueImg} alt="vue" />
        </li>
        <li className="node">
          <img src={nodeImg} alt="nodeJS" />
        </li>
      </ul>
    </div>
  );
};
export default About;
