import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import Library from "./components/Library";
import Album from "./components/Album";

class App extends Component {
  render() {
    return (
      <div className="App bg-green black-70 pa4">
        <header>
          <nav>
            <Link className="black link dim" to="/">
              Landing
            </Link>
            <Link className="black link dim" to="/library">
              Library
            </Link>
          </nav>
          <h1 className="f2">React Jams</h1>
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
