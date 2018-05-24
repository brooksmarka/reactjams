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
        <header className="dt bg-dark-purple w-100 border-box ph3 pv3 pv3-ns ph3-m ph3-l">
          <nav className="dt f6 fw6 w-100">
            <Link
              to="/"
              title="Home"
              className="dtc v-mid mid-gray link dim w-25 tl"
            >
              <img
                src="./assets/images/rjlogo.png"
                alt="Site Logo"
                className="dib w3 h3"
              />
            </Link>
            <div className="dtc v-mid w-75 tr">
              <Link
                to="/library"
                className="av link turq dim dark-gray f5 f4-ns dib mr3 mr5-ns"
              >
                Library
              </Link>
            </div>
          </nav>
        </header>

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
