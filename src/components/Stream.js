import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import dyrus from "../assets/dyrus_pfp.png";
import canta from "../assets/cantaperme92_pfp.jpg";
import onlyafro from "../assets/onlyafro_pfp.jpg";
import summit from "../assets/summit1g_pfp.jpg";
import "./Stream.css";
import $ from "jquery";

class Stream extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        data: {
          id: []
        }
      }
    };
  }

  componentDidMount() {
    fetch(
      "https://api.twitch.tv/helix/streams?user_login=cantaperme92&user_login=dyrus&user_login=onlyafro&user_login=summit1g",
      {
        headers: {
          "Client-ID": "ijy4lxlrffy8rys879pwigbl2hvg8h"
        }
      }
    )
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  isOnline() {
    let onlineData = this.state.data.data;
    let onlineArray = [];
    for (let i in onlineData) {
      onlineArray.push(i);
    }

    let totalOnline = onlineArray.length;
    if (totalOnline === 1) {
      return <h1>1 Streamer Online</h1>;
    } else if (totalOnline === 0) {
      return <h1>No Streamers Online</h1>;
    } else if (totalOnline > 1) {
      return <h1>{totalOnline} Streamers Online</h1>;
    }
  }

  render() {
    const keys = this.state.data.data;
    const ids = [];
    for (let i = 0; i < keys.length; i++) {
      ids.push(keys[i].user_id);
    }
    console.log(keys);
    console.log(ids);
    $(".stream-status").each(function(i) {
      let streamValue = $(this).attr("value");
      console.log($(this).attr("value"));
      console.log(ids.indexOf(streamValue));
      if (ids.indexOf(streamValue) > -1) {
        $(this).text("Online");
      } else {
        $(this).text("Offline");
      }
    });
    return (
      <section className="content">
        <div className="container">
          <div className="title" />
          {this.isOnline()}
          <div className="streamer-container">
            <Link
              to="/stream/dyrus"
              className="flex-col4"
              onClick={this.switchStream}
            >
              <div>
                <img src={dyrus} alt="dyrus pfp" />
                <p>Dyrus</p>
                <p className="stream-status" value="30080751" />
              </div>
            </Link>
            <Link
              to="/stream/cantaperme92"
              className="flex-col4"
              onClick={this.switchStream}
            >
              <div>
                <img src={canta} alt="cantaperme92 pfp" />
                <p>CantaPerMe92</p>
                <p className="stream-status" value="73735538" />
              </div>
            </Link>
            <Link
              to="/stream/onlyafro"
              className="flex-col4"
              onClick={this.switchStream}
            >
              <div>
                <img src={onlyafro} alt="onlyafro pfp" />
                <p>OnlyAfro</p>
                <p className="stream-status" value="17606157" />
              </div>
            </Link>
            <Link
              to="/stream/summit1g"
              className="flex-col4"
              onClick={this.switchStream}
            >
              <div>
                <img src={summit} alt="summit1g pfp" />
                <p>Summit1g</p>
                <p className="stream-status" value="26490481" />
              </div>
            </Link>
          </div>
        </div>
        <div className="container">
          <Route exact path="/stream/" component={placeholder} />
          <Route path="/stream/:twitch_id" component={streamSwitch} />
        </div>
      </section>
    );
  }
}

const placeholder = () => <h1>Select a streamer to show their stream!</h1>;

const streamSwitch = ({ match }) => (
  <div className="stream-container">
    <iframe
      id="twitch-player"
      src={`https://player.twitch.tv/?channel=${match.params.twitch_id}`}
      frameBorder="0"
      title={match.params.twitch_id}
      allowFullScreen={true}
      scrolling="no"
      height="378"
      width="620"
    />
  </div>
);

export default Stream;
