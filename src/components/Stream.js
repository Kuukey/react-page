import React, { Component, Fragment } from "react";
import { Link, Route } from "react-router-dom";
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
            <Link
              to="/stream/demolition_d"
              className="flex-col4"
              onClick={this.switchStream}
            >
              <div>
                <img src={demoD} />
                <p>Demolition D</p>
              </div>
            </Link>
            <Link
              to="/stream/cantaperme92"
              className="flex-col4"
              onClick={this.switchStream}
            >
              <div>
                <img src={canta} />
                <p>CantaPerMe92</p>
              </div>
            </Link>
            <Link
              to="/stream/onlyafro"
              className="flex-col4"
              onClick={this.switchStream}
            >
              <div>
                <img src={onlyafro} />
                <p>OnlyAfro</p>
              </div>
            </Link>
            <Link
              to="/stream/summit1g"
              className="flex-col4"
              onClick={this.switchStream}
            >
              <div>
                <img src={summit} />
                <p>Summit1g</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="container">
          <div className="stream-container">
            <Route exact path="/stream/" component={placeholder} />
            <Route path="/stream/:twitch_id" component={streamSwitch} />
          </div>
        </div>
      </Fragment>
    );
  }
}

const placeholder = () => <h1>Select a streamer to show their stream!</h1>;

const streamSwitch = ({ match }) => (
  <iframe
    id="twitch-player"
    src={`https://player.twitch.tv/?channel=${match.params.twitch_id}`}
    frameBorder="0"
    allowFullscreen="true"
    scrolling="no"
    height="378"
    width="620"
  />
);

export default Stream;
