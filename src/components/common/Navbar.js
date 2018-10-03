import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import demologo from "../../assets/gumi_dunkin.png";

class Navbar extends Component {
  render() {
    return (
      <Fragment>
        <section className="header">
          <ul className="nav">
            <li className="demologo">
              <NavLink exact to="/">
                <img src={demologo} alt="demo logo" />
              </NavLink>
            </li>
            <li className="site-name">
              <a href="/">React Demo</a>
            </li>
            <li className="sidenavs">
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li className="sidenavs">
              <NavLink to="/stream">Stream</NavLink>
            </li>
          </ul>
        </section>
      </Fragment>
    );
  }
}

export default Navbar;
