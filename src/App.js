import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./styles/main.css";
import Landing from "./components/Landing";
import Library from "./components/Library";
import Album from "./components/Album";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="dt bg-dark-purple w-100 border-box ph3 pv3 pv4-ns ph4-m ph5-l">
          <nav className="dt f6 fw6 ttu tracked w-100">
            <Link
              to="/"
              title="Home"
              className="dtc v-mid mid-gray link dim w-25 tl"
            >
              <img
                src="./assets/images/bloc_jams_logo.png"
                alt="Site Logo"
                className="dib w2 h2 br-100"
              />
            </Link>
            <div className="dtc v-mid w-75 tr">
              <Link
                to="/library"
                className="link turq dim dark-gray f6 f5-ns dib mr3 mr4-ns"
              >
                Library
              </Link>
            </div>
          </nav>
        </header>
        <div className="f1 bg-turq">React Jams</div>

        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
