import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="contact">
          <h2>Built by Samuel Omanchi.</h2>
          <h3>Reach Out:</h3>
          <div className="social-list">
            <button className="social-btn" href="mailto:">
              <i className="fa fa-envelope-square fa-4x" />
            </button>
            <button className="social-btn" href="https://twitter.com/cortehz">
              <i className="fa fa-twitter-square fa-4x" />
            </button>
            <button className="social-btn" href="https://github.com/cortehz">
              <i className="fa fa-git-square fa-4x" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
