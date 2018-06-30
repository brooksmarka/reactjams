import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./styles/main.css";
import Landing from "./components/Landing";
import Library from "./components/Library";
import Album from "./components/Album";
import Header from "./components/Header";
import Player from "./components/Player";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
        <Player />
      </div>
    );
  }
}

export default App;
