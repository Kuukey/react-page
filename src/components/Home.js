import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <section className="content">
        <section className="container">
          <h2>Welcome to an example react api demo!</h2>
          <h1>To begin, select "streams" in the header!</h1>
          <p style={{ textAlign: "center" }}>
            This is my first demo made to show off a simple desktop react app
            design while also using Twitch's api. I would eventually love to add
            more quality of life feature to this project.
          </p>
        </section>
      </section>
    );
  }
}

export default Home;
