import React, { Component } from "react";
import "./App.css";
import Search from "./Search.js";
import "./Search.css";
import Footer from "./Footer.js";
import "./Footer.css";

// import logo from "../images/react.svg";
// import news from "../images/news.png";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="appHeader">
          <div className="title">
            <h1 className="headlines" id="solid">
              Headlines
            </h1>
            <h4 className="power">
              Powered by
              <a href="https://newsapi.org/"> News API </a>{" "}
            </h4>
          </div>

          {/* <img className="scriptLogo" src={news} alt="Javascript Logo" /> */}
        </div>
        <Search default="bbc-news" />
        <Footer />
      </div>
    );
  }
}

export default App;
