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
        href: "#about",
        name: "About"
      },
      {
        href: "#project",
        name: "Project"
      },
      {
        href: "#contact",
        name: "Contact"
      }
    ],
    classList: "nonScroll",
    ulClass: "",
    tabClass: "fas fa-bars"
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
  showList = () => {
    if (this.state.ulClass) {
      this.setState({
        ulClass: "",
        tabClass: "fas fa-bars"
      });
    } else {
      this.setState({
        ulClass: "show",
        tabClass: "fas fa-times"
      });
    }
  };

  render() {
    const { navData } = this.state;

    return (
      <div id="nav" className={this.state.classList}>
        <div>
          <span className="tab" onClick={this.showList}>
            <i className={this.state.tabClass} />
          </span>
          <ul className={this.state.ulClass}>
            <NavList navData={navData} />
          </ul>
        </div>
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
