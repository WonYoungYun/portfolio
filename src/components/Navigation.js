import React, { Component } from "react";
import "../css/Navigation.css";
export default class Navigation extends Component {
  state = {
    navData: [
      {
        href: "#slider",
        name: "Home"
      },
      {
        href: "#aboutMe",
        name: "About Me"
      },
      {
        href: "#project",
        name: "Project"
      },
      {
        href: "#contactMe",
        name: "Contact Me"
      }
    ],
    classList: "nonScroll"
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
        classList: "nonScroll"
      });
    }
  };
  render() {
    const { navData } = this.state;

    return (
      <div id="nav" className={this.state.classList}>
        <ul>
          <NavList navData={navData} />
        </ul>
      </div>
    );
  }
}

const NavList = ({ navData }) => {
  return navData.map(info => (
    <NavInfo href={info.href} name={info.name} key={info.name} />
  ));
};
const NavInfo = ({ href, name }) => {
  return (
    <li>
      <a href={href}>{name}</a>
    </li>
  );
};
