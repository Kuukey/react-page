import React, { Component, Fragment } from "react";
import demoD from "../assets/demolitiond_pfp.jpg";
import canta from "../assets/cantaperme92_pfp.jpg";
import onlyafro from "../assets/onlyafro_pfp.jpg";
import summit from "../assets/summit1g_pfp.jpg";
import "./Stream.css";

class Stream extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="container-1">
            <h1>Favorite Streamers</h1>
          </div>
          <div className="container-2">
            <div className="flex-col4">
              <img src={demoD} />
              <p>Demolition D</p>
            </div>
            <div className="flex-col4">
              <img src={canta} />
              <p>CantaPerMe92</p>
            </div>
            <div className="flex-col4">
              <img src={onlyafro} />
              <p>OnlyAfro</p>
            </div>
            <div className="flex-col4">
              <img src={summit} />
              <p>Summit1g</p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Stream;
