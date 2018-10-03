import React, { Component, Fragment } from "react";
import { NavLink, HashRouter } from "react-router-dom";
import "./Navbar.css";
import demologo from "../../assets/Demo Logo.png";

class Navbar extends Component {
  render() {
    return (
      <HashRouter>
        <Fragment>
          <section className="header">
            <ul className="nav">
              <li className="demologo">
                <NavLink exact to="/">
                  <img src={demologo} />
                </NavLink>
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
      </HashRouter>
    );
  }
}

export default Navbar;
