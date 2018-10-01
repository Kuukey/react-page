import React, { Component, Fragment } from "react";
import { HashRouter, Route, NavLink } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./components/Home";
import Stream from "./components/Stream";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <main>
          <Navbar />
          <div className="layout">
            <section className="content">
              <Route exact path="/" component={Home} />
              <Route path="/stream" component={Stream} />
            </section>
          </div>
          <Footer />
        </main>
      </HashRouter>
    );
  }
}

export default Main;
