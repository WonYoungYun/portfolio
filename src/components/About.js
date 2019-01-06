import React from "react";
import "../css/About.css";

const About = () => {
  return (
    <div id="about">
      <h2 className="title">About</h2>
      <h3 className="subTitle">나는 어떤 개발자인가?</h3>
      <p className="content">
        컴퓨터를 좋아했지만 어떠한 것을 할지 정하지 못한 상태로 대학에
        진학했습니다. 대학에서 C와 JAVA를 배웠지만 무엇을 하고 싶은지 아직도
        정하지 못했습니다. 강의로 Spring을 배우던 중 웹페이지를 그려나가는 것에
        관심이 생겼고, 프론트엔드에 대해 공부하기 시작했습니다. HTML, CSS,
        JavaScript를 배우며 내가 생각한 것을 그대로 구현하는 것에 흥미를 느끼고,
        평소 제가 보던 웹페이지들을 보며 이것은 어떻게 구현한 것일까? 라는
        생각으로 분석하며 보는 것에 재미를 느꼈습니다.
        <br /> 생각한 것을 만들려고 할때, 모르는 부분이 생기면, 검색을 통해
        찾아보고 그것을 테스트하고 만들고자 하는 것에 적용하여 만들었을 때
        그리고 완성한 페이지를 테스트하며 불편한 점을 개선을 해나가는 작업을 할
        수록 재미와 성취감을 느낍니다.
        <br />
        이러한 감정을 변하지 않고 계속해서 느끼며 성장해가는 개발자가 되고
        싶습니다.
      </p>
    </div>
  );
};

export default About;
