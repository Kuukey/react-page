import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p className="footer-text">
          Created by{" "}
          <a
            href="https://github.com/Kuukey"
            rel="noopener noreferrer"
            target="_blank"
          >
            Kuukey
          </a>
        </p>
      </div>
    );
  }
}

export default Footer;
