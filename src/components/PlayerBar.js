import React, { Component } from "react";

class PlayerBar extends Component {
  nextSong() {}

  render() {
    return (
      <section className="player-bar avenir">
        <section className="buttons pl2 tc" id="buttons">
          <button
            className="back-button pv2 ph3 bw0 ba link br-pill dim mb3 bg-dark-purple turq"
            id="previous"
            onClick={this.props.handlePrevClick}
          >
            <span className="ion-skip-backward" />
          </button>
          <button
            className="play-pause pv2 mh3 ph4 bw0 ba link br-pill dim mb3 bg-dark-purple turq"
            id="play-pause"
            onClick={this.props.handleSongClick}
          >
            <span
              className={
                this.props.isPlaying
                  ? "ion-pause v-mid h-mid"
                  : "ion-play v-mid h-mid"
              }
            />
          </button>
          <button
            className="forward-button pv2 ph3 bw0 ba link br-pill dim mb3 bg-dark-purple b-dark-purple turq"
            id="next"
            onClick={this.props.handleNextClick}
          >
            <span className="ion-skip-forward" />
          </button>
        </section>
        <section className="time-control" id="time-control">
          <div className="current-time pa1">
            {this.props.formatTime(this.props.currentTime)}
          </div>
          <input
            type="range"
            className="seek-bar pa1"
            value={this.props.currentTime / this.props.duration || 0}
            max="1"
            min="0"
            step="0.01"
            onChange={this.props.handleTimeChange}
          />
          <div className="total-time">
            {this.props.isPlaying
              ? this.props.formatTime(this.props.duration)
              : null}
          </div>
        </section>
        <section id="volume-control">
          <div className="icon ion-volume-low pa1" />
          <input
            type="range"
            className="seek-bar "
            value={this.props.volume}
            onChange={this.props.handleVolumeChange}
          />
          <div className="icon ion-volume-high pa1" />
        </section>
      </section>
    );
  }
}

export default PlayerBar;
